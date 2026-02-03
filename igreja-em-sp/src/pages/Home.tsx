import { Section } from '../components/sections/Section'
import { AdsCarousel } from '../components/ads/AdsCarousel'
import { homeSections } from '../components/sections/sections.data.ts'
export function Home() {
    return (
        <>
            <AdsCarousel />
            {homeSections.map((section, index) => (
                <Section key={index} {...section} />
            ))}

        </>
    )
}
