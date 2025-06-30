import React, { useState } from "react";
import sbsPic from "../assets/images/sbs-pic.png";
import sbsLogo from "../assets/images/sbs-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // state to hold email input
  const [password, setPassword] = useState(""); // state to hold password input
  const [error, setError] = useState(""); // state to show error
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Handler for the login button
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/profile", { state: { loginSuccess: true } });
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        "Invalid email or password"
      );
    }
  };

  return (
    <>
      <section className="grid grid-cols-2">
        {/* SBS PIC */}
        <div className="w-full h-full overflow-hidden">
          <img src={sbsPic} alt="SBS Pic" className="h-screen object-cover" />
        </div>

        {/* Form */}
        <div className="flex flex-col justify-between p-5">
          <div className="flex flex-row-reverse mb-10">
            <img src={sbsLogo} alt="SBS Logo" className="" />
          </div>
          <div className="border-b border-border mb-10">
            <h1 className="text-iconic font-  text-5xl">Welcome Back</h1>
            <p className="text-font-light mb-10">
              Please Log in to access your student portal.
            </p>

            <form className="w-full" onSubmit={handleSubmit}>
              {/* Show error message if any */}
              {error && (
                <div style={{ color: "red", marginBottom: "1em" }}>{error}</div>
              )}
              <label htmlFor="email" className="text-font text-2xl">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-[#F3F3F3] text-font rounded-normal my-3"
                placeholder="yourexample@sbsedu.uni.vn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password" className="text-font text-2xl">
                Password
              </label>
              <div className="flex justify-between items-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full p-3 bg-[#F3F3F3] text-font rounded-normal my-3 pr-10"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="absolute right-5 cursor-pointer"
                  onClick={togglePassword}
                />
              </div>

              <Link className="text-font-light block">Forgot password?</Link>
              <button
                className="bg-iconic my-10 px-10 py-3 text-white rounded-normal"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>

          {/* Guest access */}
          <div>
            <h1 className="my-5">Some courses may allow guest access</h1>
            <button className="rounded-normal border border-font px-4 py-2">
              Access as a guest
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;