import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import ProtectedRoute from "./routes/ProtectedRoute";

const LandingPage = lazy(() =>
  import("./pages/LandingPage")
);

const Register = lazy(() =>
  import("./pages/Register")
);

const Login = lazy(() =>
  import("./pages/Login")
);

const DashboardPage = lazy(() =>
  import("./pages/Dashboard")
);

const Dashboard = lazy(() =>
  import("./pages/Dashboard")
);


const Leads = lazy(() =>
 import("./pages/Leads")
);

const Analytics = lazy(() =>
 import("./pages/Analytics")
);

const Reports = lazy(() =>
 import("./pages/Reports")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen text-xl">
            Loading...
          </div>
        }
      >
        <Routes>

          <Route
            path="/"
            element={<LandingPage />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />


<Route
 path="/leads"
 element={
  <ProtectedRoute>
   <Leads />
  </ProtectedRoute>
 }
/>

<Route
 path="/analytics"
 element={
  <ProtectedRoute>
   <Analytics />
  </ProtectedRoute>
 }
/>

<Route
 path="/reports"
 element={
  <ProtectedRoute>
   <Reports />
  </ProtectedRoute>
 }
/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;