const Categories = () => {
    // მონაცემების მასივი კოდის შესამცირებლად და ადვილად სამართავად
    const categoryData = [
        { title: 'Sport Car', img: 'bg-[url(/luxury-collection-img-1.jpg)]', delay: 'dvv1' },
        { title: 'Convertible Car', img: 'bg-[url(/luxury-collection-img-2.webp)]', delay: 'dvv2' },
        { title: 'Sedan Car', img: 'bg-[url(/luxury-collection-img-3.webp)]', delay: 'dvv3' },
        { title: 'Luxury car', img: 'bg-[url(/luxury-collection-img-4.webp)]', delay: 'dvv4' },
    ];

    return (
        <section className='min-h-[300px] sm:min-h-[400px] md:min-h-[450px] w-full max-w-[97%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-[10px] px-4 sm:px-6 md:px-8'>
            {categoryData.map((item, index) => (
                <div
                    key={index}
                    className={`group rounded-[30px] sm:rounded-[40px] overflow-hidden cursor-pointer relative 
                    ${item.img} bg-center bg-cover bg-no-repeat
                    bg-[size:100%_100%] hover:bg-[size:110%_110%] 
                    transition-all duration-[1000ms] ease-in-out 
                    ${item.delay} animate-on-scroll min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:h-[450px]`}
                >
                    {/* შავი გადაკვრა (Overlay) */}
                    <div className='bg-black/30 w-full h-full transition-colors duration-500 group-hover:bg-black/40'>
                        <p className='absolute top-6 sm:top-8 md:top-[30px] text-white text-2xl sm:text-3xl md:text-[35px] font-semibold left-6 sm:left-8 md:left-[40px]'>
                            {item.title}
                        </p>

                        <button className="absolute bottom-6 sm:bottom-8 md:bottom-[40px] right-6 sm:right-8 md:right-[40px] bg-[rgb(255,54,0)] w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] rounded-full group-hover:bg-black cursor-pointer transform rotate-[-45deg] group-hover:rotate-[0deg] transition-all duration-[500ms] flex items-center justify-center">
                            <svg fill="none" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7">
                                <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Categories;