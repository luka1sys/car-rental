import { useState } from "react";
import { useCars } from "../contexts/CarsContext";

const UpdateCarForm = ({ car, onClose }) => {
    const { updateCar } = useCars();

    // ფიჩერების ინიციალიზაცია (ობიექტის გარდაქმნა)
    const [features, setFeatures] = useState(() => {
        let initialFeatures = car.features;
        if (typeof car.features === 'string') {
            try {
                initialFeatures = JSON.parse(car.features);
            } catch (e) {
                initialFeatures = {};
            }
        }
        return {
            airCondition: initialFeatures?.airCondition || false,
            musicSystem: initialFeatures?.musicSystem || false,
            toolkit: initialFeatures?.toolkit || false,
            absSystem: initialFeatures?.absSystem || false,
            bluetooth: initialFeatures?.bluetooth || false,
            fullBootSpace: initialFeatures?.fullBootSpace || false,
            usbCharger: initialFeatures?.usbCharger || false,
            auxInput: initialFeatures?.auxInput || false,
            spareTyre: initialFeatures?.spareTyre || false,
            powerSteering: initialFeatures?.powerSteering || false,
            powerWindows: initialFeatures?.powerWindows || false
        };
    });

    const handleFeatureChange = (e) => {
        const { name, checked } = e.target;
        setFeatures(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // სურათების შემოწმება
        const imageInput = e.target.images;
        if (imageInput && imageInput.files.length === 0) {
            formData.delete("images");
        }

        // features-ის დამატება
        formData.set("features", JSON.stringify(features));

        const result = await updateCar(car._id, formData);

        if (result) {
            alert("Vehicle details updated successfully!");
            onClose();
        }
    };

    const inputStyle = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff3131] transition-all font-bold text-black placeholder:text-gray-400";
    const labelStyle = "block text-[10px] font-black uppercase text-gray-400 mb-1.5 ml-1 tracking-widest";

    return (
        <div className="bg-white p-8 rounded-[30px] w-full border border-gray-100 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-b border-gray-50 pb-6">
                <div>
                    <h2 className="text-2xl font-black italic uppercase tracking-tighter text-black">
                        Update <span className="text-[#ff3131]">Vehicle</span>
                    </h2>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                        System ID: {car._id.slice(-6)} — {car.brand} {car.model}
                    </p>
                </div>
                <button onClick={onClose} className="bg-gray-50 p-2 rounded-full hover:bg-black hover:text-white transition-all text-gray-400">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* მარცხენა სვეტი */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Brand</label>
                                <input type="text" name="brand" defaultValue={car.brand} required className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Model</label>
                                <input type="text" name="model" defaultValue={car.model} required className={inputStyle} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Year</label>
                                <input type="number" name="year" defaultValue={car.year} required className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Price / Day</label>
                                <input type="number" name="pricePerDay" defaultValue={car.pricePerDay} required className={inputStyle} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Car Type</label>
                                <input type="text" name="carType" defaultValue={car.carType} className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Engine</label>
                                <input type="text" name="engine" defaultValue={car.engine} className={inputStyle} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Transmission</label>
                                <input type="text" name="transmission" defaultValue={car.transmission} className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Condition</label>
                                <input type="text" name="condition" defaultValue={car.condition} className={inputStyle} />
                            </div>
                        </div>

                        <div>
                            <label className={labelStyle}>Update Gallery (Optional)</label>
                            <div className="relative group">
                                <input type="file" name="images" multiple className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                                <div className="border-2 border-dashed border-gray-200 rounded-xl py-6 text-center group-hover:border-[#ff3131] transition-all">
                                    <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-black">Click to Replace Images</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* მარჯვენა სვეტი */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Mileage (KM)</label>
                                <input type="number" name="mileage" defaultValue={car.mileage} className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Fuel Type</label>
                                <input type="text" name="fueltype" defaultValue={car.fueltype} className={inputStyle} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Origin Country</label>
                                <input type="text" name="countryoforigin" defaultValue={car.countryoforigin} className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Location</label>
                                <input type="text" name="location" defaultValue={car.location} className={inputStyle} />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <label className={labelStyle}>Doors</label>
                                <input type="number" name="doors" defaultValue={car.doors} className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Seats</label>
                                <input type="number" name="seats" defaultValue={car.seats} className={inputStyle} />
                            </div>
                            <div>
                                <label className={labelStyle}>Passenger</label>
                                <input type="number" name="pasenger" defaultValue={car.pasenger} className={inputStyle} />
                            </div>
                        </div>

                        <div>
                            <label className={labelStyle}>Contact Phone</label>
                            <input type="text" name="phone" defaultValue={car.phone} className={inputStyle} />
                        </div>

                        <div>
                            <label className={labelStyle}>Description</label>
                            <textarea name="description" defaultValue={car.description} className={`${inputStyle} h-24 resize-none`} />
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="pt-6 border-t border-gray-50">
                    <h3 className="text-[11px] font-black uppercase text-black italic mb-4">Edit Features</h3>
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
                                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">
                                    {key.replace(/([A-Z])/g, ' $1')}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                    <button type="button" onClick={onClose} className="flex-1 bg-gray-100 text-black py-4 rounded-2xl font-black uppercase italic tracking-widest">
                        Cancel
                    </button>
                    <button type="submit" className="flex-[2] bg-black text-white py-4 rounded-2xl font-black uppercase italic tracking-widest hover:bg-[#ff3131] transition-all shadow-xl active:scale-95">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCarForm;