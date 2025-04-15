import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/aos.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/odometer.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css";
import "/public/assets/fonts/boxicons/boxicons.min.css";
import "/public/assets/fonts/remixicon/remixicon.css";
import "/public/assets/fonts/fontawesome/fontawesome.min.css";
import "/public/assets/fonts/fontawesome/solid.min.css";
import "/public/assets/fonts/fontawesome/regular.min.css";
import "/public/assets/css/main.css";

import "/public/assets/css/style.css";

import type { Metadata } from "next";
import { Libre_Franklin, Rubik } from "next/font/google";

const libreFranklin = Libre_Franklin({
    weight: "700", // Only bold for headings
    subsets: ["latin"],
    variable: "--tc-heading-font-family",
    display: "swap",
});

const rubik = Rubik({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    variable: "--tc-body-font-family",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Expert GCSE & A-Level Tutoring | 50+ Subjects | Pay-As-You-Go",
    description: "Transform your academic journey with our expert GCSE and A-Level tutoring. Covering 50+ subjects with experienced tutors, flexible pay-as-you-go plans, and personalized learning paths. Book your free consultation today!",
    keywords: "GCSE tutoring, A-Level tutoring, online tutoring, expert tutors, pay-as-you-go tutoring, academic support, GCSE Maths, GCSE English, A-Level Physics, A-Level Chemistry",
    openGraph: {
        title: "Expert GCSE & A-Level Tutoring",
        description: "Transform your academic journey with our expert GCSE and A-Level tutoring. Covering 50+ subjects with experienced tutors.",
        type: "website",
        locale: "en_GB",
        siteName: "Expert Tutoring",
    },
    robots: {
        index: true,
        follow: true,
    },
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#FFD700",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${libreFranklin.variable} ${rubik.variable}`}>{children}</body>
        </html>
    );
}
