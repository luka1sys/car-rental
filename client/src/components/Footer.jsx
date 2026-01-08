const Footer = () => {
    return (
        <footer className='bg-black text-white rounded-tr-[50px] sm:rounded-tr-[100px] lg:rounded-tr-[150px] w-full mt-8 sm:mt-12 md:mt-16 lg:mt-[30px] min-h-[500px] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6 xl:gap-8 mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
                {/* Logo and Description */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <img className="w-48 sm:w-56 lg:w-[250px] h-auto mb-6 sm:mb-8" src="/logo.svg" alt="Novaride Logo" />
                    <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed text-gray-300">
                        Experience the ease and convenience of renting a car with Novaride.
                    </p>
                </div>

                {/* Legal Policy */}
                <div>
                    <h2 className="text-lg sm:text-xl lg:text-[23px] font-semibold mb-4 sm:mb-6 text-center sm:text-left">Legal Policy</h2>
                    <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-[18px] text-gray-300">
                        <li className="hover:text-white transition-colors cursor-pointer">Term & Condition</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Legal Notice</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Accessibility</li>
                    </ul>
                </div>
                {/* Quick Links */}
                <div>
                    <h2 className="text-lg sm:text-xl lg:text-[23px] font-semibold mb-4 sm:mb-6 text-center sm:text-left">Quick Links</h2>
                    <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-[18px] text-gray-300">
                        <li className="hover:text-white transition-colors cursor-pointer">Home</li>
                        <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Car Type</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Service</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <h2 className="text-lg sm:text-xl lg:text-[23px] font-semibold mb-4 sm:mb-6">Subscribe to the Newsletters</h2>
                    <form className="flex gap-2 sm:gap-3 items-center" action="">
                        <input 
                            className="flex-1 border-b border-[rgb(255,54,0)] bg-transparent outline-none h-[50px] sm:h-[60px] rounded-full px-4 sm:px-6 text-white placeholder-gray-400 text-sm sm:text-base" 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email...." 
                        />
                        <button 
                            type="submit"
                            className="bg-[rgb(255,54,0)] mt-[2px] w-[45px] h-[45px] sm:w-[51px] sm:h-[51px] rounded-full hover:bg-black cursor-pointer transform rotate-[-45deg] pl-[4px] sm:pl-[5px] hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center flex-shrink-0"
                        >
                            <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                                <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                            </svg>
                        </button>
                    </form>
                </div>
            </section>

            <hr className="w-full border-t border-[rgb(54,54,51)] mt-8 sm:mt-10 lg:mt-12" />
            
            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <p className="text-sm sm:text-base lg:text-[18px] text-gray-400 text-center sm:text-left">
                    © 2024 Novaride. All rights reserved.
                </p>
                <div className="flex gap-4 sm:gap-5 lg:gap-[20px]">
                    <div className="border border-white cursor-pointer transition-all duration-[500ms] hover:border-[rgb(255,54,0)] flex justify-center items-center rounded-full h-[40px] w-[40px]">
                        <img width="20px" height="20px" src="/youtube-168-svgrepo-com.svg" alt="YouTube" />  
                    </div>
                    <div className="border border-white cursor-pointer transition-all duration-[500ms] hover:border-[rgb(255,54,0)] flex justify-center items-center rounded-full h-[40px] w-[40px]">
                        <img width="20px" height="20px" src="/instagram-svgrepo-com.svg" alt="Instagram" />  
                    </div>
                    <div className="border border-white cursor-pointer transition-all duration-[500ms] hover:border-[rgb(255,54,0)] flex justify-center items-center rounded-full h-[40px] w-[40px]">
                        <img width="20px" height="20px" src="/facebook-176-svgrepo-com (3).svg" alt="Facebook" />  
                    </div>
                    <div className="border border-white cursor-pointer transition-all duration-[500ms] hover:border-[rgb(255,54,0)] flex justify-center items-center rounded-full h-[40px] w-[40px]">
                        <img width="20px" height="20px" src="/youtube-168-svgrepo-com.svg" alt="YouTube" />  
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
