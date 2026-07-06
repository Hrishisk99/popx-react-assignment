import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-content">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <form className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;