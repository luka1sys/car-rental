import React from 'react';
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <main className="bg-gray-50">
            {/* Header Section */}
            <div className="flex justify-center mt-6">
                <div
                    style={{
                        backgroundImage: "url('/imgi_14_page-header-bg.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] w-full max-w-[97%] min-h-[250px] sm:min-h-[350px] md:min-h-[400px] flex items-center justify-center"
                >
                    <div className="bg-black/50 w-full h-full flex flex-col gap-3 justify-center items-center py-10 px-4">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] text-white font-semibold text-center uppercase">Contact Us</h2>
                        <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-[20px] text-center">
                            Home / <span className="text-[rgb(255,54,0)]">Contact Us</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20">
                <div className="bg-white w-full max-w-7xl rounded-[30px] shadow-sm flex flex-col md:flex-row p-2 sm:p-4">

                    {/* მარცხენა შავი ბლოკი */}
                    <div className="bg-black text-white w-full md:w-[42%] rounded-[25px] p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-between min-h-[500px] md:min-h-[700px]">
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Contact information</h2>
                            <p className="text-gray-400 mb-10 text-lg">Say something to start a live chat!</p>

                            <div className="space-y-8 sm:space-y-12">
                                <div className="flex items-center gap-5 sm:gap-8">
                                    <div className="w-6 sm:w-8 shrink-0"><img src="/download (3).svg" alt="phone" className="w-full h-auto invert" /></div>
                                    <div className="text-base sm:text-lg font-medium">(+01) 789 854 856</div>
                                </div>
                                <div className="flex items-center gap-5 sm:gap-8">
                                    <div className="w-6 sm:w-8 shrink-0"><img src="/download (4).svg" alt="email" className="w-full h-auto invert" /></div>
                                    <div className="text-base sm:text-lg font-medium">info@domain.com</div>
                                </div>
                                <div className="flex items-start gap-5 sm:gap-8">
                                    <div className="w-6 sm:w-8 shrink-0 mt-1"><img src="/download (5).svg" alt="address" className="w-full h-auto invert" /></div>
                                    <div className="text-base sm:text-lg font-medium leading-relaxed">
                                        1234 Elm Street, Suite 567 <br />
                                        Springfield, United States
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* სოციალური ქსელები */}
                        <div className="flex flex-wrap gap-4 sm:gap-6 relative z-10 mt-12">
                            {[
                                { link: "#", icon: "/whatsapp-svgrepo-com (1).svg" },
                                { link: "#", icon: "/instagram-svgrepo-com.svg" },
                                { link: "#", icon: "/facebook-176-svgrepo-com (3).svg" }
                            ].map((soc, idx) => (
                                <a key={idx} href={soc.link} target="_blank" rel="noreferrer"
                                    className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-900 rounded-full hover:bg-[#FF3600] transition-all duration-300 border border-white/20 flex items-center justify-center p-3.5">
                                    <img src={soc.icon} alt="social" className="w-full h-full object-contain filter brightness-0 invert" />
                                </a>
                            ))}
                        </div>

                        {/* Background Decor */}
                        <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 sm:w-80 sm:h-80 bg-zinc-900 rounded-full opacity-40"></div>
                        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-zinc-800 rounded-full opacity-20"></div>
                    </div>

                    {/* მარჯვენა ფორმის ბლოკი */}
                    <div className="w-full md:w-[58%] p-6 sm:p-10 lg:p-20 relative flex flex-col justify-center bg-white rounded-r-[30px]">
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-10 lg:gap-y-14">

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">First Name</label>
                                <input type="text" placeholder="John" className="border-b-2 border-gray-100 py-2 focus:border-[#FF3600] outline-none transition-all placeholder:text-gray-300 text-lg bg-transparent" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Last Name</label>
                                <input type="text" placeholder="Doe" className="border-b-2 border-gray-100 py-2 focus:border-[#FF3600] outline-none transition-all placeholder:text-gray-300 text-lg bg-transparent" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Email</label>
                                <input type="email" placeholder="example@gmail.com" className="border-b-2 border-gray-100 py-2 focus:border-[#FF3600] outline-none transition-all placeholder:text-gray-300 text-lg bg-transparent" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Phone</label>
                                <input type="text" placeholder="+1 234 567 890" className="border-b-2 border-gray-100 py-2 focus:border-[#FF3600] outline-none transition-all placeholder:text-gray-300 text-lg bg-transparent" />
                            </div>

                            <div className="sm:col-span-2 flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Message</label>
                                <textarea placeholder="Write your message here..." rows="1" className="border-b-2 border-gray-100 py-2 focus:border-[#FF3600] outline-none transition-all placeholder:text-gray-300 text-lg bg-transparent resize-none" />
                            </div>

                            <div className="sm:col-span-2 flex justify-start md:justify-end mt-4">
                                <button type="submit" className="w-full sm:w-auto bg-[#FF3600] text-white px-10 lg:px-16 py-4 lg:py-5 rounded-xl font-bold hover:bg-black hover:shadow-2xl transition-all duration-300 active:scale-95 text-base lg:text-lg uppercase tracking-widest">
                                    Send Message
                                </button>
                            </div>
                        </form>

                        {/* Paper Plane Illustration */}
                        <div className="absolute bottom-6 right-10 lg:bottom-12 lg:right-20 hidden xl:block opacity-80 pointer-events-none">
                            <img src="/imgi_10_contact-form-plan.svg" alt="decoration" className="w-40 lg:w-52 h-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
export default ContactUs;