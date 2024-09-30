import React, { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const {setTokenToLS, setLoggedUserData} = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`/api/v1/user/login`, {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200 && response.data.data.accessToken) {
        setTokenToLS(response.data.data.accessToken);
        setLoggedUserData(response.data.data.user);
        setFormData({
          email: "",
          password: "",
        });
        toast.success(response.data.message || "Login successful!");
      } else {
        toast.error("Login failed: Incorrect email or password.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data || "An error occurred.");
      } else {
        toast.error("Network error: Unable to reach the server.");
      }
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="space-y-2">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex flex-col space-y-2">
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          type="email"
          placeholder="Email"
        />
        <div className="flex justify-between items-center">
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="text-blue-500 font-medium" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
