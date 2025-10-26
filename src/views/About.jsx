import React from 'react'
import AboutHero from '../component/AboutPage/AboutHero'
import AboutStats from '../component/AboutPage/AboutStats'
import SkillsSection from '../component/AboutPage/SkillsSection'
import ExperienceTimeline from '../component/AboutPage/ExperienceTimeline'
import ServicesOffered from '../component/AboutPage/ServicesOffered'

export const About = () => {
    return (
        <>
            <AboutHero />
            <AboutStats />
            <SkillsSection/>
            <ExperienceTimeline/>
            <ServicesOffered/>
        </>
    )
}
