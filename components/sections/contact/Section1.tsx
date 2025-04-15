import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*seo-agency contact section 1*/}
            <section className="seo-agency-contact-section-1 position-relative overflow-hidden py-80">
                <div className="container">
                    <div className="row align-items-end mb-80">
                        <div className="col-lg-6">
                            <h2 className="mt-3 text-anime-style-3">Get in touch with us We are here to assist you</h2>
                            <p className="mb-0 text-anime-style-1">Feel free to reach out to us with any questions or concerns - our team is always here and ready to provide the support you need!</p>
                        </div>
                        <div className="col-lg-3 ms-lg-auto text-lg-end">
                            <Link href="#" className="btn btn-dark mt-lg-0 mt-5">
                                <span>Meet Our Team</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_1565_3008)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-8 col-12">
                            <form action="#" className="input-group mb-3 position-relative wow img-custom-anim-left">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="username" className="fs-7 fw-bold mb-3">
                                            Full name
                                        </label>
                                        <input type="text" className="py-3 form-control username" name="name" placeholder="Enter here" id="username" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phone" className="fs-7 fw-bold mb-3">
                                            Phone number
                                        </label>
                                        <input type="text" className="py-3 form-control email" name="email" placeholder="Enter here" id="email" />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <label htmlFor="message" className="fs-7 fw-bold mb-3">
                                            Message
                                        </label>
                                        <textarea name="message" id="message" cols={30} rows={8} className="py-3 form-control website" placeholder="Enter here" defaultValue={"Hello"} />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <button aria-label="get in touch" className="btn btn-primary" type="submit" data-aos="fade-zoom-in" data-aos-delay={100}>
                                            <span>get in touch</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_886_362)">
                                                    <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 ms-lg-auto mt-lg-0 mt-5">
                            <div className="border p-5 mb-5" data-aos="fade-left" data-aos-delay={200}>
                                <h6 className="fs-6 fw-semibold">Head office</h6>
                                <Link href="#" className="d-flex gap-2">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <g opacity="0.4">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.05991 4.86069C9.34032 1.58029 14.6589 1.58029 17.9393 4.86069C21.2197 8.1411 21.2197 13.4597 17.9393 16.7401L11.9996 22.6798L6.05991 16.7401C2.77951 13.4597 2.77951 8.1411 6.05991 4.86069ZM11.9996 13.2004C13.3251 13.2004 14.3996 12.1259 14.3996 10.8004C14.3996 9.47491 13.3251 8.40039 11.9996 8.40039C10.6741 8.40039 9.59961 9.47491 9.59961 10.8004C9.59961 12.1259 10.6741 13.2004 11.9996 13.2004Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                    <p>123 Main Street, Springfield, Illinois, 62701, USA</p>
                                </Link>
                                <Link href="#" className="d-flex gap-2">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <g opacity="0.4">
                                                <path d="M2.40439 7.06105L12.0003 11.859L21.5964 7.06099C21.524 5.80056 20.479 4.80078 19.2004 4.80078H4.80039C3.52181 4.80078 2.47675 5.8006 2.40439 7.06105Z" fill="#292929" />
                                                <path d="M21.6004 9.74227L12.0003 14.5423L2.40039 9.74233V16.8008C2.40039 18.1263 3.47491 19.2008 4.80039 19.2008H19.2004C20.5259 19.2008 21.6004 18.1263 21.6004 16.8008V9.74227Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                    <p>admin@thedegreegap.com</p>
                                </Link>
                                <div className="socials rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
                                    <p className="text-dark mb-0">Follow us:</p>
                                    <ul className="list-unstyled d-flex mb-0">
                                        <li className="ms-3">
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="ms-3">
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="ms-3">
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="ms-3">
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border p-5 mb-5" data-aos="fade-left" data-aos-delay={400}>
                                <h6 className="fs-6 fw-semibold">Production branch</h6>
                                <Link href="#" className="d-flex gap-2">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <g opacity="0.4">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.05991 4.86069C9.34032 1.58029 14.6589 1.58029 17.9393 4.86069C21.2197 8.1411 21.2197 13.4597 17.9393 16.7401L11.9996 22.6798L6.05991 16.7401C2.77951 13.4597 2.77951 8.1411 6.05991 4.86069ZM11.9996 13.2004C13.3251 13.2004 14.3996 12.1259 14.3996 10.8004C14.3996 9.47491 13.3251 8.40039 11.9996 8.40039C10.6741 8.40039 9.59961 9.47491 9.59961 10.8004C9.59961 12.1259 10.6741 13.2004 11.9996 13.2004Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                    <p>456 Elm Avenue, Denver, Colorado, 80203, USA</p>
                                </Link>
                                <Link href="#" className="d-flex gap-2">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <g opacity="0.4">
                                                <path d="M2.40439 7.06105L12.0003 11.859L21.5964 7.06099C21.524 5.80056 20.479 4.80078 19.2004 4.80078H4.80039C3.52181 4.80078 2.47675 5.8006 2.40439 7.06105Z" fill="#292929" />
                                                <path d="M21.6004 9.74227L12.0003 14.5423L2.40039 9.74233V16.8008C2.40039 18.1263 3.47491 19.2008 4.80039 19.2008H19.2004C20.5259 19.2008 21.6004 18.1263 21.6004 16.8008V9.74227Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                    <p>admin@thedegreegap.com</p>
                                </Link>
                                <div className="socials rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
                                    <p className="text-dark mb-0">Follow us:</p>
                                    <ul className="list-unstyled d-flex mb-0">
                                        <li className="ms-3">
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="ms-3">
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="ms-3">
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="ms-3">
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid wow img-custom-anim-top">
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279991725!2d-74.1444877707482!3d40.697631233381586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1729152035449!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </>
    );
}
