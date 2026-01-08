import { useRef } from "react";
import { useCars } from "../contexts/CarsContext";
import { Link } from "react-router-dom";

const Fleets = () => {
    const scrollRef = useRef(null);
    const { cars } = useCars();
    const scrollAmount = 455;

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

    return (
        <section className='min-h-[800px] sm:min-h-[950px] md:min-h-[1050px] lg:min-h-[1150px] w-full flex flex-col items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16'>
            <div className='flex flex-col items-center mt-8 sm:mt-12 md:mt-16 lg:mt-[100px] min-h-[150px] sm:min-h-[180px] md:min-h-[200px]'>
                <p className='flex items-center gap-2 sm:gap-3 text-[rgb(255,54,0)] font-semibold text-base sm:text-lg md:text-[19px]'>
                    <img width="15px" className='mt-1 sm:mt-2 w-3 sm:w-4 h-auto' src="/images__4_-removebg-preview (1).png" alt="" />
                    Our Fleets
                </p>

                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold m-0 leading-[1.1] hometext6 animate-on-scroll text-center'>Explore our perfect and</h2>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold m-0 leading-[1.1] hometext7 animate-on-scroll text-center'>extensive fleet</h2>
            </div>

            <div 
                className='min-h-[400px] sm:min-h-[500px] md:min-h-[580px] mt-6 sm:mt-8 md:mt-[30px] overflow-x-auto scroll-smooth scrollbar-hide whitespace-nowrap w-full max-w-[95%] flex gap-6 sm:gap-8 md:gap-[36px] pb-4'
                ref={scrollRef}
            >
                {cars.length > 0 ? (
                    cars.map((car) => (
                        <div 
                            key={car._id} 
                            className="car-card flex-shrink-0 transition-all duration-[2000ms] group cursor-pointer rounded-[20px] sm:rounded-[30px] overflow-hidden w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] border border-gray-200 hover:shadow-lg"
                        >
                            <div className='w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[45%]'>
                                <img 
                                    className='w-full h-full object-cover object-center' 
                                    src={car.images[0] || ""} 
                                    alt={car.brand} 
                                />
                            </div>

                            <div className='h-[35px] sm:h-[40px] w-[120px] sm:w-[150px] flex items-center justify-center ml-4 sm:ml-5 md:ml-[20px] mt-4 sm:mt-6 md:mt-[30px] rounded-[50px] bg-[rgb(236,236,236)]'>
                                <p className='font-semibold text-xs sm:text-sm md:text-base'>{car.carType} car</p>
                            </div>
                            
                            <div className='flex ml-4 sm:ml-5 md:ml-[20px] mt-2 sm:mt-[10px] gap-2 sm:gap-[5px] flex-wrap'>
                                <h3 className='text-lg sm:text-xl md:text-[22px] font-semibold'>{car.model}</h3>
                                <h3 className='text-lg sm:text-xl md:text-[22px] font-semibold'>{car.fueltype}</h3>
                            </div>
                            
                            <div className='mt-4 sm:mt-6 md:mt-[30px]'>
                                <div className='flex ml-4 sm:ml-5 md:ml-[20px] relative items-center gap-2 sm:gap-[10px]'>
                                    <img width="25px" className="w-5 sm:w-6 h-auto" src="./810008.png" alt="Doors" />
                                    <p className='text-sm sm:text-base md:text-[18px] text-gray-600'>Doors</p>
                                    <p className='absolute text-sm sm:text-base md:text-[18px] text-gray-600 right-4 sm:right-5 md:right-[20px]'>
                                        {car.doors}
                                    </p>
                                </div>
                                <div className='flex ml-2 sm:ml-[10px] relative mt-2 sm:mt-[10px] items-center gap-2 sm:gap-[10px]'>
                                    <img 
                                        width="40px" 
                                        className="w-8 sm:w-10 h-auto"
                                        src="/Screenshot_2025-10-24_213042-removebg-preview.png" 
                                        alt="Passenger" 
                                    />
                                    <p className='text-base sm:text-lg md:text-[20px] text-gray-600'>passenger</p>
                                    <p className='absolute text-sm sm:text-base md:text-[18px] text-gray-600 right-4 sm:right-5 md:right-[20px]'>
                                        {car.pasenger}
                                    </p>
                                </div>
                            </div>
                            
                            <hr className='w-[90%] border-b border-gray-200 mt-4 sm:mt-6 md:mt-[20px] ml-4 sm:ml-5 md:ml-[20px]' />

                            <div className='flex relative min-h-[70px] sm:min-h-[80px] md:h-[90px] items-center'>
                                <p className='text-xl sm:text-2xl md:text-[25px] font-semibold ml-4 sm:ml-5 md:ml-[20px] mb-2 sm:mb-[10px]'>
                                    ${car.pricePerDay}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">/per Day</p>
                                <button className="absolute right-4 sm:right-5 md:right-[20px] bg-[rgb(255,54,0)] mt-[2px] w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] rounded-full group-hover:bg-black cursor-pointer transform rotate-[-45deg] pl-[6px] sm:pl-[8px] group-hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center">
                                    <Link to={`/car/${car._id}`}>
                                        <svg fill="none" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7">
                                            <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                                        </svg>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center w-full min-h-[400px]">
                        <p className="text-lg sm:text-xl text-gray-600">Loading cars...</p>
                    </div>
                )}
            </div>
            
            <div className='flex gap-4 sm:gap-6 md:gap-[30px] mt-6 sm:mt-8 md:mt-10 lg:mt-[40px]'>
                <button 
                    onClick={scrollPrev} 
                    className="bg-[rgb(255,54,0)] mt-[2px] w-[45px] h-[45px] sm:w-[51px] sm:h-[51px] rotate-180 rounded-full hover:bg-black cursor-pointer transform pl-[4px] sm:pl-[5px] transition-all duration-[500ms] flex items-center justify-center"
                >
                    <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                        <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                    </svg>
                </button>
                <button 
                    onClick={scrollNext} 
                    className="bg-[rgb(255,54,0)] mt-[2px] w-[45px] h-[45px] sm:w-[51px] sm:h-[51px] rounded-full hover:bg-black cursor-pointer transform pl-[4px] sm:pl-[5px] transition-all duration-[500ms] flex items-center justify-center"
                >
                    <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                        <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default Fleets;
