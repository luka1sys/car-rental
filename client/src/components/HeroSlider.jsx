import { Link } from "react-router-dom";
const SliderData = () => {
    return (
        <div className="w-full flex items-center justify-center py-5">
            <div
                style={{ backgroundImage: "url('https://atlantablackcarlimo.com/wp-content/uploads/2025/08/BLACK-CAR-BLOG.webp')" }}
                className="w-[95%] lg:w-[97%] border border-black rounded-[30px] md:rounded-[40px] overflow-hidden min-h-[850px] lg:h-[950px] bg-cover bg-center"
            >
                {/* Overlay & Content Container */}
                <div className="bg-black/60 w-full h-full p-6 md:p-10 flex flex-col items-center justify-center">

                    {/* Badge */}
                    <p className="text-[rgb(255,54,0)] font-semibold mt-10 lg:mt-[100px] text-lg md:text-[20px] font-sans hometext1 text-center">
                        Welcome To Car Rent
                    </p>

                    {/* Main Titles */}
                    <div className="w-full md:w-[90%] lg:w-[85%] mt-6 flex flex-col items-center overflow-hidden">
                        <h2 className="text-white text-[40px] md:text-[70px] lg:text-[90px] leading-tight text-center font-bold hometext2">
                            Looking to save more on
                        </h2>
                        <h2 className="text-white text-[40px] md:text-[70px] lg:text-[90px] leading-tight text-center font-bold hometext3">
                            your rental car?
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="w-full md:w-[80%] lg:w-[67%] mt-6">
                        <p className="text-gray-200 text-center text-base md:text-[22px] hometext4 leading-relaxed">
                            Whether you’re planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offer a wide range of vehicles to suit your needs.
                        </p>
                    </div>

                    {/* Buttons Group */}
                    <div className="flex flex-col sm:flex-row gap-5 mt-10 items-center justify-center hometext5">
                        <button className="w-[180px] h-[55px] text-white bg-[rgb(255,54,0)] font-semibold cursor-pointer text-[18px] rounded-full hover:bg-white hover:text-[rgb(255,54,0)] transition-all">
                            Book A Rental
                        </button>


                        <div className="flex items-center group">
                            <button className="w-[140px] h-[53px] cursor-pointer rounded-[30px] bg-white flex justify-center items-center text-black font-semibold text-[19px]">
                                <Link to="/aboutus">learn more</Link>

                            </button>
                            <button className="bg-[rgb(255,54,0)] mt-[2px] w-[51px] h-[51px] rounded-full group-hover:bg-black cursor-pointer transform rotate-[-45deg] pl-[5px] group-hover:rotate-[0deg] transition-all duration-[500ms]">
                                <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Booking Form Bar */}
                    <div className="mt-16 lg:mt-24 w-full max-w-[1200px] bg-white rounded-[20px] lg:rounded-[30px] p-6 lg:p-0 lg:h-[120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center shadow-2xl gap-y-6 lg:gap-y-0">

                        {/* Title Part */}
                        <div className="lg:border-r border-gray-200 flex justify-center items-center px-4">
                            <p className="text-[18px] md:text-[20px] text-black font-bold text-center lg:text-left">
                                Need to Rent <br className="hidden lg:block" /> a Luxury Car?
                            </p>
                        </div>

                        {/* Full Name */}
                        <div className="lg:border-r border-gray-200 flex flex-col justify-center px-6">
                            <p className="text-sm text-gray-400 font-bold uppercase">Full Name</p>
                            <input className="h-10 w-full text-black outline-none border-b border-transparent focus:border-[rgb(255,54,0)] transition-all" type="text" placeholder="Enter Name" />
                        </div>

                        {/* Mobile */}
                        <div className="lg:border-r border-gray-200 flex flex-col justify-center px-6">
                            <p className="text-sm text-gray-400 font-bold uppercase">Mobile No</p>
                            <input className="h-10 w-full text-black outline-none border-b border-transparent focus:border-[rgb(255,54,0)] transition-all" type="tel" placeholder="Phone Number" />
                        </div>

                        {/* Location */}
                        <div className="lg:border-r border-gray-200 flex flex-col justify-center px-6">
                            <p className="text-sm text-gray-400 font-bold uppercase">Location</p>
                            <input className="h-10 w-full text-black outline-none border-b border-transparent focus:border-[rgb(255,54,0)] transition-all" type="text" placeholder="Pickup City" />
                        </div>

                        {/* Date */}
                        <div className="lg:border-r border-gray-200 flex flex-col justify-center px-6">
                            <p className="text-sm text-gray-400 font-bold uppercase">Pickup Date</p>
                            <input className="h-10 w-full text-black outline-none bg-transparent cursor-pointer" type="date" />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center px-6">
                            <button className="bg-[rgb(255,54,0)] h-[55px] w-full lg:w-[85%] text-white rounded-full cursor-pointer hover:bg-black font-bold transition-all duration-300 shadow-lg uppercase text-sm tracking-widest">
                                Send
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderData;