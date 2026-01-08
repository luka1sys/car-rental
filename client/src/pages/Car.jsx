import { useRef, useState } from "react";
import Footer from "../components/Footer";
import { useCars } from "../contexts/CarsContext";
import { useNavigate, useParams } from "react-router-dom";

const Car = () => {
    const { cars } = useCars();
    const { id } = useParams();
    const [active, setActive] = useState(null);
    const scrollAmount = 874;
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const car = cars.find(c => c._id === id);
    if (!car) {
        return <div>Car not found</div>;
    }

    const scrollNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const scrollPrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <main className="flex flex-col items-center w-full">
            {/* Header */}
            <div
                style={{
                    backgroundImage: "url('/imgi_14_page-header-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="overflow-hidden rounded-[30px] md:rounded-[50px] w-[95%] md:w-[97%] h-[300px] md:h-[470px]"
            >
                <div className="bg-black/50 w-full h-full flex flex-col gap-[10px] md:gap-[20px] justify-center items-center text-center px-4">
                    <h2 className="text-[40px] md:text-[80px] text-white font-semibold">Blog</h2>
                    <p className="text-white font-semibold text-[16px] md:text-[20px]">
                        Home / <span className="text-[rgb(255,54,0)]">Voyager Hybrid</span>
                    </p>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row w-[95%] md:w-[97%] mb-[50px] gap-[40px] lg:gap-[80px] pt-[20px] mt-[40px] md:mt-[80px] items-start">

                {/* Sidebar - აქ დაემატა lg:sticky, lg:top-10 და self-start */}
                <section className="lg:sticky lg:top-10 self-start h-fit w-full lg:w-[30%] bg-[rgb(255,248,246)] overflow-hidden rounded-[30px] pb-10 lg:pb-10">
                    <div className="flex relative h-[90px] ml-[20px] md:ml-[40px] mt-[30px] items-center">
                        <p className="text-4xl md:text-6xl font-bold mb-[10px]">
                            ${car.pricePerDay}
                        </p>
                        <p className="text-xl text-gray-700">/per Day</p>
                    </div>
                    <hr className="w-[85%] border border-gray-100 mx-auto lg:ml-[38px]" />
                    <div className="mt-[30px] flex flex-col gap-[20px] ml-[20px] md:ml-[40px] w-[90%] lg:w-[84%]">
                        {/* Spec Items */}
                        <div className="flex relative items-center gap-[10px]">
                            <img width="25px" src="/810008.png" alt="" />
                            <p className="text-[18px] font-semibold">Doors</p>
                            <p className="absolute text-[18px] font-semibold right-[20px]">{car.doors}</p>
                        </div>
                        <div className="flex relative mt-[10px] items-center gap-[10px]">
                            <img width="31px" src="/imgi_4_icon-passengers (1).svg" alt="" />
                            <p className="text-[20px]">Passenger</p>
                            <p className="absolute text-[18px] font-semibold right-[20px]">{car.pasenger}</p>
                        </div>
                        <div className="flex relative mt-[10px] items-center gap-[10px]">
                            <img width="26px" src="/imgi_5_icon-transmission.svg" alt="" />
                            <p className="text-[20px]">Transmission</p>
                            <p className="absolute text-[18px] font-semibold right-[20px]">{car.transmission.slice(0, -5)}</p>
                        </div>
                        <div className="flex relative mt-[10px] items-center gap-[10px]">
                            <img width="28px" src="/imgi_6_icon-age.svg" alt="" />
                            <p className="text-[20px]">Year</p>
                            <p className="absolute text-[18px] font-semibold right-[20px]">{car.year}</p>
                        </div>
                        <div className="flex relative mt-[10px] items-center gap-[10px]">
                            <img width="30px" src="/car-seat-with-seatbelt-svgrepo-com (2).svg" alt="" />
                            <p className="text-[20px]">Seats</p>
                            <p className="absolute text-[18px] font-semibold right-[20px]">{car.seats}</p>
                        </div>
                        <div className="flex relative mt-[10px] items-center gap-[10px]">
                            <img width="28px" src="/imgi_8_icon-aircondition.svg" alt="" />
                            <p className="text-[20px]">Air Condition</p>
                            <p className="absolute text-[18px] font-semibold right-[20px]">{car.features.airCondition ? "Yes" : "No"}</p>
                        </div>
                    </div>
                    <hr className="w-[85%] border border-gray-100 mx-auto lg:ml-[38px] mt-[20px]" />
                    <div className="flex flex-wrap gap-[15px] md:gap-[20px] px-4 md:px-0">
                        <div className="group mt-[25px] flex lg:ml-[40px] rounded-[30px]">
                            <button
                                onClick={() => navigate(`/bookingpage/${car._id}`)}
                                className="w-[130px] md:w-[150px] h-[53px] cursor-pointer rounded-[30px] bg-[rgb(255,54,0)] flex justify-center items-center text-white font-semibold text-[17px]"
                            >
                                Book Now
                            </button>
                            <button className="bg-[rgb(255,54,0)] mt-[2px] w-[51px] h-[51px] rounded-[100px] group-hover:bg-black cursor-pointer transform rotate-[-45deg] pl-[5px] group-hover:rotate-[0deg] transition-all duration-[500ms]">
                                <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" /></svg>
                            </button>
                        </div>
                        <p className="mt-[40px] text-gray-600 text-xl">OR</p>
                        <button className="bg-[rgb(255,54,0)] flex justify-center items-center mt-[27px] w-[51px] h-[51px] rounded-[100px] hover:bg-black cursor-pointer transition-all duration-[500ms]">
                            <img width="80%" src="/whatsapp-svgrepo-com (1).svg" alt="" />
                        </button>
                    </div>
                </section>

                {/* Main Content (Grid & Details) */}
                <section className="h-full w-full lg:w-[65%]">
                    {/* Image Slider */}
                    <div className="relative w-full h-[300px] md:h-[500px]">
                        <div
                            className="h-full flex overflow-x-scroll overflow-y-hidden rounded-[30px] md:rounded-[40px] w-full scrollbar-hide"
                            ref={scrollRef}
                            style={{ scrollSnapType: "x mandatory" }}
                        >
                            {car.images.map((image, index) => (
                                <div
                                    className="w-full flex-shrink-0 overflow-hidden h-full"
                                    key={index}
                                    style={{ scrollSnapAlign: "start" }}
                                >
                                    <img className="h-full w-full object-cover" src={image} alt="" />
                                </div>
                            ))}
                        </div>
                        {/* Navigation Buttons */}
                        <button onClick={scrollPrev} className="bg-black/50 absolute top-1/2 -translate-y-1/2 left-[10px] w-[40px] md:w-[51px] h-[40px] md:h-[51px] rotate-[180deg] rounded-full hover:bg-black cursor-pointer transition-all">
                            <svg fill="none" height="30" viewBox="0 0 24 24" width="30" className="mx-auto" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" /></svg>
                        </button>
                        <button onClick={scrollNext} className="bg-black/50 absolute top-1/2 -translate-y-1/2 right-[10px] w-[40px] md:w-[51px] h-[40px] md:h-[51px] rounded-full hover:bg-black cursor-pointer transition-all">
                            <svg fill="none" height="30" viewBox="0 0 24 24" width="30" className="mx-auto" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" /></svg>
                        </button>
                    </div>

                    {/* Features Boxes */}
                    <div className="w-full border border-gray-200 flex flex-col md:flex-row rounded-[25px] mt-[30px] md:mt-[6%] py-6 md:h-[20%]">
                        <section className="relative w-full md:w-[50%] gap-[15px] flex pl-[5%] items-center mb-6 md:mb-0">
                            <div className="rounded-full bg-[rgb(255,234,229)] w-[50px] h-[50px] flex items-center justify-center">
                                <img width="25px" src="/download (1).svg" alt="" />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold">Unlimited KMs</h2>
                                <p className="text-gray-600 text-[16px] md:text-[18px]">Endless Km with no extra charge</p>
                            </div>
                        </section>
                        <section className="relative w-full md:w-[50%] gap-[15px] flex pl-[5%] items-center">
                            <div className="rounded-full bg-[rgb(255,234,229)] w-[50px] h-[50px] flex items-center justify-center">
                                <img width="20px" src="/download (2).svg" alt="" />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold">Unlimited KMs</h2>
                                <p className="text-gray-600 text-[16px] md:text-[18px]">Endless Km with no extra charge</p>
                            </div>
                        </section>
                    </div>

                    {/* Amenities Section */}
                    <div className="flex items-center gap-[10px] mt-[30px]">
                        <img width="20px" src="/images__4_-removebg-preview (1).png" alt="" />
                        <p className="text-[rgb(230,68,45)] font-semibold">Amenities</p>
                    </div>
                    <h2 className="font-bold text-3xl md:text-5xl mt-[2%] leading-tight">Premium amenities and features</h2>

                    <div className="w-full mt-[30px] md:mt-[7%] grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 mb-10">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-[15px]">
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src={car.features.musicSystem ? "/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" : "/basic-denied-reject-svgrepo-com.svg"} alt="" />
                                <h2 className="text-lg font-semibold">Music System</h2>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src={car.features.fullBootSpace ? "/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" : "/basic-denied-reject-svgrepo-com.svg"} alt="" />
                                <h2 className="text-lg font-semibold">Full Boot Space</h2>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src={car.features.powerSteering ? "/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" : "/basic-denied-reject-svgrepo-com.svg"} alt="" />
                                <h2 className="text-lg font-semibold">Power Steering</h2>
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col gap-[15px]">
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src={car.features.toolkit ? "/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" : "/basic-denied-reject-svgrepo-com.svg"} alt="" />
                                <h2 className="text-lg font-semibold">Toolkit</h2>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src={car.features.usbCharger ? "/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" : "/basic-denied-reject-svgrepo-com.svg"} alt="" />
                                <h2 className="text-lg font-semibold">Usb Charger</h2>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src={car.features.powerWindows ? "/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" : "/basic-denied-reject-svgrepo-com.svg"} alt="" />
                                <h2 className="text-lg font-semibold">Power Windows</h2>
                            </div>
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col gap-[15px]">
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src={car.features.absSystem ? "/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" : "/basic-denied-reject-svgrepo-com.svg"} alt="" />
                                <h2 className="text-lg font-semibold">Abs System</h2>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src={car.features.auxInput ? "/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" : "/basic-denied-reject-svgrepo-com.svg"} alt="" />
                                <h2 className="text-lg font-semibold">Aux Input</h2>
                            </div>
                        </div>
                        {/* Column 4 */}
                        <div className="flex flex-col gap-[15px]">
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src={car.features.bluetooth ? "/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" : "/basic-denied-reject-svgrepo-com.svg"} alt="" />
                                <h2 className="text-lg font-semibold">Bluetooth</h2>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src={car.features.spareTyre ? "/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" : "/basic-denied-reject-svgrepo-com.svg"} alt="" />
                                <h2 className="text-lg font-semibold">Spare Tyre</h2>
                            </div>
                        </div>
                    </div>

                    <hr className="w-full border border-gray-200" />

                    {/* General Info Section */}
                    <div className="pb-20">
                        <div className="flex items-center gap-[10px] mt-[30px]">
                            <img width="20px" src="/images__4_-removebg-preview (1).png" alt="" />
                            <p className="text-[rgb(230,68,45)] font-semibold">General Information</p>
                        </div>
                        <h2 className="font-bold text-3xl md:text-5xl mt-[2%]">Know about our car service</h2>
                        <p className="text-gray-600 mt-[20px] md:mt-[30px] text-[16px] md:text-[18px]">Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation porttitor orci sit amet iaculis nisan.</p>

                        <div className="flex flex-col gap-[15px] mt-[30px]">
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src="/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" alt="" />
                                <h2 className="text-lg md:text-xl font-semibold">24/7 Roadside Assistance</h2>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src="/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" alt="" />
                                <h2 className="text-lg md:text-xl font-semibold">Free Cancellation & Return</h2>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img width="20px" src="/aa1a634ad6b4ad03e637500db38692e1-removebg-preview.png" alt="" />
                                <h2 className="text-lg md:text-xl font-semibold">Rent Now Pay When You Arrive</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
};

export default Car;