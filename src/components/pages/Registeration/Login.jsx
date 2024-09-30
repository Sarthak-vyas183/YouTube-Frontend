import React, { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";

function Login() {
  const { token, setToken } = useContext(UserContext);
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
    console.log(formData.email);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`/api/v1/user/login`, {
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data);

      setToken(response.data.token);
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  return (
    <div className="space-y-2">
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
