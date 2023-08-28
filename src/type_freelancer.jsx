import React from 'react';
import './employer_freelancer.css'; 

function Free2() {
    return (
        <div className="free2">
            <h1 className="header">Describe Your Job</h1>
            <div className="form-section">
                <label>Title/Position</label>
                <input
                    type="text"
                    id="jobTitle"
                    className="input-field"
                />
                <label>Job Description</label>
                <input
                    type="text"
                    id="jobDescription"
                    className="input-field"
                />
                <label>Skills</label>
                <input
                    type="text"
                    id="jobSkills"
                    className="input-field"
                />
                <h4 className="text">Developers will find your job based on the skills you added here</h4>
            </div>
            <div className="form-section">
                <h1 className="header">Project Conditions</h1>
                <label>Project Length</label>
                <input
                    type="text"
                    id="projectLength"
                    className="input-field"
                />
                <label>Payment (Min)</label>
                <input
                    type="text"
                    id="minPayment"
                    className="input-field"
                />
                <label>Payment (Max)</label>
                <input
                    type="text"
                    id="maxPayment"
                    className="input-field"
                />
                <label>Working Hours</label>
                <input
                    type="text"
                    id="workingHours"
                    className="input-field"
                />
            </div>
            
                 <button className="post-button">Post</button>
        </div>
    );
}

export default Free2;