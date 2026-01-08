import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useCars } from "../contexts/CarsContext";
import Footer from "../components/Footer";
import { useEffect } from "react";
import CarFilter from "../components/carFilter";
import { Link } from "react-router-dom";

const CarsPage = () => {
    const { cars, getCars } = useCars();
    const [currentPage, setCurrentPage] = useState(0);

    // Pagination
    const itemsPerPage = 6;
    const offset = currentPage * itemsPerPage;
    const currentItems = cars.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(cars.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };
    
    return (
        <main className="flex flex-col items-center w-full overflow-x-hidden px-4 sm:px-6 md:px-8">
            {/* Header */}
            <div
                style={{
                    backgroundImage: "url('/imgi_14_page-header-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] w-full max-w-[97%] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-[470px]"
            >
                <div className="bg-black/50 w-full h-full flex flex-col gap-4 sm:gap-6 md:gap-[20px] justify-center items-center py-8 sm:py-12">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] text-white font-semibold text-center">Blog</h2>
                    <p className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-[20px] text-center">
                        Home / <span className="text-[rgb(255,54,0)]">Voyager Hybrid</span>
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row w-full max-w-[97%] gap-6 sm:gap-8 md:gap-[30px] pt-6 sm:pt-8 md:pt-[20px] mt-8 sm:mt-12 md:mt-16 lg:mt-[80px]">
                {/* Sidebar */}
                <section className="w-full lg:w-[22%] lg:max-w-[300px] overflow-hidden rounded-[20px] sm:rounded-[30px] flex-shrink-0">
                    <CarFilter />
                    <div className="hidden lg:block mt-4 space-y-4">
                        <img className="w-full h-auto rounded-lg" src="/e4e70294-b8c9-4cb7-a493-e1a09b54b845.png" alt="" />
                        <img className="w-full h-auto rounded-lg" src="/3f9d905c-c45a-4fc9-9b1d-91aff74226e0.png" alt="" />
                    </div>
                </section>

                {/* Cars Grid */}
                <section className="w-full lg:w-[76%] flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-[30px] pb-4 sm:pb-6 md:pb-[10px]">
                        {currentItems.length > 0 ? (
                            currentItems.map((car) => (
                                <div
                                    key={car._id}
                                    className="car-card flex-shrink-0 transition-all duration-[2000ms] pb-4 sm:pb-6 md:pb-[20px] group cursor-pointer rounded-[20px] sm:rounded-[30px] overflow-hidden border border-gray-200 hover:shadow-lg"
                                >
                                    <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[45%]">
                                        <img
                                            className="w-full h-full object-cover object-center"
                                            src={car.images[0] || ""}
                                            alt={car.brand}
                                        />
                                    </div>

                                    <div className="h-[35px] sm:h-[40px] w-[120px] sm:w-[150px] flex items-center justify-center ml-4 sm:ml-5 md:ml-[20px] mt-4 sm:mt-6 md:mt-[30px] rounded-[50px] bg-[rgb(236,236,236)]">
                                        <p className="font-semibold text-xs sm:text-sm md:text-base">{car.carType} car</p>
                                    </div>
                                    
                                    <div className="flex ml-4 sm:ml-5 md:ml-[20px] mt-2 sm:mt-[10px] gap-2 sm:gap-[5px] flex-wrap">
                                        <h3 className="text-lg sm:text-xl md:text-[22px] font-semibold">{car.model}</h3>
                                        <h3 className="text-lg sm:text-xl md:text-[22px] font-semibold">{car.fueltype}</h3>
                                    </div>
                                    
                                    <div className="mt-4 sm:mt-6 md:mt-[30px]">
                                        <div className="flex ml-4 sm:ml-5 md:ml-[20px] relative items-center gap-2 sm:gap-[10px]">
                                            <img width="25px" className="w-5 sm:w-6 h-auto" src="./810008.png" alt="Doors" />
                                            <p className="text-sm sm:text-base md:text-[18px] text-gray-600">Doors</p>
                                            <p className="absolute text-sm sm:text-base md:text-[18px] text-gray-600 right-4 sm:right-5 md:right-[20px]">
                                                {car.doors}
                                            </p>
                                        </div>
                                        <div className="flex ml-2 sm:ml-[10px] relative mt-2 sm:mt-[10px] items-center gap-2 sm:gap-[10px]">
                                            <img
                                                width="40px"
                                                className="w-8 sm:w-10 h-auto"
                                                src="/Screenshot_2025-10-24_213042-removebg-preview.png"
                                                alt="Passenger"
                                            />
                                            <p className="text-base sm:text-lg md:text-[20px] text-gray-600">passenger</p>
                                            <p className="absolute text-sm sm:text-base md:text-[18px] text-gray-600 right-4 sm:right-5 md:right-[20px]">
                                                {car.pasenger}
                                            </p>
                                        </div>
                                    </div>

                                    <hr className="w-[90%] border-b border-gray-200 mt-4 sm:mt-6 md:mt-[20px] ml-4 sm:ml-5 md:ml-[20px]" />

                                    <div className="flex relative min-h-[70px] sm:min-h-[80px] md:h-[90px] items-center">
                                        <p className="text-xl sm:text-2xl md:text-[25px] font-semibold ml-4 sm:ml-5 md:ml-[20px] mb-2 sm:mb-[10px]">
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
                            <div className="col-span-full text-center py-12">
                                <p className="text-lg sm:text-xl text-gray-600">No results found</p>
                            </div>
                        )}
                    </div>
                    
                    {pageCount > 1 && (
                        <ReactPaginate
                            previousLabel={
                                <button className="bg-[rgb(255,54,0)] mt-[2px] w-[45px] h-[45px] sm:w-[51px] sm:h-[51px] rounded-full hover:bg-black cursor-pointer transform pl-[4px] sm:pl-[5px] transition-all duration-[500ms] rotate-180 flex items-center justify-center">
                                    <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                                        <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                                    </svg>
                                </button>
                            }
                            nextLabel={
                                <button className="bg-[rgb(255,54,0)] mt-[2px] w-[45px] h-[45px] sm:w-[51px] sm:h-[51px] rounded-full hover:bg-black cursor-pointer transform pl-[4px] sm:pl-[5px] transition-all duration-[500ms] flex items-center justify-center">
                                    <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                                        <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                                    </svg>
                                </button>
                            }
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            containerClassName={"flex flex-wrap gap-2 justify-center mt-6 sm:mt-8 md:mt-10"}
                            pageClassName={"w-[40px] sm:w-[45px] md:w-[50px] flex justify-center items-center h-[40px] sm:h-[45px] md:h-[50px] bg-[rgb(255,54,0)] text-white text-base sm:text-lg md:text-[20px] font-bold rounded-full cursor-pointer transition-all hover:opacity-90"}
                            previousClassName={"px-2 sm:px-3 py-1 rounded cursor-pointer"}
                            nextClassName={"px-2 sm:px-3 py-1 rounded cursor-pointer"}
                            activeClassName={"bg-black text-white"}
                        />
                    )}
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default CarsPage;
