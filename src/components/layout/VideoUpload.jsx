import React, { useContext, useState } from "react";
import Upload from "../../assets/Upload.png";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import UserContext from "../../context/UserContext";
import uploadingIcon from '../../assets/uploading.gif'
function VideoUpload({ onClose }) {
  const {token} = useContext(UserContext)

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null); // Use null for no file selected initially
  const [step, setStep] = useState(1); // Track the current step
  const [uploading, setUploading] = useState(false); // Track uploading state

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && file) {
      setStep(2); // Move to the next step
    }
   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!file || !title || !description || !thumbnail) {
      return toast.error("All fields are require")
    } 

    try { 
        setUploading(true)
        const formData = new FormData();
        formData.append("title", title)
        formData.append("description", description)
        formData.append("videoFile", file)
        formData.append("thumbnail", thumbnail) 

        const response = await axios.post(`/api/v1/videos`,
           formData,
          {
            headers : {
                "Content-Type": "multipart/form-data",
                Authorization : `Bearer ${token}`
            } 
          }
        ) 
         setFile('')
         setTitle('')
         setDescription('')
         setThumbnail('') 
         setUploading('')
         toast.success(response.data.message)
    } catch (error) {
      console.log(error);
      toast.error("Internal server error")
    }
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
          &times;
        </button>

        <h2 className="text-lg font-bold mb-4">Upload Video</h2>
        {step === 1 ? (
          <div>
            <label
              htmlFor="file-upload"
              className="h-32 w-full cursor-pointer p-2 justify-center items-center flex flex-col"
            >
              <img
                className="h-28 w-28 p-4 bg-[#909090] rounded-full text-white"
                src={Upload}
                alt="Upload Icon"
              />
              <h1>Upload Video file</h1>
            </label>

            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="video/*"
              onChange={(e) => setFile(e.target.files[0])} // Set the selected file
            />
            <br /> 
            <div className="w-full flex justify-end">
              <button onClick={handleNext} className="p-1 px-6 bg-blue-600">
                Next
              </button>
            </div> 
          </div>
        ) : (
          <section>
            <h1>{title || "Video Title"}</h1> <br />
            <h1>{file ? file.name : "No video file selected"}</h1>{" "}
            {/* Display file name */}
            <h1 className="text-2xl font-semibold">Details</h1> <br />
            <div>
              <input
                type="text"
                placeholder="Title of the video"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="outline-none py-1 px-2 w-full bg-transparent border-2 border-white"
              />
            </div>
            <br />
            <div>
              <textarea
                className="bg-transparent px-2 py-1 row-8 w-full outline-none border-2 border-white"
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <br />
            <div className="cursor-pointer">
              <input
                type="text"
                placeholder="Uploaded video file path"
                value={file ? file.name : ""} // Use file.name to display file name
                disabled
                className="outline-none py-1 px-2 w-full bg-transparent border-2 border-white"
              />
              <br /> <br />
              <span className="flex w-full px-1 gap-12">
                <label htmlFor="thumbnail">
                  <p className="bg-blue-600 px-2 py-1">Upload Thumbnail</p>
                </label>
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/*"
                  onChange={(e) => setThumbnail(e.target.files[0])} // Set thumbnail file
                />
              </span>
            </div>
            <br />
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-green-600 rounded-sm px-2 py-1"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload Video"}
              </button>
            </div> 

            {uploading ? (
                <div className="m-0 w-[46vw] h-[80vh] absolute top-16 bg-transparent flex justify-center items-center">
                <div>
                <h1 className="rounded-sm px-2 py-1 bg-yellow-300 text-black">Uploading Video  please wait</h1>
                <img className="w-[100%] h-auto" src={uploadingIcon} alt="" />
                </div>
             </div>
            ) : ('') }
          </section> 
        )}
      </div>
    </div>
  );
}

export default VideoUpload;
