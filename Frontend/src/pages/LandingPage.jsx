import { useNavigate } from "react-router-dom";

const Landing = () => {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-slate-50">

      <nav className="flex flex-col sm:flex-row justify-between items-center px-4 md:px-16 py-6 bg-white shadow-sm gap-4 sm:gap-0">

        <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">

          LMS Pro

        </h1>


        <div className="flex gap-4 md:gap-6 items-center">

          <button
            onClick={() =>
              navigate("/login")
            }
            className="text-gray-700 font-medium"
          >
            Login
          </button>


          <button
            onClick={() =>
              navigate("/register")
            }
            className="bg-indigo-600 text-white px-4 md:px-6 py-3 rounded-xl"
          >
            Get Started
          </button>

        </div>

      </nav>



      <section className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-20 py-12 md:py-20 items-center gap-10">


        <div>

          <p className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full inline-block mb-6 text-sm md:text-base">

            Smart Lead Management System

          </p>


          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">

            Automate Your

            <span className="text-indigo-600">

              {" "}Lead Pipeline

            </span>

          </h1>


          <p className="mt-8 text-base md:text-lg text-gray-500 max-w-xl">

            Capture, track and manage leads from Website,
            Meta Ads and Google Ads with powerful analytics.

          </p>


          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button
              onClick={() =>
                navigate("/register")
              }
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl"
            >
              Get Started
            </button>


            <button
              onClick={() =>
                navigate("/login")
              }
              className="border px-8 py-4 rounded-xl"
            >
              Login
            </button>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 mt-14">

            <div>

              <h2 className="text-3xl font-bold">

                10K+

              </h2>

              <p className="text-gray-500">

                Leads Captured

              </p>

            </div>


            <div>

              <h2 className="text-3xl font-bold">

                98%

              </h2>

              <p className="text-gray-500">

                Accuracy Rate

              </p>

            </div>


            <div>

              <h2 className="text-3xl font-bold">

                24/7

              </h2>

              <p className="text-gray-500">

                Monitoring

              </p>

            </div>

          </div>

        </div>

        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-[550px]">

            <h2 className="text-xl md:text-2xl font-bold mb-8">

              Dashboard Preview

            </h2>


            <div className="grid grid-cols-2 gap-4">

              <div className="bg-indigo-500 text-white p-5 rounded-xl">

                Total Leads

                <h2 className="text-2xl font-bold mt-3">

                  12,540

                </h2>

              </div>


              <div className="bg-emerald-500 text-white p-5 rounded-xl">

                Converted

                <h2 className="text-2xl font-bold mt-3">

                  1,540

                </h2>

              </div>


              <div className="col-span-2 bg-slate-100 h-48 rounded-xl flex justify-center items-center text-gray-500">

                Analytics Chart Preview

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="px-4 md:px-20 pb-12 md:pb-20">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">

          Powerful Integrations

        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">

            <h3 className="text-xl font-semibold">

              Website Integration

            </h3>

            <p className="mt-4 text-gray-500">

              Auto fetch leads from website forms instantly.

            </p>

          </div>


          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">

            <h3 className="text-xl font-semibold">

              Meta Ads Sync

            </h3>

            <p className="mt-4 text-gray-500">

              Capture Facebook & Instagram leads automatically.

            </p>

          </div>


          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">

            <h3 className="text-xl font-semibold">

              Google Ads Tracking

            </h3>

            <p className="mt-4 text-gray-500">

              Sync Google campaign leads with analytics.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Landing;