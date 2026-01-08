import { useState } from "react";

const Work = () => {
    const [active, setActive] = useState(null);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className='mt-12 sm:mt-16 md:mt-20 lg:mt-[110px] w-full min-h-[600px] sm:min-h-[650px] md:min-h-[700px] flex flex-col lg:flex-row px-4 sm:px-6 md:px-8'>
            <section className='w-full lg:w-1/2 pb-8 sm:pb-12 md:pb-[50px] h-auto lg:h-full'>
                <p className='flex items-center ml-0 sm:ml-4 md:ml-[30px] mt-4 sm:mt-6 md:mt-[20px] gap-2 sm:gap-3 text-[rgb(255,54,0)] font-semibold text-base sm:text-lg md:text-[19px]'>
                    <img width="15px" className='mt-1 sm:mt-2 w-3 sm:w-4 h-auto' src="/images__4_-removebg-preview (1).png" alt="" />
                    How It Work
                </p>
                
                <div>
                    <h2 className='ml-0 sm:ml-4 md:ml-[30px] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold m-0 leading-[1.1] hometext6 animate-on-scroll'>
                        Streamlined processes
                    </h2>
                    <h2 className='ml-0 sm:ml-4 md:ml-[30px] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold m-0 leading-[1.1] hometext7 animate-on-scroll'>
                        for a hassle-free
                    </h2>
                    <h2 className='ml-0 sm:ml-4 md:ml-[30px] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold m-0 leading-[1.1] hometext77 animate-on-scroll'>
                        experience
                    </h2>
                </div>

                <p className='mt-4 sm:mt-6 md:mt-[20px] ml-0 sm:ml-4 md:ml-[30px] text-sm sm:text-base md:text-lg lg:text-[18px] text-gray-600 hometext8 animate-on-scroll leading-relaxed'>
                    Our streamlined process ensures a seamless car rental experience from start to finish. With easy online booking, flexible pick-up and drop-off options.
                </p>
                
                <div className='mt-6 sm:mt-8 md:mt-10 lg:mt-[40px] hometext8 animate-on-scroll w-full'>
                    <div className='flex w-full relative ml-0 sm:ml-4 md:ml-[30px] pr-4 sm:pr-8 md:pr-0'>
                        <h2 className='text-lg sm:text-xl md:text-[23px] font-semibold'>1.</h2>
                        <h2 className='text-lg sm:text-xl md:text-[23px] font-semibold ml-4 sm:ml-5 md:ml-[20px]'>Browse And Select</h2>
                        <img 
                            onClick={() => toggle(1)} 
                            style={{ transform: active == 1 ? "rotate(180deg)" : "rotate(0deg)" }} 
                            className="absolute right-4 sm:right-8 md:right-[30px] cursor-pointer transition-transform duration-300 w-7 sm:w-8 md:w-[35px] h-auto" 
                            src="./arrow-down-svgrepo-com (1).svg" 
                            alt="Toggle" 
                        />
                    </div>
                    {active == 1 && (
                        <p className='ml-8 sm:ml-12 md:ml-[65px] mt-2 sm:mt-3 md:mt-[10px] text-sm sm:text-base md:text-lg lg:text-[18px] text-gray-600 leading-relaxed'>
                            Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs
                        </p>
                    )}
                </div>
                
                <hr className='border border-gray-100 mt-4 sm:mt-6 md:mt-[30px] w-[90%] ml-0 sm:ml-4 md:ml-[30px]' />
                
                <div className='mt-6 sm:mt-8 md:mt-10 lg:mt-[40px] hometext8 animate-on-scroll w-full'>
                    <div className='flex w-full relative ml-0 sm:ml-4 md:ml-[30px] pr-4 sm:pr-8 md:pr-0'>
                        <h2 className='text-lg sm:text-xl md:text-[23px] font-semibold'>2.</h2>
                        <h2 className='text-lg sm:text-xl md:text-[23px] font-semibold ml-4 sm:ml-5 md:ml-[20px]'>
                            Book And Confirm
                        </h2>
                        <img 
                            onClick={() => toggle(2)} 
                            style={{ transform: active == 2 ? "rotate(180deg)" : "rotate(0deg)" }} 
                            className="absolute right-4 sm:right-8 md:right-[30px] cursor-pointer transition-transform duration-300 w-7 sm:w-8 md:w-[35px] h-auto" 
                            src="./arrow-down-svgrepo-com (1).svg" 
                            alt="Toggle" 
                        />
                    </div>
                    {active == 2 && (
                        <p className='ml-8 sm:ml-12 md:ml-[65px] mt-2 sm:mt-3 md:mt-[10px] text-sm sm:text-base md:text-lg lg:text-[18px] text-gray-600 leading-relaxed'>
                            Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs
                        </p>
                    )}
                    <hr className='border border-gray-100 mt-4 sm:mt-6 md:mt-[30px] w-[90%] ml-0 sm:ml-4 md:ml-[30px]' />
                </div>
                
                <div className='mt-6 sm:mt-8 md:mt-10 lg:mt-[40px] hometext8 animate-on-scroll w-full'>
                    <div className='flex w-full relative ml-0 sm:ml-4 md:ml-[30px] pr-4 sm:pr-8 md:pr-0'>
                        <h2 className='text-lg sm:text-xl md:text-[23px] font-semibold'>3.</h2>
                        <h2 className='text-lg sm:text-xl md:text-[23px] font-semibold ml-4 sm:ml-5 md:ml-[20px]'>
                            Book And Enjoy
                        </h2>
                        <img 
                            onClick={() => toggle(3)} 
                            style={{ transform: active == 3 ? "rotate(180deg)" : "rotate(0deg)" }} 
                            className="absolute right-4 sm:right-8 md:right-[30px] cursor-pointer transition-transform duration-300 w-7 sm:w-8 md:w-[35px] h-auto" 
                            src="./arrow-down-svgrepo-com (1).svg" 
                            alt="Toggle" 
                        />
                    </div>
                    {active == 3 && (
                        <p className='ml-8 sm:ml-12 md:ml-[65px] mt-2 sm:mt-3 md:mt-[10px] text-sm sm:text-base md:text-lg lg:text-[18px] text-gray-600 leading-relaxed'>
                            Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs
                        </p>
                    )}
                </div>
            </section>
            
            <section className='w-full lg:w-1/2 h-auto lg:h-full relative mt-8 lg:mt-0 flex justify-center lg:justify-start'>
                <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[430px]">
                    <div
                        style={{
                            backgroundImage: `url("https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/about-img-1.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-full ml-0 sm:ml-8 md:ml-16 lg:ml-[130px] mt-4 sm:mt-6 md:mt-8 lg:mt-[10px] overflow-hidden relative z-10"
                    >
                    </div>
                    <div className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full absolute top-0 left-0 sm:left-8 md:left-16 lg:left-[125px] rounded-full border border-gray-300 z-0'>
                    </div>
                    <img 
                        width="80px" 
                        className='hidden lg:block absolute top-[60px] sm:top-[70px] md:top-[80px] lg:top-[90px] left-full lg:left-[calc(100%+2rem)] w-12 sm:w-16 md:w-20 h-auto z-20' 
                        src="/images__4_-removebg-preview (1).png" 
                        alt="" 
                    />
                    <img 
                        className='absolute left-[50%] lg:left-[290px] -translate-x-1/2 lg:translate-x-0 bottom-0 lg:bottom-0 w-20 sm:w-24 md:w-28 lg:w-[120px] h-auto z-20' 
                        src="./images__6_-removebg-preview.png" 
                        alt="" 
                    />
                    <div className='moving-box absolute w-[180px] sm:w-[200px] md:w-[220px] h-[190px] sm:h-[210px] md:h-[235px] bg-[rgb(255,54,0)] rounded-[20px] left-[50%] lg:left-[380px] -translate-x-1/2 lg:translate-x-0 top-[280px] sm:top-[350px] md:top-[400px] lg:top-[431px] z-30 p-4 sm:p-5 md:p-6'>
                        <p className='text-white font-bold text-base sm:text-lg md:text-[21px] leading-tight'>
                            5 m+ <br />Trusted world <br /> wide global <br /> clients
                        </p>
                        <hr className='border border-white mt-2 sm:mt-3 md:mt-[10px] w-[80%]' />
                        <img className='mt-4 sm:mt-5 md:mt-[20px] w-full h-auto' src="./trusted-client-img.png" alt="Trusted Clients" />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Work;
