import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { loginUser } from "../api/authApi";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] =
    useState({
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

      const data =
       await loginUser(
         formData
       );

      localStorage.setItem(
        "token",
        data.token
      );

      dispatch(
        loginSuccess(data)
      );

      navigate("/dashboard");

    } catch (error) {
      alert("Login failed");
    }
  };

  return (

    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      <div className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white p-8 md:p-16 flex flex-col justify-center">

        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          LMS Pro
        </h1>

        <p className="text-base md:text-xl mb-10 opacity-90">
          Automate your lead management and analytics workflow.
        </p>

        <div className="space-y-4">

          <p>✓ Website Lead Sync</p>

          <p>✓ Meta Ads Integration</p>

          <p>✓ Google Ads Tracking</p>

          <p>✓ Real Time Analytics</p>

        </div>

      </div>



      <div className="bg-slate-50 flex justify-center items-center p-4">

        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-[450px]">


          <button
            onClick={() =>
              navigate("/")
            }

            className="flex items-center gap-2 text-gray-500 mb-6"
          >

            <ArrowLeft size={18}/>

            Back to Home

          </button>


          <h2 className="text-3xl md:text-4xl font-bold mb-8">

            Welcome Back

          </h2>


          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <Input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />


            <Input
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />


            <Button
              type="submit"
            >
              Login
            </Button>

          </form>


          <p className="mt-6 text-center">

            New here?

            <span

              onClick={() =>
                navigate("/register")
              }

              className="text-indigo-600 cursor-pointer ml-2"
            >

              Register

            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;