import React, { useState } from "react";

function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    coverImage: null,
    avatar: null,
  });
  const [isUsernameUnique, setIsUsernameUnique] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const verifyUsername = async () => {
    // Placeholder function for username verification
    const isUnique = await new Promise((resolve) =>
      setTimeout(() => resolve(Math.random() > 0.5), 1000)
    );
    setIsUsernameUnique(isUnique);
  };

  const handleNext = () => {
    if (formData.username && formData.email && formData.password) {
      setStep(2);
    } else {
      alert("Please fill all fields before proceeding.");
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
  };

  return (
    <div className="space-y-2 bg-gray-800 rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {step === 1 ? (
          <>
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
                <label htmlFor="coverImage" className="text-gray-300 mb-1 block">
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