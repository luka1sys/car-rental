import React from 'react';

const WatchOurVideo = () => {
    return (
        <section className="py-20 px-6 font-sans w-[97%] mx-auto rounded-[40px] my-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* სათაურის სექცია */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-orange-600 text-xl">✱</span>
                        <span className="text-orange-600 font-medium uppercase tracking-wider text-sm">
                            Watch Our Video
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] max-w-3xl mx-auto leading-tight">
                        Discover what sets us apart in the car rental industry
                    </h2>
                </div>

                {/* სურათების ბლოკი */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

                    {/* მარცხენა პატარა სურათი (კმაყოფილი კლიენტები) */}
                    <div className="md:col-span-4 relative group">
                        <div className="relative h-[450px] overflow-hidden rounded-[35px]">
                            <img
                                src="/imgi_39_video-counter-img-1.jpg"
                                alt="Satisfied Customer"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay ტექსტით */}
                            <div className="absolute inset-0 bg-black/20 p-8 flex flex-col justify-start">
                                <h3 className="text-white text-5xl font-bold mb-1">3100 +</h3>
                                <p className="text-white/90 text-lg">satisfied customer</p>

                                {/* ავატარების ჯგუფი */}
                                <div className="flex -space-x-3 mt-auto mb-4">
                                    <img src="/imgi_12_satisfied-customer-img.png" alt="" />
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* მარჯვენა დიდი სურათი (ვიდეოს ღილაკით) */}
                    <div className="md:col-span-8 relative group">
                        <div className="relative h-[450px] overflow-hidden rounded-[35px]">
                            <img
                                src="/imgi_13_video-counter-img-2.jpg"
                                alt="Business traveler"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* მუქი ფენა ლოგოსთვის */}
                            <div className="absolute inset-0 bg-black/10"></div>

                            {/* Play Button - მდებარეობა ქვედა მარჯვენა კუთხეში */}
                            <button className="absolute bottom-6 right-6 w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center group/btn hover:bg-white transition-all duration-300 shadow-2xl">
                                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2 group-hover/btn:border-l-orange-600 transition-colors"></div>

                                {/* Pulsing Effect */}
                                <div className="absolute inset-0 rounded-full bg-orange-600 animate-ping opacity-20 -z-10"></div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default WatchOurVideo;