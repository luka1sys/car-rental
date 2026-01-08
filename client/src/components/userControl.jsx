import { useState } from "react";
import UserUpdateForm from "./UsersUpdateForm";


const UserControl = ({ users }) => {
    const [editingUser, setEditingUser] = useState(null);

    return (
        <div className="overflow-x-auto">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                <div>
                    <h3 className="font-black uppercase italic text-lg text-black">User Database</h3>
                    <p className="text-[9px] text-gray-400 uppercase font-bold tracking-[0.2em]">Management & Permissions</p>
                </div>
                <button className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#ff3131] transition-all transform active:scale-95 shadow-md">
                    + Add New User
                </button>
            </div>

            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50/50">
                    <tr>
                        <th className="p-5 text-[10px] uppercase font-black text-gray-400 tracking-widest">ID / Name</th>
                        <th className="p-5 text-[10px] uppercase font-black text-gray-400 tracking-widest">Details</th>
                        <th className="p-5 text-[10px] uppercase font-black text-gray-400 tracking-widest">Status</th>
                        <th className="p-5 text-[10px] uppercase font-black text-gray-400 tracking-widest text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {users?.map((u) => (
                        <tr key={u._id} className="hover:bg-gray-50/50 transition-colors group">
                            <td className="p-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[10px] text-black border border-gray-200 uppercase">
                                        {u.fullname?.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold group-hover:text-[#ff3131] transition-colors">{u.fullname}</p>
                                        <p className="text-[9px] text-gray-400 font-medium uppercase tracking-tighter">ID: {u._id?.slice(-6)}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-5">
                                <p className="text-xs font-semibold text-gray-600">{u.email}</p>
                                <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest mt-1">{u.role}</p>
                            </td>
                            <td className="p-5">
                                <span className={`inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[9px] font-black uppercase tracking-widest border ${u.isVerified
                                    ? 'bg-green-50 text-green-600 border-green-100'
                                    : 'bg-orange-50 text-orange-600 border-orange-100'
                                    }`}>
                                    {u.isVerified ? 'Verified' : 'Pending'}
                                </span>
                            </td>
                            <td className="p-5 text-right">
                                <div className="flex justify-end gap-2">
                                    <button
                                        onClick={() => setEditingUser(u._id)}
                                        className="p-2 hover:bg-black hover:text-white rounded-lg transition-all text-gray-400"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {users?.length === 0 && (
                        <tr>
                            <td colSpan="4" className="p-20 text-center">
                                <p className="text-gray-300 font-black uppercase tracking-[0.3em] italic text-sm">No Users Found</p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {editingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop - უკანა მუქი ფონი */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setEditingUser(null)}
                    ></div>

                    {/* Modal Content - ფორმის კონტეინერი */}
                    <div className="relative w-full max-w-2xl z-10 animate-in fade-in zoom-in duration-200">
                        <UserUpdateForm
                            userId={editingUser}
                            onClose={() => setEditingUser(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserControl;