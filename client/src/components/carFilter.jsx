import { useEffect, useState } from "react";
import { useCars } from "../contexts/CarsContext";

const CarFilter = () => {
    const { cars, getCars } = useCars();
    const [filters, setFilters] = useState({
        brand: "",
        model: "",
        carType: "",
        minYear: "",
        maxYear: "",
        minPrice: "",
        maxPrice: "",
    });
    const [carTypes, setCarTypes] = useState([]);
    const [filteredCarTypes, setFilteredCarTypes] = useState([]);
    const [years, setYears] = useState([]);
    const [prices, setPrices] = useState([]);
    const [filteredModels, setFilteredModels] = useState([]);

    useEffect(() => {
        if (filters.brand) {
            const types = cars
                .filter(car => car.brand === filters.brand)
                .map(car => car.carType);
            setFilteredCarTypes([...new Set(types)]);
        } else {
            const types = cars.map(car => car.carType);
            setFilteredCarTypes([...new Set(types)]);
        }
    }, [filters.brand, cars]);

    useEffect(() => {
        const uniqueYears = [...new Set(cars.map(car => car.year))];
        setYears(uniqueYears);
    }, [cars]);

    useEffect(() => {
        const uniquePrices = [...new Set(cars.map(car => car.pricePerDay))];
        setPrices(uniquePrices);
    }, [cars]);

    const handleFilter = () => {
        getCars(filters);
    };

    const handleRefresh = () => {
        setFilters({
            brand: "",
            model: "",
            carType: "",
            minYear: "",
            maxYear: "",
            minPrice: "",
            maxPrice: "",
        });
        getCars({});
    };

    return (
        <div className="w-full flex flex-col items-center bg-[rgba(250,250,250,1)] p-4 sm:p-6 md:p-8 rounded-[20px] sm:rounded-[30px]">
            <select 
                className="shadow-[0_4px_6px_-1px_rgba(107,114,128,0.5)] hover:scale-[1.02] transition-all duration-200 cursor-pointer outline-none w-full pl-3 sm:pl-[10px] text-sm sm:text-base md:text-[18px] rounded-[7px] mt-4 sm:mt-6 md:mt-[30px] h-[45px] sm:h-[50px] md:h-[55px] border border-gray-200 focus:border-[rgb(255,54,0)]"
                value={filters.brand}
                onChange={(e) => {
                    const brand = e.target.value;
                    setFilters({ ...filters, brand, model: "" });
                    const models = cars
                        .filter(car => car.brand === brand)
                        .map(car => car.model);
                    setFilteredModels([...new Set(models)]);
                }}
            >
                <option value="">All Brands</option>
                {[...new Set(cars.map(car => car.brand))].map(b => (
                    <option key={b} value={b}>{b}</option>
                ))}
            </select>

            <select 
                className="shadow-[0_4px_6px_-1px_rgba(107,114,128,0.5)] hover:scale-[1.02] transition-all duration-200 cursor-pointer outline-none w-full pl-3 sm:pl-[10px] text-sm sm:text-base md:text-[18px] rounded-[7px] mt-4 sm:mt-5 md:mt-[20px] h-[45px] sm:h-[50px] md:h-[55px] border border-gray-200 focus:border-[rgb(255,54,0)]"
                value={filters.model}
                onChange={(e) => setFilters({ ...filters, model: e.target.value })}
            >
                <option value="">All Models</option>
                {filteredModels.map(m => (
                    <option key={m} value={m}>{m}</option>
                ))}
            </select>

            <select 
                className="shadow-[0_4px_6px_-1px_rgba(107,114,128,0.5)] hover:scale-[1.02] transition-all duration-200 outline-none w-full pl-3 sm:pl-[10px] text-sm sm:text-base md:text-[18px] rounded-[7px] mt-4 sm:mt-5 md:mt-[20px] h-[45px] sm:h-[50px] md:h-[55px] border border-gray-200 focus:border-[rgb(255,54,0)]"
                value={filters.carType}
                onChange={(e) => setFilters({ ...filters, carType: e.target.value })}
            >
                <option value="">All Car Types</option>
                {filteredCarTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>

            <div className="w-full h-[2px] rounded-[7px] bg-gray-200 shadow-[0_8px_10px_-4px_rgba(107,116,128,0.50)] mt-4 sm:mt-5 md:mt-6"></div>

            <div className="flex gap-3 w-full mt-4 sm:mt-6 md:mt-[30px]">
                <select
                    value={filters.minYear}
                    onChange={(e) => setFilters({ ...filters, minYear: e.target.value })}
                    className="shadow-[0_4px_6px_-1px_rgba(107,114,128,0.5)] hover:scale-[1.02] transition-all duration-200 outline-none rounded-[9px] p-2 sm:p-3 w-[48%] text-sm sm:text-base border border-gray-200 focus:border-[rgb(255,54,0)]"
                >
                    <option value="">Min Year</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <select
                    value={filters.maxYear}
                    onChange={(e) => setFilters({ ...filters, maxYear: e.target.value })}
                    className="shadow-[0_4px_6px_-1px_rgba(107,114,128,0.5)] hover:scale-[1.02] transition-all duration-200 outline-none rounded-[9px] p-2 sm:p-3 w-[48%] text-sm sm:text-base border border-gray-200 focus:border-[rgb(255,54,0)]"
                >
                    <option value="">Max Year</option>
                    {years
                        .filter(year => !filters.minYear || year >= filters.minYear)
                        .map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))
                    }
                </select>
            </div>

            <div className="flex gap-3 w-full mt-4 sm:mt-5 md:mt-[20px]">
                <select
                    value={filters.minPrice}
                    onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    className="shadow-[0_4px_6px_-1px_rgba(107,114,128,0.5)] hover:scale-[1.02] transition-all duration-200 outline-none rounded-[9px] p-2 sm:p-3 w-[48%] text-sm sm:text-base border border-gray-200 focus:border-[rgb(255,54,0)]"
                >
                    <option value="">Min Price</option>
                    {prices.map(price => (
                        <option key={price} value={price}>{price}</option>
                    ))}
                </select>

                <select
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    className="shadow-[0_4px_6px_-1px_rgba(107,114,128,0.5)] hover:scale-[1.02] transition-all duration-200 outline-none rounded-[9px] p-2 sm:p-3 w-[48%] text-sm sm:text-base border border-gray-200 focus:border-[rgb(255,54,0)]"
                >
                    <option value="">Max Price</option>
                    {prices
                        .filter(price => !filters.minPrice || price >= filters.minPrice)
                        .map(price => (
                            <option key={price} value={price}>{price}</option>
                        ))
                    }
                </select>
            </div>

            <div className="w-full h-[2px] rounded-[7px] bg-gray-200 shadow-[0_8px_10px_-4px_rgba(107,116,128,0.50)] mt-4 sm:mt-5 md:mt-6"></div>

            <div className="flex gap-3 w-full mt-4 sm:mt-6 md:mt-[30px]">
                <button 
                    className="shadow-[0_4px_6px_-1px_rgba(107,114,128,0.5)] hover:scale-[1.02] transition-all duration-200 bg-[rgb(255,54,0)] outline-none text-white rounded-[9px] p-2 sm:p-3 w-[48%] text-sm sm:text-base font-semibold" 
                    onClick={handleFilter}
                >
                    Search
                </button>
                <button 
                    className="shadow-[0_4px_6px_-1px_rgba(107,114,128,0.5)] hover:scale-[1.02] transition-all duration-200 outline-none text-black bg-gray-100 rounded-[9px] p-2 sm:p-3 w-[48%] text-sm sm:text-base font-semibold" 
                    onClick={handleRefresh}
                >
                    Refresh
                </button>
            </div>
        </div>
    );
};

export default CarFilter;
