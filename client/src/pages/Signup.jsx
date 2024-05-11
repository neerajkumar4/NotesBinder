import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className=" border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className=" border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className=" border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={false}
          className="signButton p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="signLink">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;