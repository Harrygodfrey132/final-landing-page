import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/home/Section1'
import Section2 from '@/components/sections/home/Section2'
import Section3 from '@/components/sections/home/Section3'
import Section4 from '@/components/sections/home/Section4'
import Section5 from '@/components/sections/home/Section5'
import Section6 from '@/components/sections/home/Section6'
import Section7 from '@/components/sections/home/Section7'
import Section8 from '@/components/sections/home/Section8'
import Section9 from '@/components/sections/home/Section9'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<link rel="canonical" href="https://thedegreegap.com" />
			</Head>
			<Layout>
				<main>
					<article itemScope itemType="https://schema.org/EducationalOrganisation">
						<meta itemProp="name" content="The Degree Gap" />
						<meta itemProp="description" content="Expert GCSE and A-Level tutoring covering 50+ subjects with experienced tutors." />
						<meta itemProp="url" content="https://thedegreegap.com" />
						<meta itemProp="telephone" content="+447986965776" />
						<meta itemProp="priceRange" content="£40-£60+" />
						<meta itemProp="areaServed" content="United Kingdom" />
						
						<Section1 />
						<Section3 />
						<Section8 />
						<Section7 />
						<Section5 />
						<Section4 />
					</article>
				</main>
			</Layout>
		</>
	)
}