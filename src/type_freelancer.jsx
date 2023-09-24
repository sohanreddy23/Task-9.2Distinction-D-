import React, { useState } from 'react';
import './employer_freelancer.css';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore'; 
import { storage } from './firebase';

function Free2() {
  const [imageUpload, setImageUpload] = useState(null);
  const [jobData, setJobData] = useState({
    jobTitle: '',
    jobDescription: '',
    jobSkills: '',
    projectLength: '',
    minPayment: '',
    maxPayment: '',
    workingHours: '',
  });

  const handleImageUpload = () => {
    if (imageUpload == null) return;

    const storageRef = ref(storage, `images/${imageUpload.name}`);

    uploadBytes(storageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log('Image URL:', url);

          postJobToFirestore({ ...jobData, imageUrl: url });
        });
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  const handleFileChange = (event) => {
    setImageUpload(event.target.files[0]);
  };

  const postJobToFirestore = (jobDataWithImage) => {
    const db = getFirestore();
    const jobsCollectionRef = collection(db, 'jobs');

    jobDataWithImage.timestamp = Timestamp.now();

    addDoc(jobsCollectionRef, jobDataWithImage)
      .then(() => {
        console.log('Job posted to Firestore successfully');
      
        setJobData({
          jobTitle: '',
          jobDescription: '',
          jobSkills: '',
          projectLength: '',
          minPayment: '',
          maxPayment: '',
          workingHours: '',
        });
      })
      .catch((error) => {
        console.error('Error posting job to Firestore:', error);
      });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setJobData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="free2">
      <h1 className="header">Describe Your Job</h1>
      <div className="form-section">
        <label>Title/Position</label>
        <input type="text" id="jobTitle" className="input-field" onChange={handleInputChange} />
        <label>Job Description</label>
        <input type="text" id="jobDescription" className="input-field" onChange={handleInputChange} />
        <label>Skills</label>
        <input type="text" id="jobSkills" className="input-field" onChange={handleInputChange} />
        <h4 className="text">
          Developers will find your job based on the skills you added here
        </h4>
      </div>
      <div className="form-section">
        <h1 className="header">Project Conditions</h1>
        <label>Project Length</label>
        <input type="text" id="projectLength" className="input-field" onChange={handleInputChange} />
        <label>Payment (Min)</label>
        <input type="text" id="minPayment" className="input-field" onChange={handleInputChange} />
        <label>Payment (Max)</label>
        <input type="text" id="maxPayment" className="input-field" onChange={handleInputChange} />
        <label>Working Hours</label>
        <input type="text" id="workingHours" className="input-field" onChange={handleInputChange} />
      </div>

      <div className="form-section">
        <label>Add an Image: </label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleImageUpload}>Upload Image</button>
      </div>

      <button className="post-button" onClick={() => postJobToFirestore(jobData)}>Post</button>
    </div>
  );
}

export default Free2;
