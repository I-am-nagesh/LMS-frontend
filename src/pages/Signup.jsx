import { BsPersonCircle } from "react-icons/bs";
import Homelayout from "../layouts/HomeLayout";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const [previewImage, setPreviewImage] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    if(!signupDetails.email || !signupDetails.password || !signupDetails.fullName || !signupDetails.avatar){
        toast.error("please fill all the details");
        return;
    }
  }

  return (
    <Homelayout>
      <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
        <form onSubmit={onFormSubmit} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-3.4">
          <h1 className="text-2xl text-centre font-bold">Registration Page</h1>
          <label htmlFor="image_uploads" className="cursor-pointer">
            {previewImage ? (
              <img
                className="w-24 h-24 rounded-full m-auto"
                src={previewImage}
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
            )}
          </label>
          <input
            type="file"
            className="hidden"
            name="image_uploads"
            id="image_uploads"
            accept=".jpg, .jpeg, .png, .svg"
          />

          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="font-semibold">
              Name
            </label>
            <input
              required
              type="text"
              name="fullName"
              className="bg-transparent px-2 py-1 border"
              placeholder="enter your name..."
              id="fullName"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              required
              type="text"
              name="email"
              className="bg-transparent px-2 py-1 border"
              placeholder="enter your email..."
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              className="bg-transparent px-2 py-1 border"
              placeholder="enter your password..."
              id="password"
            />
          </div>
          <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold">
            Create account
          </button>
          <p className="text-center">
            Already have an account ?{" "}
            <Link to="/login" className="cursor-pointer text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </Homelayout>
  );
}
export default Signup;
