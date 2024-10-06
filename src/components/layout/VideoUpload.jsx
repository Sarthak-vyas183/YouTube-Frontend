import React, { useState } from "react";

function VideoUpload({ onClose }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [step, setStep] = useState(1); // Track the current step

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && file) {
      setStep(2); // Move to the next step
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the upload logic here
    console.log("Uploading:", file, title, description);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-[#121212] p-6 rounded shadow-lg text-white w-[50%] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-4xl text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          &times; {/* Cross icon */}
        </button>

        <h2 className="text-lg font-bold mb-4">Upload Video</h2>
        {step === 1 ? (
          <form onSubmit={handleNext} className="flex flex-col items-center">
            <div className="border-dashed border-2 border-gray-400 rounded-lg p-8 flex flex-col items-center justify-center mb-4 w-full">
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                required
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="text-4xl mb-2">
                    <span className="material-icons text-white">upload</span>
                  </div>
                  <p className="text-lg text-white">Drag and drop video files to upload</p>
                  <p className="text-sm  text-white">or</p>
                  <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                    Select files
                  </button>
                </div>
              </label>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Next
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
           
            {/* Action Buttons */}
            <div className="flex justify-between">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                Upload
              </button>
              <button type="button" onClick={() => setStep(1)} className="bg-gray-300 text-black px-4 py-2 rounded">
                Back
              </button>
              <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default VideoUpload;
