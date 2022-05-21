import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/Pages/About/About";
import Appointment from "./components/Pages/Appointment/Appointment";
import Contact from "./components/Pages/Contact/Contact";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MyAppointment from "./components/Pages/Dashboard/MyAppoinment";
import MyHistory from "./components/Pages/Dashboard/MyHistory";
import MyReview from "./components/Pages/Dashboard/MyReview";
import Home from "./components/Pages/Home/Home/Home";
import Login from "./components/Pages/Login/Login/Login";
import RequireAuth from "./components/Pages/Login/Login/RequireAuth";
import SignUp from "./components/Pages/Login/Login/SignUp";
import NotFound from "./components/Pages/NotFound/NotFound";
import Review from "./components/Pages/Review/Review";
import Navbar from "./components/Pages/Shared/Navbar";


function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                  path="/appointment"
                  element={
                      <RequireAuth>
                          <Appointment />
                      </RequireAuth>
                  }
              ></Route>
              <Route
                  path="/dashboard"
                  element={
                      <RequireAuth>
                          <Dashboard />
                      </RequireAuth>
                  }
              >
                  <Route index element={<MyAppointment />} />
                  <Route path="review"
                  element={<MyReview />} />
                  <Route path="history"
                  element={<MyHistory />} />
              </Route>
              <Route path="/review" element={<Review />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <ToastContainer />
      </div>
  );
}

export default App;
