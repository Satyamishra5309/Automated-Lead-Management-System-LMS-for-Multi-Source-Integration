import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { registerUser } from "../api/authApi";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      name: "",

      email: "",

      password: ""
    });


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    });
  };


  const handleSubmit =
   async (e) => {

    e.preventDefault();

    try {

      await registerUser(
        formData
      );

      alert(
        "Registration Successful"
      );

      navigate("/login");

    } catch (error) {

      alert(
        "Registration failed"
      );
    }
  };


  return (

    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">


      <div className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white p-8 sm:p-12 md:p-16 flex flex-col justify-center">

        <h1 className="text-5xl font-bold mb-6">

          LMS Pro

        </h1>

        <p className="text-xl mb-10 opacity-90">

          Join businesses managing leads smarter and faster.

        </p>

        <div className="space-y-4">

          <p>✓ Easy Setup</p>

          <p>✓ Multi Platform Integration</p>

          <p>✓ Secure Authentication</p>

          <p>✓ Analytics Dashboard</p>

        </div>

      </div>



      <div className="bg-slate-50 flex justify-center items-center px-4 py-8 sm:px-6">

        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-[450px]">

          <button
            onClick={() =>
              navigate("/")
            }

            className="flex items-center gap-2 text-gray-500 mb-6"
          >

            <ArrowLeft size={18}/>

            Back to Home

          </button>


          <h2 className="text-4xl font-bold mb-8">

            Create Account

          </h2>


          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />


            <Input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />


            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />


            <Button
              type="submit"
            >

              Create Account

            </Button>

          </form>


          <p className="mt-6 text-center">

            Already have account?

            <span

              onClick={() =>
                navigate("/login")
              }

              className="text-indigo-600 cursor-pointer ml-2"
            >

              Login

            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;