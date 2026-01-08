import { useParams, useNavigate } from "react-router-dom";
import CreateBookingForm from "../components/BookingForm";

const BookingPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    if (!id) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black italic">CAR NOT FOUND</h1>
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-4 text-[#ff3131] font-bold uppercase tracking-widest hover:underline"
                    >
                        ← Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fcfcfc] flex flex-col items-center">
            {/* ზედა დეკორატიული ზოლი */}
            <div className="w-full h-2 bg-black"></div>
            <div className="w-full h-1 bg-[#ff3131]"></div>

            <div className="max-w-4xl w-full p-6 md:p-12">
                {/* სათაურის სექცია */}
                <div className="mb-10 text-center md:text-left">
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                    >
                        ← Back to Fleet
                    </button>
                    <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
                        Complete Your <span className="text-[#ff3131]">Booking</span>
                    </h1>
                    <div className="h-1 w-20 bg-black mt-4 mx-auto md:mx-0"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* მარცხენა მხარე: ფორმა */}
                    <div className="lg:col-span-2 bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-3xl p-8">
                        <div className="mb-6 border-b border-gray-50 pb-4">
                            <h2 className="text-lg font-bold uppercase tracking-tight">Reservation Details</h2>
                            <p className="text-sm text-gray-400">Please fill in the information below to secure your ride.</p>
                        </div>

                        {/* აქ შემოდის შენი ფორმა */}
                        <div className="booking-form-wrapper">
                            <CreateBookingForm carId={id} />
                        </div>
                    </div>

                    {/* მარჯვენა მხარე: ინფორმაციული ბლოკი (Sidebar info) */}
                    <div className="space-y-6">
                        <div className="bg-black text-white p-8 rounded-3xl shadow-xl italic">
                            <h3 className="text-xl font-black uppercase mb-4">Why NovaRide?</h3>
                            <ul className="space-y-4 text-sm font-medium">
                                <li className="flex items-center gap-3">
                                    <span className="text-[#ff3131] text-lg">✓</span> 24/7 Roadside Assistance
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#ff3131] text-lg">✓</span> Fully Insured Vehicles
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#ff3131] text-lg">✓</span> Transparent Pricing
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-3xl border border-dashed border-gray-200">
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] mb-2 text-center">Need Help?</p>
                            <p className="text-center font-bold text-lg">+995 555 123 456</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ქვედა დეკორაცია */}
            <footer className="mt-auto py-8 text-gray-300 text-[10px] font-bold uppercase tracking-[0.3em]">
                NovaRide Premium Rental Services © 2024
            </footer>
        </div>
    );
};

export default BookingPage;