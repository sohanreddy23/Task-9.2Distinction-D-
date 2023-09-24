import React, { useState } from 'react';
import './findjobs.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function FindJobs() {
  const initialJobListings = [
    {
      title: 'Database Administrator',
      description: 'At least 1 project should be completed in the university',
      skills: 'Mysql, Javascript',
    },
    {
      title: 'Web Developer',
      description: 'At least 1 project should be completed in the university',
      skills: 'Nodejs, Reactjs',
    },
  ];

  const [jobListings, setJobListings] = useState(initialJobListings);
  const [searchTerm, setSearchTerm] = useState('');
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    skills: '',
  });

  const [expandedJob, setExpandedJob] = useState(null);

  const handleSearch = () => {
    const filtered = initialJobListings.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setJobListings(filtered);
  };

  const handleAddJob = () => {
    setJobListings((prevListings) => [
      ...prevListings,
      {
        title: newJob.title,
        description: newJob.description,
        skills: newJob.skills,
      },
    ]);
    setNewJob({ title: '', description: '', skills: '' });
  };

  const toggleExpand = (jobIndex) => {
    setExpandedJob(expandedJob === jobIndex ? null : jobIndex);
  };

  const handleDeleteJob = (jobIndex) => {
    const updatedListings = [...jobListings];
    updatedListings.splice(jobIndex, 1);
    setJobListings(updatedListings);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(jobListings);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setJobListings(items);
  };

  return (
    <div>
      <h1>Find Jobs</h1>
      <input
        type="text"
        placeholder="Search by job title or skill"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="jobListings">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {jobListings.map((job, jobIndex) => (
                <Draggable key={jobIndex} draggableId={`job-${jobIndex}`} index={jobIndex}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`job-card ${expandedJob === jobIndex ? 'expanded' : ''}`}
                    >
                      <div className="job-header" onClick={() => toggleExpand(jobIndex)}>
                        <h2>{job.title}</h2>
                        <p>Skills: {job.skills}</p>
                      </div>
                      {expandedJob === jobIndex && (
                        <div className="job-details">
                          <p>{job.description}</p>
                        </div>
                      )}
                      <button onClick={() => handleDeleteJob(jobIndex)}>Delete</button>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div>
        <h2>Add New Job</h2>
        <input
          type="text"
          placeholder="Job Title"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Job Description"
          value={newJob.description}
          onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Skills"
          value={newJob.skills}
          onChange={(e) => setNewJob({ ...newJob, skills: e.target.value })}
        />
        <button onClick={handleAddJob}>Add Job</button>
      </div>
    </div>
  );
}

export default FindJobs;
