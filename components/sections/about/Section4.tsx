import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*seo-agency-about section 4*/}
            <section className="seo-agency-about-section-4 position-relative pt-120 pb-150 bg-light">
                <div className="container">
                    <div className="text-center mb-80">
                        <p className="text-dark btn-text rounded-3 border border-primary px-2 py-1 bg-white d-inline-block">Working Process</p>
                        <h2 className="text-dark my-3 text-anime-style-3">How does it work</h2>
                        <p className="wow img-custom-anim-top mb-0">
                            As a company specializing in process transformation, we reimagine and <br />
                            redesign workflows for the digital age.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="accordion">
                                <div className="px-0 card collapse-custom rounded-0 mb-3" data-aos="fade-up" data-aos-delay={0}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse1">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Tailored Solutions</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse1" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We deliver measurable outcomes with strategies designed to improve rankings, increase traffic, and drive conversions.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom rounded-0 mb-3" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse2">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Proven Results</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse2" className="collapse show" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We deliver measurable outcomes with strategies designed to improve rankings, increase traffic, and drive conversions.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom rounded-0 mb-3" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse3">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Transparent Process</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse3" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We deliver measurable outcomes with strategies designed to improve rankings, increase traffic, and drive conversions.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom rounded-0 mb-3" data-aos="fade-up" data-aos-delay={600}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse4">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Expert Team</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse4" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We deliver measurable outcomes with strategies designed to improve rankings, increase traffic, and drive conversions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 mt-lg-0 mt-5">
                            <div className="d-flex gap-4">
                                <div className="position-relative d-inline-block">
                                    <img data-aos="zoom-in" className="rounded-3 position-relative z-1" src="assets/imgs/pages/seo-agency/page-about/img-2.png" alt="The Degree Gap" />
                                    <div className="position-absolute bottom-0 end-0 alltuchtopdown z-0">
                                        <img data-aos="zoom-in" src="assets/imgs/pages/seo-agency/page-about/icon-4.svg" alt="The Degree Gap" />
                                    </div>
                                </div>
                                <div className="position-relative">
                                    <img data-aos="zoom-in" className="rounded-3 mt-10" src="assets/imgs/pages/seo-agency/page-about/img-3.png" alt="The Degree Gap" />
                                    <div className="position-absolute top-0 start-0 translate-middle mt-9 z-2">
                                        <div className="ribbonRotate">
                                            <img data-aos="zoom-in" src="assets/imgs/pages/seo-agency/page-about/icon-3.svg" alt="The Degree Gap" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
