import React, { useState } from 'react';
import './job_type.css'; 
import Describe from './type_freelancer';
import Free2 from './type_employer';

function JobForm() {
    const [jobType, setJobType] = useState(null);

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    return (
        <div className="job">
            <h1 className="form">New Job</h1>
            <div className="job-type">
                <h2>Select Job Type:</h2>
                <label className="job-type-label">
                    <input
                        type="radio"
                        value="freelance"
                        checked={jobType === 'freelance'}
                        onChange={handleJobTypeChange}
                    />
                    Freelance
                </label>
                <label className="job-type-label">
                    <input
                        type="radio"
                        value="employer"
                        checked={jobType === 'employer'}
                        onChange={handleJobTypeChange}
                    />
                    Employer
                </label>
            </div>
            <div className="job-component">
                {jobType === 'freelance' && <Describe />}
                {jobType === 'employer' && <Free2 />}
            </div>
        </div>
    );
}

export default JobForm;

