import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import Appointment from "./components/Pages/Appointment/Appointment";
import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home/Home";
import Login from "./components/Pages/Login/Login/Login";
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
              <Route path="/appointment" element={<Appointment />}></Route>
              <Route path="/review" element={<Review />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </div>
  );
}

export default App;
