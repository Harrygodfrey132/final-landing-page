import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*seo-agency home section 8*/}
            <section className="seo-agency-home-section-8 position-relative overflow-hidden py-120 bg-light-2">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-5 mb-5">
                            <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={25} height={40} viewBox="0 0 25 40" fill="none">
                                <path d="M12.5001 40C15.1553 40 17.3078 37.9013 17.3078 35.3125C17.3078 32.7237 15.1553 30.625 12.5001 30.625C9.84486 30.625 7.69238 32.7237 7.69238 35.3125C7.69238 37.9013 9.84486 40 12.5001 40Z" fill="#0D6EFD" />
                                <path d="M12.5 0C5.60745 0 0 5.46727 0 12.1875V13.3594H9.61539V12.1875C9.61539 10.6366 10.9094 9.375 12.5 9.375C14.0906 9.375 15.3846 10.6366 15.3846 12.1875C15.3846 13.0139 15.0126 13.7961 14.3638 14.3337L7.69231 19.8639V28.2812H17.3077V24.1986L20.591 21.477C23.393 19.1555 25 15.7698 25 12.1875C25 5.46727 19.3925 0 12.5 0Z" fill="#0D6EFD" />
                            </svg>
                            <h3 className="text-dark my-3">
                            We'll show you exactly how we help students hit their target grades.<br />
                            </h3>
                            <p className="text-anime-style-1">Fill in this short form and one of our experienced tutors will be in touch within 24 hours to discuss how we can help. No commitment — just honest advice and a clear plan forward. OR just call us now!</p>
                            <div>
                                <Link href="tel:+447986975776" className="btn btn-outline-dark mt-5 d-flex align-items-center" style={{ backgroundColor: 'gold', color: 'black', borderColor: 'gold' }}>
                                    <span style={{ color: 'black' }}>Call us now</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" className="ms-2">
                                        <g clipPath="url(#clip0_816_117)">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="black" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <form action="https://formspree.io/f/mldelvzl" method="POST" className="input-group mb-3 mt-4 position-relative">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="username2" className="text-sm-medium">
                                            full name
                                        </label>
                                        <input type="text" className="py-3 form-control username rounded-4 border-dark" name="name" placeholder="Enter here" id="username2" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email2" className="text-sm-medium">
                                            phone number
                                        </label>
                                        <input type="tel" className="py-3 form-control phone rounded-4 border-dark" name="phone" placeholder="Enter here" id="email2" required />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <label htmlFor="message2" className="text-sm-medium">
                                            message
                                        </label>
                                        <textarea name="message" id="message2" cols={30} rows={8} className="py-3 form-control website rounded-4 border-dark" placeholder="Enter here" required />
                                    </div>  
                                    <div className="col-12 mt-5">
                                        <button aria-label="get in touch" className="btn btn-primary d-flex align-items-center" type="submit" style={{ backgroundColor: 'gold', color: 'black', borderColor: 'gold' }}>
                                            <span style={{ color: 'black' }}>get in touch</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" className="ms-2">
                                                <g clipPath="url(#clip0_886_362)">
                                                    <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="black" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
