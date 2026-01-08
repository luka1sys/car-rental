import ChooseUs from "../components/ChooseU";
import ExecutivePartners from "../components/ExecutivePartners";
import Footer from "../components/Footer";
import WatchOurVideo from "../components/WatchOurVideo";
import About from "./About";

const AboutPage = () => {
    return (
        <>
            <div className="w-full flex justify-center mt-4">
                <div
                    className="
            relative 
            w-[95%] 
            h-[260px] 
            sm:h-[320px] 
            md:h-[400px] 
            lg:h-[470px]
            rounded-[20px] 
            sm:rounded-[30px] 
            lg:rounded-[50px]
            overflow-hidden
          "
                    style={{
                        backgroundImage: "url('/imgi_14_page-header-bg.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center gap-3 sm:gap-4">
                        <h2
                            className="
                text-white 
                font-semibold
                text-[36px]
                sm:text-[48px]
                md:text-[64px]
                lg:text-[80px]
              "
                        >
                            About Us
                        </h2>

                        <p
                            className="
                text-white 
                font-semibold
                text-[14px]
                sm:text-[16px]
                md:text-[18px]
                lg:text-[20px]
              "
                        >
                            Home /
                            <span className="text-[rgb(255,54,0)]">
                                About Us
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <About />
            <ExecutivePartners/>
            <WatchOurVideo/>
            <ChooseUs/>
            <Footer/>
        </>
    );
};


export default AboutPage;