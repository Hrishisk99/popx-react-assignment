import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "radio" ? value === "yes" : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter valid email";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.agency === "") {
      newErrors.agency = "Select an option";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("popxUser", JSON.stringify(formData));

      navigate("/profile");
    }
  };

  return (
    <div className="signup-page">
      <div className="page-header">
        <h1 className="page-title">
          Create your
          <br />
          PopX account
        </h1>

        <button type="button" className="back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name*</label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
          />

          {errors.fullName && (
            <span className="error-text">{errors.fullName}</span>
          )}
        </div>

        <div className="input-group">
          <label>Phone number*</label>

          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        <div className="input-group">
          <label>Email address*</label>

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label>Password*</label>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        <div className="input-group">
          <label>Company name</label>

          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="agency-section">
          <p>Are you an Agency?*</p>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === true}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === false}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          {errors.agency && <span className="error-text">{errors.agency}</span>}
        </div>

        <button type="submit" className="signup-btn">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
