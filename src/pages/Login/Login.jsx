import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/profile");
    }
  };

  return (
    <div className="login-page">
      <div className="page-header">
        <h1 className="page-title">
          Signin to your
          <br />
          PopX account
        </h1>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error-text">
              {errors.email}
            </span>
          )}
        </div>

        <div className="input-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          {errors.password && (
            <span className="error-text">
              {errors.password}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="login-btn"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;