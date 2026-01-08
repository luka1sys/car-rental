const ChooseUs = () => {
    return (
        <section className='min-h-[800px] sm:min-h-[850px] md:min-h-[900px] w-full max-w-[97%] px-4 sm:px-6 md:px-8'>
            <div className='flex flex-col items-center mt-8 sm:mt-12 md:mt-16 lg:mt-[100px] min-h-[150px] sm:min-h-[180px] md:min-h-[200px]'>
                <p className='flex items-center gap-2 sm:gap-3 text-[rgb(255,54,0)] font-semibold text-base sm:text-lg md:text-[19px]'>
                    <img width="15px" className='mt-1 sm:mt-2 w-3 sm:w-4 h-auto' src="/images__4_-removebg-preview (1).png" alt="" />
                    Why Choose Us
                </p>

                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold m-0 leading-[1.1] hometext6 animate-on-scroll text-center'>Unmatched quality and service</h2>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold m-0 leading-[1.1] hometext7 animate-on-scroll text-center'>for your needs</h2>
            </div>

            <div className='w-full mt-6 sm:mt-8 md:mt-10 lg:mt-[30px] grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-8 items-start lg:items-center min-h-[400px] sm:min-h-[500px] md:min-h-[570px]'>
                {/* Left Column - Features */}
                <section className='relative min-h-[300px] sm:min-h-[350px] md:min-h-[380px] space-y-6 sm:space-y-8'>
                    <div className='flex hometext8 animate-on-scroll min-h-[120px] sm:min-h-[140px] md:min-h-[40%] w-full'>
                        <div className='h-10 w-10 sm:h-12 sm:w-12 md:h-[40px] md:w-[40px] rounded-full bg-[rgb(255,234,229)] flex-shrink-0 relative'>
                            <img 
                                width="50px" 
                                className='absolute top-[5px] left-[1px] w-10 sm:w-12 md:w-[50px] h-auto' 
                                src="/Screenshot_2025-11-11_115727-removebg-preview.png" 
                                alt="Fleet" 
                            />
                        </div>
                        <div className='h-full w-full ml-4 sm:ml-6 md:ml-[30px]'>
                            <h2 className='font-semibold text-lg sm:text-xl md:text-[25px]'>Extensive Fleet Options</h2>
                            <p className='text-sm sm:text-base md:text-[18px] text-gray-600 mt-2 sm:mt-3 md:mt-[10px] leading-relaxed'>
                                Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa
                            </p>
                        </div>
                    </div>

                    <hr className='border border-gray-100 w-[94%] mt-4 sm:mt-6 md:mt-[25px]' />

                    <div className='mt-6 sm:mt-8 md:mt-10 lg:mt-[40px] hometext8 animate-on-scroll relative flex min-h-[120px] sm:min-h-[140px] md:min-h-[40%] w-full'>
                        <div className='h-10 w-10 sm:h-12 sm:w-12 md:h-[40px] md:w-[40px] rounded-full bg-[rgb(255,234,229)] flex-shrink-0 relative'>
                            <img 
                                width="35px" 
                                className='absolute top-[5px] left-[6px] w-8 sm:w-10 md:w-[35px] h-auto' 
                                src="/1067566.png" 
                                alt="Service" 
                            />
                        </div>
                        <div className='h-full w-full ml-4 sm:ml-6 md:ml-[30px]'>
                            <h2 className='font-semibold text-lg sm:text-xl md:text-[25px]'>Exceptional Customer Service</h2>
                            <p className='text-sm sm:text-base md:text-[18px] text-gray-600 mt-2 sm:mt-3 md:mt-[10px] leading-relaxed'>
                                Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa
                            </p>
                        </div>
                    </div>
                </section>

                {/* Center Column - Image */}
                <section className='relative flex flex-col items-center order-first lg:order-none'>
                    <div className='photoanimate animate-on-scroll rounded-[120px] sm:rounded-[140px] md:rounded-[160px] lg:rounded-[180px] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] h-[400px] sm:h-[450px] md:h-[520px] lg:h-[570px] overflow-hidden border-2 border-red-500'>
                        <img className='w-full h-full object-cover' width="100%" src="/why-choose-img.jpg" alt="Why Choose Us" />
                    </div>
                    <img 
                        className='absolute bottom-2 sm:bottom-4 md:bottom-[10px] w-32 sm:w-40 md:w-48 lg:w-auto h-auto' 
                        src="/why-choose-car-img.png" 
                        alt="Car" 
                    />
                </section>

                {/* Right Column - Features */}
                <section className='min-h-[300px] sm:min-h-[350px] md:min-h-[380px] pl-0 lg:pl-[20px] space-y-6 sm:space-y-8'>
                    <div className='flex relative hometext8 animate-on-scroll min-h-[120px] sm:min-h-[140px] md:min-h-[40%] w-full'>
                        <div className='h-10 w-10 sm:h-12 sm:w-12 md:h-[40px] md:w-[40px] rounded-full bg-[rgb(255,234,229)] flex-shrink-0 relative'>
                            <img 
                                width="35px" 
                                className='absolute top-[5px] left-[6px] w-8 sm:w-10 md:w-[35px] h-auto' 
                                src="/e1148ea94801530581b27bf22e5b3b1e-removebg-preview.png" 
                                alt="Location" 
                            />
                        </div>
                        <div className='h-full w-full ml-4 sm:ml-6 md:ml-[30px]'>
                            <h2 className='font-semibold text-lg sm:text-xl md:text-[25px]'>Convenient Locations</h2>
                            <p className='text-sm sm:text-base md:text-[18px] text-gray-600 mt-2 sm:mt-3 md:mt-[10px] leading-relaxed'>
                                Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa
                            </p>
                        </div>
                    </div>

                    <hr className='border border-gray-100 w-[94%] mt-4 sm:mt-6 md:mt-[25px]' />

                    <div className='mt-6 sm:mt-8 md:mt-10 lg:mt-[40px] relative hometext8 animate-on-scroll flex min-h-[120px] sm:min-h-[140px] md:min-h-[40%] w-full'>
                        <div className='h-10 w-10 sm:h-12 sm:w-12 md:h-[40px] md:w-[40px] rounded-full bg-[rgb(255,234,229)] flex-shrink-0 relative'>
                            <img 
                                width="50px" 
                                className='absolute top-[5px] left-[1px] w-10 sm:w-12 md:w-[50px] h-auto' 
                                src="/car-insurance-concept-car-with-shield-icon-over-white-background-line-style-illustration-vector-removebg-preview.png" 
                                alt="Safety" 
                            />
                        </div>
                        <div className='h-full w-full ml-4 sm:ml-6 md:ml-[30px]'>
                            <h2 className='font-semibold text-lg sm:text-xl md:text-[25px]'>Reliability And Safety</h2>
                            <p className='text-sm sm:text-base md:text-[18px] text-gray-600 mt-2 sm:mt-3 md:mt-[10px] leading-relaxed'>
                                Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default ChooseUs;