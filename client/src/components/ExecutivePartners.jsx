import React from 'react';

const ExecutivePartners = () => {
    const partners = [
        { id: 1, logo: "/imgi_5_icon-partners-1.svg", alt: "Logoipsum 1" },
        { id: 2, logo: "/imgi_6_icon-partners-2.svg", alt: "Logoipsum 2" },
        { id: 3, logo: "/imgi_7_icon-partners-3.svg", alt: "Logoipsum 3" },
        { id: 4, logo: "/imgi_8_icon-partners-4.svg", alt: "Logoipsum 4" },
        { id: 5, logo: "/imgi_7_icon-partners-3.svg", alt: "Logoipsum 5" },
        { id: 6, logo: "/imgi_8_icon-partners-4.svg", alt: "Logoipsum 6" },
        { id: 7, logo: "/imgi_5_icon-partners-1.svg", alt: "Logoipsum 7" },
        { id: 8, logo: "/imgi_6_icon-partners-2.svg", alt: "Logoipsum 8" },
    ];

    return (
        /* მთავარი კონტეინერი: დაემატა rounded-3xl და max-w-5xl (უფრო ვიწროა) */
        <section className="bg-[#FFF9F6] py-20 px-4 font-sans text-center">

            <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-orange-600 text-xl">✱</span>
                <span className="text-orange-600 font-medium uppercase tracking-wider text-sm">
                    Executive Partners
                </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black mb-14">
                Trusted by leading brands
            </h2>

            {/* ლოგოების ბადე: ბარათებს მოემატა ზომა (py-12) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {partners.map((partner) => (
                    <div
                        key={partner.id}
                        className="bg-white py-12 px-3 rounded-3xl flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-orange-100"
                    >
                        <img
                            src={partner.logo}
                            alt={partner.alt}
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExecutivePartners;