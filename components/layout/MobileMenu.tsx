"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: MobileMenuProps) {
    const [isAccordion, setIsAccordion] = useState<number | null>(null);
    const pathname = usePathname();

    const handleAccordion = (key: number) => {
        setIsAccordion((prevState) => (prevState === key ? null : key));
    };

    useEffect(() => {
        if (isMobileMenu) {
            handleMobileMenu();
        }
    }, [pathname]);

    return (
        <>
            {isMobileMenu && <div className="mobile-menu-overlay" onClick={handleMobileMenu} />}

            <div className={`mobile-header-active mobile-header-wrapper-style ${isMobileMenu ? "sidebar-visible" : ""}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-logo">
                        <Link className="d-flex align-items-center gap-2" href="/">
                            <Image src="/favicon.ico" alt="The Degree Gap Logo" width={50} height={50} />
                            <h5 className="mb-0" style={{ color: '#800' }}>The Degree Gap</h5>
                        </Link>
                        <div className={`burger-icon burger-icon-white border rounded-circle ${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
                            <span className="burger-icon-top" />
                            <span className="burger-icon-mid" />
                            <span className="burger-icon-bottom" />
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu ps-0">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.thedegreegap.com/teachers" target="_blank" rel="noopener noreferrer">Teachers</Link>
                                        </li>
                                        <li className="has-children">
                                            <span className="menu-expand" onClick={() => handleAccordion(1)}>
                                                <i className="arrow-small-down" />
                                            </span>
                                            <Link href="#">Subjects</Link>
                                            <ul className="sub-menu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
                                                <li>
                                                    <Link href="/services">GCSE Maths</Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.thedegreegap.com/teachers/languages/GCSE-English">GCSE English</Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.thedegreegap.com/teachers/languages/GCSE-Biology">GCSE Science</Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.thedegreegap.com/teachers/languages/A-Level-Maths">A-Level Maths</Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.thedegreegap.com/teachers">Other Subjects</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="https://www.thedegreegap.com/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link href="/customer">Reviews</Link>
                                        </li>
                                        <li>
                                            <hr className="my-2" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.8)', margin: '8px 0' }} />
                                        </li>
                                        <li>
                                            <Link href="/contact">Sign Up</Link>
                                        </li>
                                        <li>
                                            <Link href="/login">Sign In</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="tgmobile__menu-bottom mt-auto">
                        <div className="contact-info">
                            <ul className="list-wrap">
                                <li>
                                    <span className="opacity-50">Email:</span> <Link href="mailto:admin@thedegreegap.com">admin@thedegreegap.com</Link>
                                </li>
                                <li>
                                    <span className="opacity-50">Phone:</span> <Link href="tel:+447986975776">+447986975776</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .auth-buttons-container {
                    display: flex;
                    justify-content: space-between;
                    margin: 10px 15px;
                }
            `}</style>
        </>
    );
}
