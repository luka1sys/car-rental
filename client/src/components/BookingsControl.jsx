import { useBooking } from "../contexts/BookingContext";

const BookingsControl = () => {
    const { allBookings, deletedBooking } = useBooking();

    // პირდაპირი წაშლა კითხვის გარეშე
    const handleDelete = async (id) => {
        try {
            await deletedBooking(id);
        } catch (error) {
            console.error("Failed to delete booking:", error);
        }
    };

    const getStatusStyle = (status) => {
        const s = status?.toLowerCase();
        switch (s) {
            case 'confirmed': return "bg-green-100 text-green-700 border-green-200";
            case 'pending': return "bg-yellow-100 text-yellow-700 border-yellow-200";
            case 'complete':
            case 'completed': return "bg-red-50 text-[#ff3131] border-red-100 font-black";
            case 'cancelled': return "bg-gray-100 text-gray-500 border-gray-200";
            default: return "bg-gray-50 text-gray-700 border-gray-100";
        }
    };

    const headerStyle = "px-6 py-4 text-left text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50";
    const cellStyle = "px-6 py-5 text-sm border-b border-gray-50 text-black font-medium";

    return (
        <div className="bg-white rounded-[30px] border border-gray-100 shadow-2xl overflow-hidden w-full">
            {/* Header */}
            <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                <div>
                    <h2 className="text-2xl font-black italic uppercase tracking-tighter text-black">
                        Booking <span className="text-[#ff3131]">Terminal</span>
                    </h2>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                        Total Operations: {allBookings?.length || 0}
                    </p>
                </div>
                <button className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#ff3131] transition-all">
                    Export Report
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white">
                            <th className={headerStyle}>Vehicle / ID</th>
                            <th className={headerStyle}>Customer</th>
                            <th className={headerStyle}>Duration</th>
                            <th className={headerStyle}>Total Price</th>
                            <th className={headerStyle}>Status</th>
                            <th className={headerStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {allBookings?.map((booking) => (
                            <tr key={booking._id} className="hover:bg-gray-50/30 transition-colors group">
                                <td className={cellStyle}>
                                    <div className="flex flex-col">
                                        <span className="font-black text-black uppercase">{booking.car?.brand || 'N/A'}</span>
                                        <span className="text-[10px] text-gray-400 font-bold italic">#{booking._id.slice(-6)}</span>
                                    </div>
                                </td>
                                <td className={cellStyle}>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-800">{booking.user?.fullname || 'Guest User'}</span>
                                        <span className="text-[10px] text-gray-400">{booking.user?.email || ''}</span>
                                    </div>
                                </td>
                                <td className={cellStyle}>
                                    <div className="flex items-center gap-2 text-[11px] font-black">
                                        <span className="bg-gray-50 border border-gray-100 px-2 py-1 rounded text-gray-500">{new Date(booking.startDate).toLocaleDateString()}</span>
                                        <span className="text-[#ff3131]">→</span>
                                        <span className="bg-gray-50 border border-gray-100 px-2 py-1 rounded text-gray-500">{new Date(booking.endDate).toLocaleDateString()}</span>
                                    </div>
                                </td>
                                <td className={cellStyle}>
                                    <span className="text-lg font-black text-black italic">${booking.totalPrice?.toLocaleString()}</span>
                                </td>
                                <td className={cellStyle}>
                                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm ${getStatusStyle(booking.status)}`}>
                                        {booking.status || 'Unknown'}
                                    </span>
                                </td>
                                <td className={cellStyle}>
                                    <div className="flex gap-2">
                                        

                                        {/* წაშლის ღილაკი პირდაპირი წაშლით */}
                                        <button
                                            onClick={() => handleDelete(booking._id)}
                                            className="p-2 hover:bg-[#ff3131] hover:text-white rounded-xl transition-all text-gray-300 border border-transparent hover:border-[#ff3131] shadow-sm active:scale-90"
                                        >
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingsControl;