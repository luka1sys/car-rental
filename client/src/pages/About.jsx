import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className='w-full min-h-screen lg:h-auto flex flex-col lg:flex-row items-center justify-center py-20 px-4 md:px-10 gap-10 overflow-hidden'>

            {/* მარცხენა სექცია - სურათების ბლოკი (Responsive კონტეინერით) */}
            <section className='relative w-full mr-[100px] lg:w-1/2 flex justify-center items-center min-h-[500px] md:min-h-[700px]'>
                <div className="relative">
                    {/* დიდი სურათის ჩარჩო */}
                    <div className='absolute -top-4 -left-4 w-[280px] h-[400px] md:w-[380px] md:h-[550px] lg:w-[430px] lg:h-[600px] border border-gray-300 rounded-[300px]'></div>

                    {/* მთავარი დიდი სურათი */}
                    <div
                        style={{
                            backgroundImage: `url("https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/about-img-1.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="relative z-10 w-[280px] h-[400px] md:w-[380px] md:h-[550px] lg:w-[430px] lg:h-[600px] rounded-[300px] overflow-hidden">
                    </div>

                    {/* პატარა სურათის ბლოკი */}
                    <div className="absolute -bottom-10 -right-16 md:-right-32 lg:-bottom-20 lg:right-[-120px] z-20">
                        {/* ^ აქ შევცვალე: -right-16, md:-right-32 და lg:right-[-120px] უფრო მეტად მარჯვნივ გასაწევად */}

                        {/* პატარა სურათის ჩარჩო */}
                        <div className='absolute -top-3 -left-3 w-[200px] h-[280px] md:w-[300px] md:h-[420px] lg:w-[360px] lg:h-[500px] border border-gray-300 rounded-[300px]'></div>

                        <div
                            style={{
                                backgroundImage: `url("https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/about-img-2.jpg")`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="relative w-[200px] h-[280px] md:w-[300px] md:h-[420px] lg:w-[360px] lg:h-[500px] rounded-[300px] border-8 border-white overflow-hidden shadow-xl">
                        </div>
                    </div>
                </div>

                {/* დეკორატიული აიქონები */}
                <img className='absolute top-10 right-0 md:right-10 w-12 md:w-20 animate-pulse' src="/images__4_-removebg-preview (1).png" alt="" />
                <img className='absolute bottom-0 left-0 md:left-10 w-20 md:w-32' src="./images__6_-removebg-preview.png" alt="" />
            </section>

            {/* მარჯვენა სექცია - ტექსტური ბლოკი (შენი ორიგინალი ფონტებით) */}
            <section className='w-full lg:w-1/2   flex flex-col'>

                {/* About Us Badge */}
                <p className='flex items-center gap-[10px] text-[rgb(255,54,0)] font-semibold text-[19px]'>
                    <img width="15px" className='mt-[8px]' src="/images__4_-removebg-preview (1).png" alt="" />
                    About Us
                </p>

                {/* სათაურები - 55px (დიდ ეკრანზე) */}
                <div className='w-full flex flex-col justify-end mt-[25px]'>
                    <h2 className='text-[35px] md:text-[55px] font-bold hometext6 animate-on-scroll leading-tight text-gray-900'>
                        Your trusted partner in
                    </h2>
                    <h2 className='text-[35px] md:text-[55px] font-bold hometext7 animate-on-scroll leading-tight text-[rgb(255,54,0)]'>
                        reliable car rental
                    </h2>
                </div>

                {/* აღწერა - 18px */}
                <div className='w-full lg:w-[90%] mt-[20px]'>
                    <p className='text-[18px] text-gray-600 hometext8 animate-on-scroll'>
                        Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor
                    </p>
                </div>

                {/* სერვისი 1 */}
                <div className='flex relative items-center border-b border-gray-300 w-full lg:w-[95%] mt-[20px] group h-[150px] hometext8 animate-on-scroll'>
                    <div className='mb-[50px] bg-[rgba(250,217,209,1)] mt-[20px] h-[70px] w-[70px] group-hover:bg-[rgba(254,69,36,1)] transition-all duration-[300ms] rounded-full opacity-70'></div>
                    <div className='flex flex-col ml-[30px] md:ml-[50px] w-[80%] gap-[10px]'>
                        <h2 className='text-[23px] font-semibold text-gray-800'>Easy Booking Process</h2>
                        <p className='text-[16px] md:text-[18px] text-gray-600'>We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                    </div>
                    <img className='absolute left-[6px] top-[30px]' width="90px" src="./images__5_-removebg-preview (3).png" alt="" />
                </div>

                {/* სერვისი 2 */}
                <div className='flex relative items-center group h-[150px] hometext8 animate-on-scroll'>
                    <div className='mb-[40px] bg-[rgba(250,217,209,1)] mt-[20px] h-[70px] w-[70px] group-hover:bg-[rgba(254,69,36,1)] transition-all duration-[300ms] rounded-full opacity-70'></div>
                    <div className='flex flex-col ml-[30px] md:ml-[50px] w-[80%] gap-[10px]'>
                        <h2 className='text-[23px] font-semibold text-gray-800'>Convenient Pick-Up & Return Process</h2>
                        <p className='text-[16px] md:text-[18px] text-gray-600'>We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                    </div>
                    <img className='absolute left-[6px] top-[30px]' width="90px" src="./car-insurance-concept-car-with-shield-icon-over-white-background-line-style-illustration-vector-removebg-preview.png" alt="" />
                </div>

                {/* ღილაკი - 19px */}
                <div className="group mt-[30px] flex rounded-[30px] hometext8 animate-on-scroll">
                    <button className="w-[140px] h-[53px] cursor-pointer rounded-[30px] bg-[rgb(255,54,0)] flex justify-center items-center text-white font-semibold text-[19px]">
                        <Link to="/contactus">
                            Contact Us
                        </Link>

                    </button>
                    <button className="bg-[rgb(255,54,0)] mt-[2px] w-[51px] h-[51px] rounded-full group-hover:bg-black cursor-pointer transform rotate-[-45deg] pl-[5px] group-hover:rotate-[0deg] transition-all duration-[500ms]">
                        <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="white" />
                        </svg>
                    </button>
                </div>

            </section>
        </section>
    );
}

export default About;