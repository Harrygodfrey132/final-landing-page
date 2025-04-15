"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};
export default function Section7() {
    return (
        <>
            {/*seo-agency home section 7*/}
            <section className="seo-agency-home-section-7 position-relative overflow-hidden py-120">
                <div className="container position-relative z-1">
                    <div className="row flex-wrap align-items-end">
                        <div className="col-lg-5">
                            <p className="text-dark btn-text rounded-3 border border-primary px-2 py-1 bg-white d-inline-block">testimonials</p>
                            <h2 className="text-dark mb-0 d-block text-anime-style-2">
                                Loved by <span className="text-primary">our customers</span>
                            </h2>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 ms-lg-auto text-center mt-3 mt-lg-0">
                            <div className="position-relative mx-auto">
                                <div className="d-inline-flex border h-100 d-flex align-items-center gap-1 rounded-pill mx-auto bg-white position-relative z-1">
                                    <div className="swiper-button-prev mt-0 position-relative border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1382)">
                                                <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="swiper-pagination position-relative top-0 bottom-0 mb-1" />
                                    <div className="swiper-button-next mt-0 position-relative border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1381)">
                                                <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <span className="border-top position-absolute top-50 start-50 translate-middle w-100 z-0" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-8">
                        {/* Swiper */}
                        <Swiper {...swiperOptions} className="swiper slider-3">
                            <div className="swiper-wrapper z-1">
                                <SwiperSlide>
                                    <div className="card-testimonial rounded-4 p-5 mb-lg-0 mb-5" data-aos="fade-up" data-aos-delay={0}>
                                        <div className="founder d-flex justify-content-between border-bottom pb-5">
                                            <div className="d-flex align-items-center">
                                                <div className="text-start">
                                                    <Link href="#">
                                                        <span className="btn-text">Isabel Heggie</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Parent of iGCSE Student</p>
                                                </div>
                                            </div>
                                            <div className="quote icon-shape icon-50 bg-white rounded-circle">
                                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={22} height={16} viewBox="0 0 22 16" fill="none">
                                                    <g clipPath="url(#clip0_349_1387)">
                                                        <path d="M0.0605469 -0.0449219V15.9551L8.31055 7.95508V-0.0449219H0.0605469Z" fill="#0D6EFD" />
                                                        <path d="M13.8105 -0.0449219V15.9551L22.0605 7.95508V-0.0449219H13.8105Z" fill="#0D6EFD" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <h6 className="mb-0 mt-5">" The Degree Gap helped our son enormously with his iGCSE prep, particularly in Maths and Economics. He was patient, fun and engaging - just what we needed. <span className="text-primary">Highly recommended</span>. "</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-testimonial rounded-4 p-5 mb-lg-0 mb-5" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="founder d-flex justify-content-between border-bottom pb-5">
                                            <div className="d-flex align-items-center">
                                                <div className="text-start">
                                                    <Link href="#">
                                                        <span className="btn-text">Nicolai Nissen</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">A-level student</p>
                                                </div>
                                            </div>
                                            <div className="quote icon-shape icon-50 bg-white rounded-circle">
                                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={22} height={16} viewBox="0 0 22 16" fill="none">
                                                    <g clipPath="url(#clip0_349_1387)">
                                                        <path d="M0.0605469 -0.0449219V15.9551L8.31055 7.95508V-0.0449219H0.0605469Z" fill="#0D6EFD" />
                                                        <path d="M13.8105 -0.0449219V15.9551L22.0605 7.95508V-0.0449219H13.8105Z" fill="#0D6EFD" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <h6 className="mb-0 mt-5">" Had troubles connecting with tutors until I met The Degree Gap, helped me understand the curriculum and theories in a way that stuck with me, also made each session feel calm and relaxing. <span className="text-primary">Highly recommend</span> "</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-testimonial rounded-4 p-5 mb-lg-0 mb-5" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="founder d-flex justify-content-between border-bottom pb-5">
                                            <div className="d-flex align-items-center">
                                                <div className="text-start">
                                                    <Link href="#">
                                                        <span className="btn-text">Theresa McIntyre</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Parent of GCSE student</p>
                                                </div>
                                            </div>
                                            <div className="quote icon-shape icon-50 bg-white rounded-circle">
                                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={22} height={16} viewBox="0 0 22 16" fill="none">
                                                    <g clipPath="url(#clip0_349_1387)">
                                                        <path d="M0.0605469 -0.0449219V15.9551L8.31055 7.95508V-0.0449219H0.0605469Z" fill="#0D6EFD" />
                                                        <path d="M13.8105 -0.0449219V15.9551L22.0605 7.95508V-0.0449219H13.8105Z" fill="#0D6EFD" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <h6 className="mb-0 mt-5">"Harry and Joe were extremely helpful with a <span className="text-primary">wealth of knowledge</span> and contacts that helped my son to follow the right path."</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-testimonial rounded-4 p-5 mb-lg-0 mb-5" data-aos="fade-up" data-aos-delay={600}>
                                        <div className="founder d-flex justify-content-between border-bottom pb-5">
                                            <div className="d-flex align-items-center">
                                                <div className="text-start">
                                                    <Link href="#">
                                                        <span className="btn-text">Alex Allenby</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">A-level student</p>
                                                </div>
                                            </div>
                                            <div className="quote icon-shape icon-50 bg-white rounded-circle">
                                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={22} height={16} viewBox="0 0 22 16" fill="none">
                                                    <g clipPath="url(#clip0_349_1387)">
                                                        <path d="M0.0605469 -0.0449219V15.9551L8.31055 7.95508V-0.0449219H0.0605469Z" fill="#0D6EFD" />
                                                        <path d="M13.8105 -0.0449219V15.9551L22.0605 7.95508V-0.0449219H13.8105Z" fill="#0D6EFD" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <h6 className="mb-0 mt-5">" <span className="text-primary"> Can't recommend The Degree Gap highly enough.</span>  Quick and helpful responses from Harry. He immediately matched me with a very competent tutor. "</h6>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                        {/* Swiper JS */}
                    </div>
                    <div className="row text-center justify-content-center mt-7">
                        <h6 className="text-primary mb-0 text-anime-style-2">
                        Hundreds of happy customers <span className="text-dark"> have trusted us.</span>
                        </h6>
                        <div>
                            <Link href="https://www.cal.com/thedegreegap/15min" className="btn btn-warning mt-5" data-aos="zoom-in" data-aos-delay={400}>
                                <span>Book a call now!</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_816_117)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#292929" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
