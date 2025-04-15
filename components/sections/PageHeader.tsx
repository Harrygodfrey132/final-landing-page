import Breadcrumb from "@/components/elements/Breadcrumb";

interface PageHeaderProps {
    title: string;
    current_page: string;
}

export default function PageHeader({ title, current_page }: PageHeaderProps) {
    return (
        <>
            {/*tax-software section header*/}
            <section className="seo-agency-section-header position-relative overflow-hidden pt-110 pb-100" >
                <div className="container position-relative z-1 text-lg-start text-center">
                    <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <div className="text-center">
                                <h1 className="ds-1 text-anime-style-2 mb-3">{title}</h1>
                                <Breadcrumb page={current_page} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
