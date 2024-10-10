import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import UserContext from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
function SignUp() {
  const { setTokenToLS } = useContext(UserContext);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    coverImage: null,
    avatar: null,
  });
  const [isUsernameUnique, setIsUsernameUnique] = useState(null);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // Verify if the username is unique
  const verifyUsername = async () => {
    console.log("verfied username");
  };

  // Proceed to the next step after checking required fields
  const handleNext = () => {
    if (
      formData.username &&
      formData.email &&
      formData.password &&
      formData.fullName
    ) {
      setStep(2);
    } else {
      toast.error("Please fill all fields before proceeding.");
    }
  };

  // Go back to the previous step
  const handleBack = () => {
    setStep(1);
  };

  // Submit the form data
  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log(formData.avatar)
     console.log(formData.coverImage)
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.username ||
      !formData.avatar
    ) {
      toast.error("all fields are require");
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("email", formData.email);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("avatar", formData.avatar);
      formDataToSend.append("coverImage", formData.coverImage);

      const response = await axios.post(
        "/api/v1/user/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Make sure to set this header for file uploads
          },
        }
      );
      setFormData({
        fullName: "",
        username: "",
        email: "",
        password: "",
        coverImage: null,
        avatar: null,
      });

      console.log(response);
      if (response.status === 200 || (201 && response.data.data.accessToken)) {
        setTokenToLS(response.data.data.accessToken);
      }
      toast.success("Sign Up successful");
      Navigate("/");
    } catch (error) {
      console.error(error.response.status);
      if (error.response.status == 409) {
        toast.error("User Already exist");
      } else if (error.response.status == 400) {
        toast.error("All field require");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="space-y-2 bg-gray-800 rounded-lg max-w-md mx-auto">
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
      <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {step === 1 ? (
          <>
            {/* Full Name Input */}
            <div>
              <label htmlFor="fullName" className="text-gray-300 mb-1 block">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Username Input */}
            <div>
              <label htmlFor="username" className="text-gray-300 mb-1 block">
                Username
              </label>
              <div className="flex space-x-2">
                <input
                  id="username"
                  name="username"
                  className="flex-grow bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Choose a unique username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={verifyUsername}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  Verify
                </button>
              </div>
              {isUsernameUnique !== null && (
                <p
                  className={`mt-1 text-sm ${
                    isUsernameUnique ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {isUsernameUnique
                    ? "Username is available!"
                    : "Username is taken."}
                </p>
              )}
            </div>

            {/* Email and Password Inputs */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="email" className="text-gray-300 mb-1 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex-1">
                <label htmlFor="password" className="text-gray-300 mb-1 block">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-4"
            >
              Next
            </button>
          </>
        ) : (
          <>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="coverImage"
                  className="text-gray-300 mb-1 block"
                >
                  Cover Image
                </label>
                <input
                  id="coverImage"
                  name="coverImage"
                  className="w-full text-gray-300"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>

              <div className="flex-1">
                <label htmlFor="avatar" className="text-gray-300 mb-1 block">
                  Avatar
                </label>
                <input
                  id="avatar"
                  name="avatar"
                  className="w-full text-gray-300"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Sign Up
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default SignUp;
