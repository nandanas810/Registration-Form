import { useState } from 'react'
// 
import './App.css'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
});

const [errors, setErrors] = useState({});

// Handle input change
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

// Form validation
const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.address) formErrors.address = 'Address is required';
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) formErrors.mobile = 'Valid 10-digit mobile number required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Valid email required';
    if (!formData.gender) formErrors.gender = 'Gender is required';
    if (!formData.dob) formErrors.dob = 'Date of Birth is required';
    if (!formData.course) formErrors.course = 'Course selection is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
};

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert(`Data Stored Successfully!
        \nName: ${formData.name}
        \nAddress: ${formData.address}
        \nMobile: ${formData.mobile}
        \nEmail: ${formData.email}
        \nGender: ${formData.gender}
        \nDate of Birth: ${formData.dob}
        \nCourse: ${formData.course}`);
    }
};

// Reset form
const handleReset = () => {
    setFormData({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: '',
    });
    setErrors({});
};

return (
    <div className="form-container">
        <h2>ADMISSION FORM FOR HIGH SCHOOL</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            
            <div className="form-group">
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
                {errors.address && <p className="error">{errors.address}</p>}
            </div>
            
            <div className="form-group">
                <label>Mobile:</label>
                <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="10-digit number"
                />
                {errors.mobile && <p className="error">{errors.mobile}</p>}
            </div>
            
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            
            <div className="form-group">
                <label>Gender:</label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    checked={formData.gender === "Male"}
                /> Male
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    checked={formData.gender === "Female"}
                /> Female
                <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                    checked={formData.gender === "Other"}
                /> Other
                {errors.gender && <p className="error">{errors.gender}</p>}
            </div>
            
            <div className="form-group">
                <label>Date of Birth:</label>
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                />
                {errors.dob && <p className="error">{errors.dob}</p>}
            </div>
            
            <div className="form-group">
                <label>Course:</label>
                <select name="course" value={formData.course} onChange={handleChange}>
                    <option value="">Select Course</option>
                    <option value="Biology">BioMaths</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Commerce">BioIp</option>
                </select>
                {errors.course && <p className="error">{errors.course}</p>}
            </div>
            
            <div className="buttons">
                <button type="submit" className="register-btn">Register</button>
                <button type="button" onClick={handleReset} className="cancel-btn">Cancel</button>
            </div>
        </form>
    </div>
);
}

export default RegistrationForm;
