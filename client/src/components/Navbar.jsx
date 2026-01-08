import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
    const { user } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <header className="w-full relative min-h-[80px] md:h-[116px] flex flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white z-50 border-b border-gray-100 ">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
                <img
                    className="cursor-pointer w-32 sm:w-40 md:w-[191px] h-auto"
                    src="/logo.svg"
                    alt="Novaride Logo"
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center items-center mx-4 xl:mx-8">
                <ul className="flex flex-row gap-8 xl:gap-10 items-center text-black font-semibold text-base xl:text-[18px]">

                    {/* Home */}
                    <li className="hover:text-[rgb(255,54,0)] transition-colors pb-1">
                        <Link to='/'>Home</Link>
                    </li>

                    {/* About Us */}
                    <li className="hover:text-[rgb(255,54,0)] transition-colors pb-1">
                        <Link to='/aboutus'>About Us</Link>
                    </li>

                    {/* Service Dropdown */}
                    <li className="relative group pb-1">
                        <button
                            className="flex items-center cursor-pointer gap-2 hover:text-[rgb(255,54,0)] transition-colors"
                            onClick={() => handleDropdownToggle('service')}
                        >
                            Service
                            <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" className="w-3 h-3 xl:w-3.5 xl:h-3.5" alt="" />
                        </button>
                        <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                            <div className="bg-[rgb(255,54,0)] shadow-xl py-4 px-4 rounded-[22px] w-[250px]">
                                <a className="block transition-all duration-300 px-2 text-white text-[17px] xl:text-[18px] hover:text-black font-semibold py-2">Car Rental With Driver</a>
                                <a className="block transition-all duration-300 px-2 text-white text-[17px] xl:text-[18px] hover:text-black font-semibold py-2">Business Car Rental</a>
                                <a className="block transition-all duration-300 px-2 text-white text-[17px] xl:text-[18px] hover:text-black font-semibold py-2">Airport Transfer</a>
                            </div>
                        </div>
                    </li>

                    {/* Cars Dropdown */}
                    <li className="relative group pb-1">
                        <button
                            className="flex items-center cursor-pointer gap-2 hover:text-[rgb(255,54,0)] transition-colors"
                            onClick={() => handleDropdownToggle('cars')}
                        >
                            Cars
                            <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" className="w-3 h-3 xl:w-3.5 xl:h-3.5" alt="" />
                        </button>
                        <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                            <div className="bg-[rgb(255,54,0)] shadow-xl py-4 px-4 rounded-[20px] w-[200px]">
                                <Link to='/carspage' className="block transition-all duration-300 px-2 text-white text-[17px] xl:text-[18px] hover:text-black font-semibold py-2">Car List</Link>
                                <a className="block transition-all duration-300 px-2 text-white text-[17px] xl:text-[18px] hover:text-black font-semibold py-2">Car Types</a>
                            </div>
                        </div>
                    </li>

                    {/* Contact Us */}
                    {/* User Panel Dropdown */}
                    <li className="relative group pb-1">
                        <button
                            className="flex items-center cursor-pointer gap-2 hover:text-[rgb(255,54,0)] transition-colors font-bold"
                            onClick={() => handleDropdownToggle('user')}
                        >
                            <span className="bg-black text-white px-4 py-1.5 rounded-full text-sm group-hover:bg-[rgb(255,54,0)] transition-colors">
                                {user ? 'Panel' : 'Login'}
                            </span>
                        </button>
                        <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50">
                            <div className="bg-[rgb(255,54,0)] shadow-xl py-4 px-4 rounded-[20px] w-[200px]">
                                {user ? (
                                    user.role === 'admin' ? (
                                        <Link to='/adminpanel' className="block transition-all duration-300 px-2 text-white text-[17px] hover:text-black font-semibold py-2">Admin Panel</Link>
                                    ) : (
                                        <Link to='/panel' className="block transition-all duration-300 px-2 text-white text-[17px] hover:text-black font-semibold py-2">Panel</Link>
                                    )
                                ) : (
                                    <>
                                        <Link to='/authentication' className="block transition-all duration-300 px-2 text-white text-[17px] hover:text-black font-semibold py-2">Login</Link>
                                        <Link to='/authentication' className="block transition-all duration-300 px-2 text-white text-[17px] hover:text-black font-semibold py-2">Signup</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            {/* დანარჩენი კოდი (CTA და Mobile Menu) უცვლელია... */}
            <div className="hidden lg:flex group rounded-[30px] flex-shrink-0">
                <button className="w-[140px] xl:w-[170px] h-[45px] xl:h-[53px] cursor-pointer rounded-[30px] bg-[rgb(255,54,0)] flex group justify-center items-center text-white font-semibold text-sm xl:text-[17px] transition-all hover:opacity-90">
                    Book A Rental
                </button>
                <button className="bg-[rgb(255,54,0)] mt-[2px] w-[43px] xl:w-[51px] h-[43px] xl:h-[51px] rounded-full group-hover:bg-black cursor-pointer transform rotate-[-45deg] pl-[4px] xl:pl-[5px] group-hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center flex-shrink-0">
                    <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 xl:w-10 xl:h-10">
                        <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (იგივე დავტოვე) */}
            <button
                className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-black transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            <div className={`lg:hidden fixed top-[80px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <nav className="px-4 py-6">
                    <ul className="flex flex-col gap-4 text-black font-semibold">
                        <li>
                            <Link to='/' onClick={toggleMobileMenu} className="block py-2 hover:text-[rgb(255,54,0)] transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link to='/aboutus' onClick={toggleMobileMenu} className="block py-2 hover:text-[rgb(255,54,0)] transition-colors">About Us</Link>
                        </li>
                        <li>
                            <button
                                className="flex items-center justify-between w-full py-2 hover:text-[rgb(255,54,0)] transition-colors"
                                onClick={() => handleDropdownToggle('service-mobile')}
                            >
                                Service
                                <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" width="14" height="14" alt="" className={`transform transition-transform ${openDropdown === 'service-mobile' ? 'rotate-180' : ''}`} />
                            </button>
                            {openDropdown === 'service-mobile' && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <a className="block py-2 text-gray-600 hover:text-[rgb(255,54,0)]">Car Rental With Driver</a>
                                    <a className="block py-2 text-gray-600 hover:text-[rgb(255,54,0)]">Business Car Rental</a>
                                    <a className="block py-2 text-gray-600 hover:text-[rgb(255,54,0)]">Airport Transfer</a>
                                </div>
                            )}
                        </li>
                        <li>
                            <button
                                className="flex items-center justify-between w-full py-2 hover:text-[rgb(255,54,0)] transition-colors"
                                onClick={() => handleDropdownToggle('cars-mobile')}
                            >
                                Cars
                                <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" width="14" height="14" alt="" className={`transform transition-transform ${openDropdown === 'cars-mobile' ? 'rotate-180' : ''}`} />
                            </button>
                            {openDropdown === 'cars-mobile' && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <Link to='/carspage' onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[rgb(255,54,0)]">Car List</Link>
                                    <a className="block py-2 text-gray-600 hover:text-[rgb(255,54,0)]">Car Types</a>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link to='/contact' onClick={toggleMobileMenu} className="block py-2 hover:text-[rgb(255,54,0)] transition-colors">Contact Us</Link>
                        </li>
                        <li>
                            <button
                                className="flex items-center justify-between w-full py-2 hover:text-[rgb(255,54,0)] transition-colors"
                                onClick={() => handleDropdownToggle('user-mobile')}
                            >
                                {user ? 'Panel' : 'Login'}
                                <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" width="14" height="14" alt="" className={`transform transition-transform ${openDropdown === 'user-mobile' ? 'rotate-180' : ''}`} />
                            </button>
                            {openDropdown === 'user-mobile' && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {user ? (
                                        user.role === 'admin' ? (
                                            <Link to='/adminpanel' onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[rgb(255,54,0)]">Admin Panel</Link>
                                        ) : (
                                            <Link to='/panel' onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[rgb(255,54,0)]">Panel</Link>
                                        )
                                    ) : (
                                        <>
                                            <Link to='/authentication' onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[rgb(255,54,0)]">Login</Link>
                                            <Link to='/authentication' onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[rgb(255,54,0)]">Signup</Link>
                                        </>
                                    )}
                                </div>
                            )}
                        </li>
                        <li className="pt-4 border-t border-gray-200">
                            <div className="group flex rounded-[30px] w-full">
                                <button className="flex-1 h-[45px] cursor-pointer rounded-[30px] bg-[rgb(255,54,0)] flex justify-center items-center text-white font-semibold text-sm transition-all hover:opacity-90">
                                    Book A Rental
                                </button>
                                <button className="bg-[rgb(255,54,0)] mt-[2px] w-[43px] h-[43px] rounded-full group-hover:bg-black cursor-pointer transform rotate-[-45deg] pl-[4px] group-hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center flex-shrink-0">
                                    <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                        <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;