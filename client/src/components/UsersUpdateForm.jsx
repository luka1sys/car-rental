import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const UserUpdateForm = ({ userId, onClose }) => {
    const { updateUserrr, users } = useAuth();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const currentUser = users.find(u => u._id === userId);
        if (currentUser) {
            setFullname(currentUser.fullname || "");
            setEmail(currentUser.email || "");
            setRole(currentUser.role || "");
        }
    }, [userId, users]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateUserrr(userId, { fullname, email, role });
            if (onClose) onClose(); 
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-[30px] shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* ზედა წითელი დეკორატიული ხაზი */}
            <div className="absolute top-0 left-0 w-full h-2 "></div>
            
            {/* Close Button */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-black"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-black uppercase tracking-tighter italic leading-none">
                    Update <span className="text-[#ff3131]">User</span>
                </h2>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-2">
                    Access Level & Identity Management
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Fullname */}
                <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 mb-2 block group-focus-within:text-[#ff3131] transition-colors">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="w-full bg-gray-50 border-2 border-gray-50 p-4 rounded-2xl text-sm font-bold focus:outline-none focus:border-[#ff3131] focus:bg-white transition-all placeholder:text-gray-300"
                        placeholder="John Doe"
                        required
                    />
                </div>

                {/* Email */}
                <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 mb-2 block group-focus-within:text-[#ff3131] transition-colors">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-50 border-2 border-gray-50 p-4 rounded-2xl text-sm font-bold focus:outline-none focus:border-[#ff3131] focus:bg-white transition-all placeholder:text-gray-300"
                        placeholder="email@nova.com"
                        required
                    />
                </div>

                {/* Role */}
                <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 mb-2 block group-focus-within:text-[#ff3131] transition-colors">
                        System Role
                    </label>
                    <div className="relative">
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-gray-50 p-4 rounded-2xl text-sm font-black uppercase tracking-widest focus:outline-none focus:border-[#ff3131] focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="moderator">Moderator</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-100 text-[11px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95"
                    >
                        Abort
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`flex-1 px-6 py-4 rounded-2xl bg-black text-white text-[11px] font-black uppercase tracking-widest hover:bg-[#ff3131] transition-all active:scale-95 shadow-lg shadow-gray-200 flex items-center justify-center ${loading ? 'opacity-50' : ''}`}
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Saving...
                            </span>
                        ) : 'Confirm Update'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserUpdateForm;