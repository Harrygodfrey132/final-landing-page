import Link from "next/link";

export default function Breadcrumb({ page }: any) {
    return (
        <div className="d-flex py-2 px-4 align-items-center justify-content-center gap-2">
            <Link href="/">
                <span className="text-capitalize fw-medium text-dark">home</span>
            </Link>
            <p className="mb-0 fw-medium">/</p>
            <span>
                <span className="fw-medium text-primary text-capitalize">{page}</span>
            </span>
        </div>
    );
}
