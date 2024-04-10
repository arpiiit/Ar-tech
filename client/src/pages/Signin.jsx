import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

function Signin() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrormessage] = useState(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrormessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrormessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        return setErrormessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrormessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="sm:text-4xl  mb-10 text-3xl items-center justify-center flex">
        Let's SignIn
      </div>
      <div className="flex gap-10 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link
            className="font-serif font-bold dark:text-white text-4xl"
            to="/"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-300 shadow-lg via-purple-500 to-pink-400 rounded-md text-white">
              Arpit's
            </span>
            <span className="italic font-serif">TechBlog</span>
          </Link>
          <p className="text-sm font-serif italic mt-5">
            Explore my blog world and enhance new features to explore new things
            and upload new images that you like.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <div className="">
              <Label value="Your Email" />
              <TextInput
                type="text"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="***********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              disabled={loading}
              gradientDuoTone="purpleToBlue"
              type="submit"
            >
              {loading ? (
                <>
                  <Spinner className="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span className="italic font-serif">Don't have an account? </span>
            <Link to="/sign-up" className="text-blue-500">
              {" "}
              Sign up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5 font-bold font-serif" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signin;

// /api/auth/signin
