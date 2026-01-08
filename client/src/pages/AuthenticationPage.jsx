import { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { IconUsers, IconLock, IconStar, IconCheck } from '@tabler/icons-react';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import Footer from '../components/Footer';

const AuthenticationPage = () => {
    const {setActiveTab, activeTab} = useAuth();

    return (
        <>
                <div className="min-h-screen flex flex-col  items-center justify-center bg-gray-50 ">
                    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Left Side - Form Section */}
                            <div className="p-8 md:p-12">
                                {/* Logo */}
                                <div className="mb-8">
                                    <h1 className="text-3xl font-bold">
                                        <span className="text-black">NOVA </span>
                                        <span className="text-black">RIDE</span>
                                    </h1>
                                    <div className="w-12 h-1 bg-red-500 mt-1"></div>
                                </div>

                                {/* Tab Buttons */}
                                <div className="flex gap-4 mb-8">
                                    <button
                                        onClick={() => setActiveTab('login')}
                                        className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${activeTab === 'login'
                                            ? 'bg-red-500 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('signup')}
                                        className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${activeTab === 'signup'
                                            ? 'bg-red-500 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        Sign Up
                                    </button>
                                </div>

                                {/* Welcome Text */}
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
                                    </h2>
                                    <p className="text-gray-500">
                                        {activeTab === 'login'
                                            ? 'Sign in to continue your journey'
                                            : 'Join us to start your journey'}
                                    </p>
                                </div>

                                {/* Form Component */}
                                {activeTab === 'login' ? <Login /> : <Signup />}
                            </div>

                            {/* Right Side - Promotional Section */}
                            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 md:p-12 flex flex-col justify-between text-white">
                                {/* Heading */}
                                <div className="mb-8">
                                    <h2 className="text-4xl font-bold mb-2">
                                        Drive Your <span className="text-red-500">Dream Car</span>
                                    </h2>
                                    <p className="text-gray-300">Experience luxury and comfort with NovaRide</p>
                                </div>

                                {/* Car Image */}
                                <div className="flex-1 flex items-center justify-center my-8">
                                    <img
                                        src="/cta-car-img.png"
                                        alt="White luxury sedan car - Photo by Darryl Boediarto on Unsplash"
                                        className="w-full h-auto object-contain max-h-64"
                                    />
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <IconUsers size={28} stroke={2} />
                                        </div>
                                        <div className="text-2xl font-bold">50K+</div>
                                        <div className="text-sm text-gray-400">Happy Customers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <IconLock size={28} stroke={2} />
                                        </div>
                                        <div className="text-2xl font-bold">100%</div>
                                        <div className="text-sm text-gray-400">Secure Booking</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <IconStar size={28} stroke={2} />
                                        </div>
                                        <div className="text-2xl font-bold">4.9/5</div>
                                        <div className="text-sm text-gray-400">Customer Rating</div>
                                    </div>
                                </div>
                                {/* Features */}
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <IconCheck size={18} stroke={2} className="text-red-500" />
                                        <span className="text-sm">Premium Fleet</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <IconCheck size={18} stroke={2} className="text-red-500" />
                                        <span className="text-sm">24/7 Support</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <IconCheck size={18} stroke={2} className="text-red-500" />
                                        <span className="text-sm">Best Prices</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>



        </>
    );
};

export default AuthenticationPage;