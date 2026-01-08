import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useBooking } from "../contexts/BookingContext";
import { Link } from "react-router-dom"; // დავამატე Link

const Panel = () => {
    const { logout, user } = useAuth();
    const { myBookings } = useBooking();
    const [showSettings, setShowSettings] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar-ის მდგომარეობა

    return (
        <div className="flex min-h-screen bg-[#fcfcfc] font-sans relative">

            {/* --- MOBILE OVERLAY --- */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* --- SIDEBAR --- */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-black text-white flex flex-col transition-transform duration-300 transform
                md:relative md:translate-x-0 md:ml-[20px] md:rounded-tl-[30px]
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                <div className="p-8 text-2xl font-black italic tracking-tighter flex justify-between items-center">
                    <span>NOVA<span className="text-[#ff3131]">RIDE</span></span>
                    <button className="md:hidden text-white" onClick={() => setIsSidebarOpen(false)}>✕</button>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <a href="#" className="flex items-center p-3 bg-[#ff3131] rounded-lg font-bold">Dashboard</a>
                    <button className="w-full flex items-center cursor-pointer p-3 hover:bg-white/10 rounded-lg transition-colors text-left">My Bookings</button>

                    <button className="w-full flex items-center cursor-pointer p-3 hover:bg-white/10 rounded-lg transition-colors text-left" onClick={() => setShowSettings(prev => !prev)}>
                        Settings
                    </button>

                    {showSettings && (
                        <div className="ml-4 space-y-2 border-l border-white/10 pl-4 py-2">
                            <button onClick={logout} className="text-sm text-gray-400 hover:text-[#ff3131] transition-colors">
                                Logout →
                            </button>
                        </div>
                    )}
                </nav>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 flex flex-col min-w-0"> {/* min-w-0 აუცილებელია flex-ში ცხრილის სწორი სქროლისთვის */}

                {/* Top Header */}
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8">
                    <div className="flex items-center gap-4">
                        {/* Hamburger Button for Mobile */}
                        <button
                            className="md:hidden p-2 bg-gray-100 rounded-lg"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        <h1 className="text-lg md:text-xl font-bold uppercase tracking-tight truncate">User Dashboard</h1>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold leading-none">{user.fullname}</p>
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{user.role}</p>
                        </div>
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-[#ff3131] flex-shrink-0">
                            {user.fullname?.charAt(0).toUpperCase()}
                        </div>
                    </div>
                </header>

                <div className="p-4 md:p-8 space-y-8">

                    {/* --- STATS SECTION --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff3131]/5 rounded-bl-full transition-all group-hover:scale-110"></div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Active Bookings</p>
                            <p className="text-3xl md:text-4xl font-black mt-2">{myBookings.length}</p>
                        </div>

                        <div className="bg-black text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Total Distance</p>
                            <p className="text-3xl md:text-4xl font-black mt-2 italic">1,240 <span className="text-[#ff3131] text-lg">km</span></p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-1">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Account Status</p>
                            <p className="text-xl font-bold mt-2 text-green-500 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Verified
                            </p>
                        </div>
                    </div>

                    {/* --- TABLE SECTION --- */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                            <h3 className="font-black uppercase tracking-tight italic text-base md:text-lg text-black">Recent Bookings</h3>
                            <button className="text-[#ff3131] text-xs font-bold uppercase hover:underline">View All</button>
                        </div>

                        {/* Table Wrapper for Horizontal Scroll */}
                        <div className="overflow-x-auto overflow-y-hidden">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead className="bg-gray-50/50">
                                    <tr>
                                        <th className="p-4 text-[10px] uppercase font-bold text-gray-400 tracking-widest">Car Model</th>
                                        <th className="p-4 text-[10px] uppercase font-bold text-gray-400 tracking-widest">Date</th>
                                        <th className="p-4 text-[10px] uppercase font-bold text-gray-400 tracking-widest">Status</th>
                                        <th className="p-4 text-[10px] uppercase font-bold text-gray-400 tracking-widest text-right">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {myBookings.map((booking, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors group">
                                            <td className="p-4 font-bold group-hover:text-[#ff3131] transition-colors">{booking.car.model}</td>
                                            <td className="p-4 text-sm text-gray-500">
                                                {booking.startDate ? new Date(booking.startDate).toLocaleDateString('ka-GE') : '---'}
                                            </td>
                                            <td className={`p-4 text-[10px] font-bold uppercase ${booking.status === 'confirmed' ? 'text-green-500' : 'text-orange-500'}`}>
                                                {booking.status}
                                            </td>
                                            <td className="p-4 text-right font-black italic">${booking.totalPrice}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Panel;