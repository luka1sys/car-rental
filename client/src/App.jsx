import './styles/global.css';
import { useEffect, useState } from 'react';
import { Route, Routes, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import CarDetailsPage from './pages/CarDetailsPage';
import Navbar from './components/Navbar';
import ScrollAnimations from './components/Scroll';
import AuthenticationPage from './pages/AuthenticationPage';
import About from './pages/About';


import BookingPage from './pages/BookingPage';
import PaymentSuccessPage from './pages/PaymentSuccess';
import AdminPanel from './pages/AdminPanel';
import Panel from './pages/Panel';
import { ToastContainer } from "react-toastify";
import AboutPage from './pages/AboutPage';
import Car from './pages/Car';
import ConactUs from './pages/ContactUs';



function App() {
  const [loading, setLoading] = useState(true);

  // 1️⃣ Preloader დროებითი ტაიმერი
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 2️⃣ მაუსის წერტილის ეფექტი
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    if (!dot) return;

    const moveDot = (e) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, [loading]);


  // 4️⃣ თუ იტვირთება — აჩვენე Spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[rgba(0,0,0,1)]">
        <div className="animate-spin rounded-full overflow-hidden h-24 w-24 border-t-4 border-orange-500">
          <div className="rounded h-[100%] overflow-hidden"></div>
        </div>
      </div>
    );
  }

  // 5️⃣ როცა ჩაიტვირთა — აჩვენე საიტი
  return (
    <div className="w-full overflow-x-hidden">
      {/* მაუსის წერტილი */}
      <div
        id="cursor-dot"
        className="fixed top-0 left-0 w-[9px] h-[9px] bg-[rgb(255,54,0)] rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-180 ease-linear"
      ></div>


      <Navbar />
      <ScrollAnimations />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:id" element={<CarDetailsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contactus" element={<ConactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
        <Route path='/carspage' element={<CarsPage />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/panel" element={<Panel />} />
        <Route path='/car/:id' element={<Car />} />
        <Route path='/bookingpage/:id' element={<BookingPage />} />
        <Route path='/paymentsuccess' element={<PaymentSuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;