import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import UserControl from "../components/userControl";
import CarControl from "../components/CarControl";
import BookingsControl from "../components/BookingsControl";

const AdminPanel = () => {
    const { logout, users, user } = useAuth();
    const [showSettings, setShowSettings] = useState(false);
    const [activeTab, setActiveTab] = useState("users");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-[#fcfcfc] font-sans overflow-hidden">

            {/* --- MOBILE OVERLAY --- */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* --- SIDEBAR --- */}
            <aside className={`
                fixed md:relative z-50
                w-64 bg-black ml-[20px] my-[20px] rounded-[30px] text-white 
                flex flex-col transition-all duration-300
                h-[calc(100vh-40px)]
                ${isSidebarOpen ? "left-0" : "-left-[300px] md:left-0"}
            `}>
                <div className="p-8 text-2xl font-black italic tracking-tighter flex justify-between items-center">
                    <span>NOVA<span className="text-[#ff3131]">ADMIN</span></span>
                    <button className="md:hidden text-white" onClick={() => setIsSidebarOpen(false)}>✕</button>
                </div>

                {/* აქ გამოიყენება no-scrollbar */}
                <nav className="flex-1 px-4 space-y-2 overflow-y-auto no-scrollbar">
                    {["cars", "users", "bookings"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => { setActiveTab(tab); setIsSidebarOpen(false); }}
                            className={`w-full flex items-center p-3 rounded-lg font-bold transition-all capitalize ${activeTab === tab ? 'bg-[#ff3131]' : 'hover:bg-white/10'}`}
                        >
                            {tab} Control
                        </button>
                    ))}

                    <div className="pt-4 border-t border-white/5 mt-4">
                        <button
                            className="w-full text-left flex items-center cursor-pointer p-3 hover:bg-white/10 rounded-lg transition-colors text-gray-400 text-sm"
                            onClick={() => setShowSettings(prev => !prev)}
                        >
                            System Settings
                        </button>
                        {showSettings && (
                            <div className="mt-1 ml-2">
                                <button
                                    onClick={logout}
                                    className="w-full text-left flex items-center p-3 text-gray-400 hover:text-[#ff3131] transition-colors font-bold uppercase text-[10px] tracking-widest"
                                >
                                    Logout <span className="ml-2">→</span>
                                </button>
                            </div>
                        )}
                    </div>
                </nav>


            </aside>
            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 flex flex-col h-full overflow-y-auto no-scrollbar relative">

                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 bg-black text-white rounded-lg">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                        <h1 className="text-lg md:text-xl font-black uppercase tracking-tighter italic text-black">
                            {activeTab} <span className="text-[#ff3131]">Terminal</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        {/* xs:block შეცვლილია sm:block-ით */}
                        <div className="text-right hidden sm:block">
                            <p className="text-xs md:text-sm font-bold text-black leading-none">{user?.fullname}</p>
                            <p className="text-[9px] md:text-[10px] font-bold uppercase text-[#ff3131] mt-1">{user?.role}</p>
                        </div>
                        <div className="w-10 h-10 md:w-11 md:h-11 bg-black rounded-full flex items-center justify-center text-white font-bold border-2 border-[#ff3131] shadow-lg flex-shrink-0">
                            {user?.fullname?.charAt(0) || 'A'}
                        </div>
                    </div>
                </header>

                <div className="p-4 md:p-8">
                    {/* STATS GRID */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Total Revenue</p>
                            <p className="text-2xl md:text-3xl font-black mt-2 italic transition-colors hover:text-[#ff3131] cursor-default">$42,500</p>
                        </div>
                        <div className="bg-black text-white p-5 rounded-2xl shadow-xl">
                            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Active Cars</p>
                            <p className="text-2xl md:text-3xl font-black mt-2">24 / <span className="text-[#ff3131] text-lg">30</span></p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Pending</p>
                            <p className="text-2xl md:text-3xl font-black mt-2 text-orange-500">12</p>
                        </div>
                        <div className="bg-[#ff3131] text-white p-5 rounded-2xl shadow-lg">
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">Health</p>
                            <p className="text-2xl md:text-3xl font-black mt-2">100%</p>
                        </div>
                    </div>

                    {/* TABLE AREA */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 mt-8 overflow-hidden">
                        <div className="overflow-x-auto">
                            {activeTab === "users" && <UserControl users={users} />}
                            {activeTab === "cars" && <CarControl />}
                            {activeTab === "bookings" && <BookingsControl />}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;