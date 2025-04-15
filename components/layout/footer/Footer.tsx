import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer>
                <div className="section-footer-2 position-relative overflow-hidden bg-white">
                    <div className="container-fluid">
                        <div className="container position-relative z-2">
                            <div className="row py-120">
                                <div className="col-12">
                                    <div className="position-relative bg-light rounded-3 overflow-hidden">
                                        <div className="d-flex flex-column flex-lg-row align-items-center p-md-6 p-4 position-relative z-1">
                                            <h5 className="text-black position-relative z-4 text-anime-style-3">
                                                We help hundreds of students <br />
                                                get their target GCSE and A-level grades.
                                            </h5>
                                            <Link href="https://www.cal.com/thedegreegap/15min" className="btn btn-primary mt-4 ms-lg-auto">
                                                <span>SCHEDULE A CALL</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <g clipPath="url(#clip0_828_193)">
                                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="currentColor" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pb-120 g-4">
                                <div className="col-lg-3 col-md-6 col-6">
                                    <h6 className="text-dark pb-3">Company</h6>
                                    <div className="d-flex flex-column align-items-start">

                                        <Link href="https://www.thedegreegap.com/Safeguarding">
                                            <p className="hover-effect-1 text-dark">Safeguarding</p>
                                        </Link>
                                        <Link href="https://www.thedegreegap.com/terms-and-conditions">
                                            <p className="hover-effect-1 text-dark">Terms &amp; Conditions</p>
                                        </Link>
                                        <Link href="https://www.thedegreegap.com/privacy-policy">
                                            <p className="hover-effect-1 text-dark ">Pirvacy Policy</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <h6 className="text-dark pb-3">Help</h6>
                                    <div className="d-flex flex-column align-items-start">
                                        <Link href="/#pricing">
                                            <p className="hover-effect-1 text-dark">Pricing</p>
                                        </Link>
                                        <Link href="https://www.cal.com/thedegreegap/15min">
                                            <p className="hover-effect-1 text-dark">Book a call</p>
                                        </Link>
                                        <Link href="tel:+447986975776">
                                            <p className="hover-effect-1 text-dark">Call us now!</p>
                                        </Link>
                                        <Link href="https://www.thedegreegap.com/teachers">
                                            <p className="hover-effect-1 text-dark mb-0">Explore Tutors</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <h6 className="text-dark pb-3">Get in touch</h6>
                                    <Link href="#" className="d-flex gap-2">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <g opacity="0.4">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.0604 4.86069C9.3408 1.58029 14.6594 1.58029 17.9398 4.86069C21.2202 8.1411 21.2202 13.4597 17.9398 16.7401L12.0001 22.6798L6.0604 16.7401C2.78 13.4597 2.78 8.1411 6.0604 4.86069ZM12.0001 13.2004C13.3256 13.2004 14.4001 12.1259 14.4001 10.8004C14.4001 9.47491 13.3256 8.40039 12.0001 8.40039C10.6746 8.40039 9.6001 9.47491 9.6001 10.8004C9.6001 12.1259 10.6746 13.2004 12.0001 13.2004Z" fill="black" />
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-dark">07859965776</p>
                                    </Link>
                                    <Link href="#" className="d-flex gap-2">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <g opacity="0.4">
                                                    <path d="M2.4039 7.06105L11.9998 11.859L21.5959 7.06099C21.5235 5.80056 20.4785 4.80078 19.1999 4.80078H4.7999C3.52132 4.80078 2.47626 5.8006 2.4039 7.06105Z" fill="black" />
                                                    <path d="M21.5999 9.74227L11.9998 14.5423L2.3999 9.74233V16.8008C2.3999 18.1263 3.47442 19.2008 4.7999 19.2008H19.1999C20.5254 19.2008 21.5999 18.1263 21.5999 16.8008V9.74227Z" fill="black" />
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-dark">admin@thedegreegap.com</p>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
