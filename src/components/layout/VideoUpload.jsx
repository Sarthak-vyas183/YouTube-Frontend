import React, { useState } from "react";
import Upload from "../../assets/Upload.png";
function VideoUpload({ onClose }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [step, setStep] = useState(1); // Track the current step
  const [uploading, setUploading] = useState(false); // Track uploading state

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && file) {
      setStep(2); // Move to the next step
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    // Simulate upload logic
    console.log("Uploading:", file, title, description);
    // Simulate a delay for upload
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setUploading(false);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-black-500 bg-opacity-75 w-[100vw] h-[100vh] flex items-center justify-center z-50">
      <div className="bg-[#282828] p-6 rounded-lg shadow-lg text-white md:w-[50%] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-4xl text-gray-600 hover:text-gray-100"
          aria-label="Close"
        >
          &times; {/* Cross icon */}
        </button>

        <h2 className="text-lg font-bold mb-4">Upload Video</h2>
        {step === 1 ? (
          <div>
            <label
              htmlFor="file-upload"
              className="h-32 w-full cursor-pointer p-2 justify-center items-center flex flex-col"
            >
              <img
                className="h-28 w-28 p-4  bg-[#909090] rounded-full text-white"
                src={Upload}
                alt=""
              />
              <h1>Upload Video file</h1>
            </label>
            <input type="file" id="file-upload" className="hidden" /> <br />
            <div className="w-full flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="p-1 px-6 bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <section>
            <h1>{title || "Video Title"}</h1> <br />
            <h1 className="text-2xl font-semibold">Details</h1> <br />
            <div>
              <input
                type="text"
                placeholder="Title of the video"
                value={title}
                className="outline-none py-1 px-2 w-full bg-transparent border-2 border-white"
              />
            </div>{" "}
            <br />
            <div>
              <textarea
                className="bg-transparent px-2 py-1 row-8 w-full outline-none border-2 border-white"
                placeholder="Deacription.."
              ></textarea>
            </div>{" "}
            <br />
            <div className="cursor-pointer">
              <input
                type="text"
                placeholder="Uploaded video file path"
                value={file}
                className="outline-none py-1 px-2 w-full bg-transparent border-2 border-white"
              />{" "}
              <br /> <br />
              <span className="flex w-full px-1 gap-12">
                <label htmlFor="thumbnail">
                  <p className="bg-blue-600 px-2 py-1">Upload thumbnail </p>
                </label>
                <input type="file" id="thumbnail" />
              </span>
            </div> 
             <br />
            <div className=" flex justify-end">
            <button className="bg-green-600 rounded-sm px-2 py-1">Upload Video</button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default VideoUpload;
