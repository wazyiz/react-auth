import React from "react";

const Login = () => {
    return (
  <form>

    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <input type="email" className="form-control" placeholder="name@example.com" required />

      <input type="password" className="form-control" placeholder="Password" required />

    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

  </form>
           );
};

export default Login;
