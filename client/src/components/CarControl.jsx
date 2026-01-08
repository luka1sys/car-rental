import { useState } from "react";
import { useCars } from "../contexts/CarsContext";
import AddCarForm from "./AddCarForm";
import UpdateCarForm from "./UpdateCarForm";

const CarControl = () => {
    const { cars, loading, deletedCar } = useCars();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // ახალი state: ინახავს მანქანას რომელსაც ვაედითებთ
    const [editingCar, setEditingCar] = useState(null);

    return (
        <div className="w-full relative">
            {/* Header Section */}
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white">
                <div>
                    <h3 className="font-black uppercase italic text-2xl text-black tracking-tighter">
                        Fleet <span className="text-[#ff3131]">Inventory</span>
                    </h3>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-[0.3em] mt-1">
                        Total Vehicles: {cars?.length || 0}
                    </p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-black text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#ff3131] transition-all transform active:scale-95 shadow-lg"
                >
                    + Add New Vehicle
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    {/* ... (thead უცვლელია) ... */}
                    <tbody className="divide-y divide-gray-100">
                        {loading ? (
                            <tr>
                                <td colSpan="4" className="p-20 text-center animate-pulse text-gray-400 uppercase font-black text-sm tracking-widest">
                                    Syncing Fleet Data...
                                </td>
                            </tr>
                        ) : cars?.map((car) => (
                            <tr key={car._id} className="hover:bg-gray-50/80 transition-all group">
                                <td className="p-6">
                                    <div className="flex items-center gap-5">
                                        <div className="w-24 h-16 bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200">
                                            <img
                                                src={car.images?.[0] || 'https://via.placeholder.com/300x200'}
                                                alt={car.model}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-lg font-black group-hover:text-[#ff3131] transition-colors">{car.brand}</p>
                                            <p className="text-sm font-bold text-gray-500 italic">{car.model}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-6 text-sm font-bold uppercase text-gray-600">
                                    {car.engine} • {car.transmission}
                                </td>
                                <td className="p-6 text-2xl font-black italic">
                                    ${car.pricePerDay}
                                </td>
                                <td className="p-6 flex text-right space-x-2">
                                    {/* ✎ EDIT BUTTON - აქ ვანიჭებთ არჩეულ მანქანას editingCar-ს */}
                                    <button
                                        onClick={() => setEditingCar(car)}
                                        className="h-10 w-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all transform active:scale-90"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button
                                        onClick={() => deletedCar(car._id)}
                                        className="h-10 w-10 bg-gray-100 rounded-xl hover:bg-[#ff3131] hover:text-white transition-all flex items-center justify-center transform active:scale-90"
                                    >
                                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* --- ADD MODAL --- */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)}></div>
                    <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar">
                        <AddCarForm onClose={() => setIsAddModalOpen(false)} />
                    </div>
                </div>
            )}

            {/* --- UPDATE MODAL --- */}
            {editingCar && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setEditingCar(null)}
                    ></div>
                    <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar bg-white rounded-3xl">
                        <UpdateCarForm
                            car={editingCar}
                            onClose={() => setEditingCar(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarControl;