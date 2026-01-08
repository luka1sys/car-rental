const Contact = () => {
    return (
        <section className='bg-black w-full max-w-[97%] flex flex-col lg:flex-row items-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px] mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16'>
            <section className='border-white w-full lg:w-1/2 pl-0 lg:pl-[30px] h-auto lg:h-[60%] mb-8 lg:mb-0'>
                <h2 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.1] hometext6 animate-on-scroll font-bold text-center lg:text-left'>
                    Ready to hit the road?
                </h2>
                <h2 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.1] hometext7 animate-on-scroll font-bold text-center lg:text-left mt-2'>
                    Book your car today !
                </h2>

                <p className='text-white text-base sm:text-lg md:text-[19px] mt-4 sm:mt-6 md:mt-[30px] hometext8 animate-on-scroll text-center lg:text-left leading-relaxed'>
                    Our friendly customer service team is here to help. Contact us anytime for support and inquiries.
                </p>
                
                <div className="group flex mt-6 sm:mt-8 md:mt-10 lg:mt-[50px] rounded-[30px] butt animate-on-scroll justify-center lg:justify-start">
                    <button className="w-[130px] sm:w-[140px] md:w-[150px] h-[45px] sm:h-[49px] md:h-[53px] cursor-pointer rounded-[30px] bg-[rgb(255,54,0)] flex group justify-center items-center text-white font-semibold text-base sm:text-lg md:text-[20px] transition-all hover:opacity-90">
                        contact us
                    </button>
                    <button className="bg-[rgb(255,54,0)] mt-[2px] w-[41px] h-[41px] sm:w-[46px] sm:h-[46px] md:w-[51px] md:h-[51px] rounded-full group-hover:bg-black cursor-pointer transform rotate-[-45deg] pl-[4px] sm:pl-[5px] group-hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center flex-shrink-0">
                        <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                            <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </section>
            
            <section className='w-full lg:w-1/2 pt-4 sm:pt-6 md:pt-8 lg:pt-[30px] h-auto lg:h-[70%] flex justify-center lg:justify-end'>
                <img className="w-full max-w-[400px] lg:max-w-none h-auto" src="/cta-car-img.png" alt="Car" />
            </section>
        </section>
    );
}

export default Contact;
