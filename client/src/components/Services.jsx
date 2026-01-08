const Services = () => {
    return (
        <section className='mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] flex flex-col items-center bg-[rgb(255,248,246)] w-full max-w-[97%] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] min-h-[900px] sm:min-h-[1000px] md:min-h-[1100px] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8'>
            <div className='flex flex-col items-center mt-8 sm:mt-12 md:mt-16 lg:mt-[150px] w-full max-w-[700px] min-h-[150px] sm:min-h-[180px] md:min-h-[200px]'>
                <p className='flex items-center gap-2 sm:gap-3 text-[rgb(255,54,0)] font-semibold text-base sm:text-lg md:text-[19px]'>
                    <img width="15px" className='mt-1 sm:mt-2 w-3 sm:w-4 h-auto' src="/images__4_-removebg-preview (1).png" alt="" />
                    Our Services
                </p>

                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold m-0 leading-[1.1] hometext6 animate-on-scroll text-center'>Explore our wide range of</h2>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold m-0 leading-[1.1] hometext7 animate-on-scroll text-center'>rental services</h2>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-[30px] mt-8 sm:mt-12 md:mt-16 lg:mt-[30px] min-h-[300px] sm:min-h-[350px] md:min-h-[400px]'>
                {/* Service Card 1 */}
                <div className='border border-gray-200 overflow-hidden cursor-pointer relative rounded-[30px] sm:rounded-[40px] group bg-white dvv1 animate-on-scroll min-h-[280px] sm:min-h-[320px] md:min-h-[400px]'>
                    <div className='reddvv absolute h-[0px] mix-blend-multiply bg-[rgb(255,54,0)] w-full transition-all duration-300 group-hover:h-full'></div>
                    <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-[70px] md:w-[70px] absolute group-hover:bg-white transition-all duration-[300ms] mt-6 sm:mt-8 ml-6 sm:ml-8 bg-[rgba(254,235,231,1)] rounded-full'></div>
                    <img className='absolute top-8 sm:top-10 md:top-[40px] left-8 sm:left-10 md:left-[40px] w-16 sm:w-20 md:w-[80px] h-auto' src="./Screenshot_2025-10-12_204534-removebg-preview.png" alt="Car Rental With Driver" />
                    <h2 className='text-lg sm:text-xl md:text-[22px] group-hover:text-white transition-all duration-[400ms] absolute top-20 sm:top-24 md:top-[100px] mt-8 sm:mt-10 md:mt-[50px] ml-6 sm:ml-8 font-bold'>Car Rental With Driver</h2>
                    <p className='text-sm sm:text-base md:text-[18px] group-hover:text-white transition-all duration-[400ms] absolute top-32 sm:top-40 md:top-[180px] text-gray-600 ml-6 sm:ml-8 mt-4 sm:mt-5 md:mt-[20px] leading-relaxed'>
                        Enhance your rental <br /> experience with additional <br /> options.
                    </p>
                    <button className="bg-[rgb(255,54,0)] absolute bottom-6 sm:bottom-8 md:top-[320px] w-[45px] h-[45px] sm:w-[51px] sm:h-[51px] rounded-full group-hover:bg-black cursor-pointer transform ml-6 sm:ml-8 rotate-[-45deg] pl-[4px] sm:pl-[5px] group-hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center">
                        <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                            <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                        </svg>
                    </button>
                </div>

                {/* Service Card 2 */}
                <div className='border border-gray-200 overflow-hidden cursor-pointer relative rounded-[30px] sm:rounded-[40px] group bg-white dvv2 animate-on-scroll min-h-[280px] sm:min-h-[320px] md:min-h-[400px]'>
                    <div className='reddvv absolute h-[0px] mix-blend-multiply bg-[rgb(255,54,0)] w-full transition-all duration-300 group-hover:h-full'></div>
                    <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-[70px] md:w-[70px] absolute group-hover:bg-white transition-all duration-[300ms] mt-6 sm:mt-8 ml-6 sm:ml-8 bg-[rgba(254,235,231,1)] rounded-full'></div>
                    <img className='absolute top-7 sm:top-9 md:top-[35px] left-8 sm:left-10 md:left-[40px] w-14 sm:w-18 md:w-[75px] h-auto' src="./car-loan-icon-line-color-260nw-2666134467__1_-removebg-preview (1).png" alt="Business Car Rental" />
                    <h2 className='text-lg sm:text-xl md:text-[22px] group-hover:text-white transition-all duration-[400ms] absolute top-20 sm:top-24 md:top-[100px] mt-8 sm:mt-10 md:mt-[50px] ml-6 sm:ml-8 font-bold'>Business Car Rental</h2>
                    <p className='text-sm sm:text-base md:text-[18px] group-hover:text-white transition-all duration-[400ms] absolute top-32 sm:top-40 md:top-[180px] text-gray-600 ml-6 sm:ml-8 mt-4 sm:mt-5 md:mt-[20px] leading-relaxed'>
                        Enhance your rental <br /> experience with additional <br /> options.
                    </p>
                    <button className="bg-[rgb(255,54,0)] absolute bottom-6 sm:bottom-8 md:top-[320px] w-[45px] h-[45px] sm:w-[51px] sm:h-[51px] rounded-full group-hover:bg-black cursor-pointer transform ml-6 sm:ml-8 rotate-[-45deg] pl-[4px] sm:pl-[5px] group-hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center">
                        <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                            <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                        </svg>
                    </button>
                </div>

                {/* Service Card 3 */}
                <div className='border border-gray-200 overflow-hidden cursor-pointer relative rounded-[30px] sm:rounded-[40px] group bg-white dvv3 animate-on-scroll min-h-[280px] sm:min-h-[320px] md:min-h-[400px]'>
                    <div className='reddvv absolute h-[0px] mix-blend-multiply bg-[rgb(255,54,0)] w-full transition-all duration-300 group-hover:h-full'></div>
                    <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-[70px] md:w-[70px] absolute group-hover:bg-white transition-all duration-[300ms] mt-6 sm:mt-8 ml-6 sm:ml-8 bg-[rgba(254,235,231,1)] rounded-full'></div>
                    <img className='absolute top-9 sm:top-11 md:top-[43px] left-9 sm:left-11 md:left-[43px] w-12 sm:w-16 md:w-[65px] h-auto' src="./Screenshot_2025-10-14_213055-removebg-preview.png" alt="Airport Transfer" />
                    <h2 className='text-lg sm:text-xl md:text-[22px] group-hover:text-white transition-all duration-[400ms] absolute top-20 sm:top-24 md:top-[100px] mt-8 sm:mt-10 md:mt-[50px] ml-6 sm:ml-8 font-bold'>Airport Transfer</h2>
                    <p className='text-sm sm:text-base md:text-[18px] group-hover:text-white transition-all duration-[400ms] absolute top-32 sm:top-40 md:top-[180px] text-gray-600 ml-6 sm:ml-8 mt-4 sm:mt-5 md:mt-[20px] leading-relaxed'>
                        Enhance your rental <br /> experience with additional <br /> options.
                    </p>
                    <button className="bg-[rgb(255,54,0)] absolute bottom-6 sm:bottom-8 md:top-[320px] w-[45px] h-[45px] sm:w-[51px] sm:h-[51px] rounded-full group-hover:bg-black cursor-pointer transform ml-6 sm:ml-8 rotate-[-45deg] pl-[4px] sm:pl-[5px] group-hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center">
                        <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                            <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                        </svg>
                    </button>
                </div>

                {/* Service Card 4 */}
                <div className='border border-gray-200 overflow-hidden cursor-pointer relative rounded-[30px] sm:rounded-[40px] group bg-white dvv4 animate-on-scroll min-h-[280px] sm:min-h-[320px] md:min-h-[400px]'>
                    <div className='reddvv absolute h-[0px] mix-blend-multiply bg-[rgb(255,54,0)] w-full transition-all duration-300 group-hover:h-full'></div>
                    <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-[70px] md:w-[70px] absolute group-hover:bg-white transition-all duration-[300ms] mt-6 sm:mt-8 ml-6 sm:ml-8 bg-[rgba(254,235,231,1)] rounded-full'></div>
                    <img className='absolute top-9 sm:top-11 md:top-[43px] left-9 sm:left-11 md:left-[43px] w-12 sm:w-16 md:w-[62px] h-auto' src="./Screenshot_2025-10-14_213824-removebg-preview.png" alt="Chauffeur Services" />
                    <h2 className='text-lg sm:text-xl md:text-[22px] group-hover:text-white transition-all duration-[400ms] absolute top-20 sm:top-24 md:top-[100px] mt-8 sm:mt-10 md:mt-[50px] ml-6 sm:ml-8 font-bold'>Chauffeur Services</h2>
                    <p className='text-sm sm:text-base md:text-[18px] group-hover:text-white transition-all duration-[400ms] absolute top-32 sm:top-40 md:top-[180px] text-gray-600 ml-6 sm:ml-8 mt-4 sm:mt-5 md:mt-[20px] leading-relaxed'>
                        Enhance your rental <br /> experience with additional <br /> options.
                    </p>
                    <button className="bg-[rgb(255,54,0)] absolute bottom-6 sm:bottom-8 md:top-[320px] w-[45px] h-[45px] sm:w-[51px] sm:h-[51px] rounded-full group-hover:bg-black cursor-pointer transform ml-6 sm:ml-8 rotate-[-45deg] pl-[4px] sm:pl-[5px] group-hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center">
                        <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                            <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>

            <p className='mt-8 sm:mt-12 md:mt-16 lg:mt-[80px] text-sm sm:text-base md:text-lg lg:text-[18px] text-gray-600 text-center hometext8 animate-on-scroll max-w-3xl leading-relaxed'>
                Discover our range of car rental services designed to meet all your travel needs. From a diverse fleet of vehicles to flexible rental plans.
            </p>
            
            <div className="group flex mt-6 sm:mt-8 md:mt-10 lg:mt-[30px] rounded-[30px] butt animate-on-scroll">
                <button className="w-[140px] sm:w-[150px] md:w-[170px] h-[45px] sm:h-[49px] md:h-[53px] cursor-pointer rounded-[30px] bg-[rgb(255,54,0)] flex group justify-center items-center text-white font-semibold text-sm sm:text-base md:text-[17px] transition-all hover:opacity-90">
                    view all service
                </button>
                <button className="bg-[rgb(255,54,0)] mt-[2px] w-[41px] h-[41px] sm:w-[46px] sm:h-[46px] md:w-[51px] md:h-[51px] rounded-full group-hover:bg-black cursor-pointer transform rotate-[-45deg] pl-[4px] sm:pl-[5px] group-hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center flex-shrink-0">
                    <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                        <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default Services;
