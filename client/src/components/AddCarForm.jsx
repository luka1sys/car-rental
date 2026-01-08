import { useCars } from "../contexts/CarsContext";
import { useState } from "react";

const AddCarForm = ({ onClose }) => {
    const { addCar } = useCars();

    const [features, setFeatures] = useState({
        airCondition: false, musicSystem: false, toolkit: false,
        absSystem: false, bluetooth: false, fullBootSpace: false,
        usbCharger: false, auxInput: false, spareTyre: false,
        powerSteering: false, powerWindows: false
    });

    const handleFeatureChange = (e) => {
        const { name, checked } = e.target;
        setFeatures(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("features", JSON.stringify(features));

        await addCar(formData);
        alert("Vehicle integrated into fleet!");
        if (onClose) onClose();
    };

    const inputStyle = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff3131] transition-all font-bold text-black placeholder:text-gray-400 placeholder:font-medium";
    const labelStyle = "block text-[10px] font-black uppercase text-gray-400 mb-1.5 ml-1 tracking-widest";

    return (
        <div className="bg-white p-8 rounded-[30px] shadow-2xl w-full border border-gray-100">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-b border-gray-50 pb-6">
                <div>
                    <h2 className="text-2xl font-black italic uppercase tracking-tighter text-black">
                        Add New <span className="text-[#ff3131]">Vehicle</span>
                    </h2>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Entry Terminal</p>
                </div>
                {onClose && (
                    <button onClick={onClose} className="bg-gray-50 p-2 rounded-full hover:bg-black hover:text-white transition-all text-gray-400">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Brand</label>
                                <input type="text" name="brand" placeholder="BMW" required className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Model</label>
                                <input type="text" name="model" placeholder="M4 Competition" required className={inputStyle} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Release Year</label>
                                <input type="number" name="year" placeholder="2024" required className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Price / Day</label>
                                <input type="number" name="pricePerDay" placeholder="$ 250" required className={inputStyle} />
                            </div>
                        </div>

                        <div>
                            <label className={labelStyle}>Images</label>
                            <div className="relative group">
                                <input type="file" name="images" multiple className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                                <div className="border-2 border-dashed border-gray-200 rounded-xl py-8 text-center group-hover:border-[#ff3131] transition-all">
                                    <span className="text-xs font-black uppercase text-gray-400 group-hover:text-black">Upload Gallery</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Car Type</label>
                                <input type="text" name="carType" placeholder="Sport" className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Engine</label>
                                <input type="text" name="engine" placeholder="3.0L Twin-Turbo" className={inputStyle} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Transmission</label>
                                <input type="text" name="transmission" placeholder="Automatic" className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Condition</label>
                                <input type="text" name="condition" placeholder="New" className={inputStyle} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Mileage</label>
                                <input type="number" name="mileage" placeholder="0 km" className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Fuel Type</label>
                                <input type="text" name="fueltype" placeholder="Petrol" className={inputStyle} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Origin</label>
                                <input type="text" name="countryoforigin" placeholder="Germany" className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Location</label>
                                <input type="text" name="location" placeholder="Tbilisi" className={inputStyle} />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <label className={labelStyle}>Doors</label>
                                <input type="number" name="doors" placeholder="2" className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Seats</label>
                                <input type="number" name="seats" placeholder="4" className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Passenger</label>
                                <input type="number" name="pasenger" placeholder="4" className={inputStyle} />
                            </div>
                        </div>

                        <div>
                            <label className={labelStyle}>Contact Phone</label>
                            <input type="text" name="phone" placeholder="+995 ..." className={inputStyle} />
                        </div>

                        <div>
                            <label className={labelStyle}>Description</label>
                            <textarea name="description" placeholder="Vehicle history..." className={`${inputStyle} h-28 resize-none`} />
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="pt-6 border-t border-gray-50">
                    <h3 className="text-[11px] font-black uppercase text-black italic mb-4 flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#ff3131]"></span> Specific Features
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {Object.keys(features).map(key => (
                            <label key={key} className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        name={key}
                                        checked={features[key]}
                                        onChange={handleFeatureChange}
                                        className="peer hidden"
                                    />
                                    <div className="w-5 h-5 border-2 border-gray-200 rounded-lg peer-checked:bg-[#ff3131] peer-checked:border-[#ff3131] transition-all"></div>
                                    <svg className="absolute w-3 h-3 text-white top-1 left-1 hidden peer-checked:block" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-[11px] font-bold text-gray-500 group-hover:text-black uppercase tracking-tight transition-colors">
                                    {key.replace(/([A-Z])/g, ' $1')}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase italic tracking-widest hover:bg-[#ff3131] transition-all shadow-xl active:scale-95">
                        Add to Inventory
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCarForm;