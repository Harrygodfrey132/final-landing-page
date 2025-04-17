'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Section1() {
    const [isHovered, setIsHovered] = useState(false);
    const subjects = [
        "Master GCSE Maths with Expert Guidance -> ",
        "Excel in GCSE English Literature & Language -> ",
        "Ace Your A-level Physics Journey -> ",
        "Transform Your GCSE Science Understanding -> ",
        "Conquer A-level Chemistry Together -> ",
        "Discover GCSE History Like Never Before -> ",
        "Succeed in A-level Biology -> ",
        "Navigate GCSE Geography with Confidence -> ",
        "Unlock A-level Economics Success -> ",
        "Level Up Your GCSE Computer Science Skills -> "
    ];
    
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prevIndex) => (prevIndex + 1) % subjects.length);
        }, 3000); // Change every 3 seconds
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            {/*seo-agency home section 1*/}
            <section className="seo-agency-home-section-1 position-relative overflow-hidden py-lg-130 py-8 bg-1">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <h1 className="text-dark mt-2 display-1 fw-bold" style={{ fontSize: '4rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                                GCSE and A-level Tutoring <span 
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    style={{ 
                                        color: '#32CD32',
                                        cursor: 'pointer',
                                        fontWeight: '600'
                                    }}
                                >Specialists</span>
                            </h1>
                            <ul className="list-unstyled">
                                <li className="mb-2">✓ Pay-As-You-Go, Zero Commitments</li>
                                <li className="mb-2">✓ 50+ Expert and Qualified Tutors</li>
                                <li className="mb-2">✓ All Subjects covered under the GCSE and A-level syllabus</li>
                                <li className="mb-2">✓ Custom built tutoring platform</li>
                            </ul>
                            <div className="mb-3 mt-4 position-relative">
                                <Link href="tel:+447986965776" className="btn fs-7 fw-bold" style={{ backgroundColor: '#FFD700', color: '#000', border: '1px solid #FFD700', textDecoration: 'none' }}>
                                    Call us today
                                </Link>
                            </div>
                            <div className="d-flex flex-wrap mt-8 align-items-center">
                                <div className="d-flex align-items-center pe-5">
                                    <div>
                                        <h6 className="text-dark mb-1">5/5</h6>
                                        <div className="d-flex star-group gap-1">
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center ms-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img className="icon-shape rounded-circle avatar-1" src="assets/imgs/pages/seo-agency/page-home/section-1/avatar-1.png" alt="Student Review" />
                                            <img className="icon-shape rounded-circle avatar-2" src="assets/imgs/pages/seo-agency/page-home/section-1/avatar-2.png" alt="Student Review" />
                                        </div>
                                        <div className="ms-3">
                                            <h6 className="mb-0">50+</h6>
                                            <p className="mb-0">5 Star Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 d-none d-lg-block">
                            <div className="p-4 rounded-4" style={{ 
                                border: '1px solid #800', 
                                background: 'rgba(136, 0, 0, 0.03)',
                                boxShadow: '0 10px 30px rgba(136, 0, 0, 0.1), 0 1px 8px rgba(136, 0, 0, 0.2)'
                            }}>
                                <div className="py-4 text-center">
                                    <h4 className="mb-3" style={{ color: '#000', fontWeight: '300' }}>Book a Free Consultation</h4>
                                    <p className="mb-0" style={{ fontSize: '0.95rem', color: '#000' }}>Get matched with an expert tutor within 24 hours.</p>
                                </div>
                                <form action="https://formspree.io/f/mldelvzl" method="POST" className="input-group mb-2 position-relative">
                                    <div className="row g-2">
                                        <div className="col-md-6">
                                            <label htmlFor="username" className="text-sm-medium fw-bold" style={{ color: '#000' }}>
                                                full name
                                            </label>
                                            <input type="text" className="py-2 form-control username rounded-4" name="name" placeholder="Enter here" id="username" style={{ border: '1px solid #800', background: 'rgba(255, 255, 255, 0.9)' }} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="phone" className="text-sm-medium fw-bold" style={{ color: '#000' }}>
                                                phone number
                                            </label>
                                            <input type="tel" className="py-2 form-control phone rounded-4" name="phone" placeholder="Enter here" id="phone" style={{ border: '1px solid #800', background: 'rgba(255, 255, 255, 0.9)' }} required />
                                        </div>
                                        <div className="col-12 mt-2">
                                            <label htmlFor="message" className="text-sm-medium fw-bold" style={{ color: '#000' }}>
                                                message
                                            </label>
                                            <textarea name="message" id="message" cols={30} rows={4} className="py-2 form-control website rounded-4" placeholder="Enter here" style={{ border: '1px solid #800', background: 'rgba(255, 255, 255, 0.9)' }} required />
                                        </div>  
                                        <div className="col-12 mt-3">
                                            <Link href="https://cal.com/astrax" className="btn d-flex align-items-center w-100 justify-content-center py-2" style={{ backgroundColor: '#FFD700', color: 'black', borderColor: '#FFD700', fontWeight: '600' }}>
                                                <span style={{ color: 'black' }}>get in touch</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" className="ms-2">
                                                    <g clipPath="url(#clip0_886_362)">
                                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="black" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
