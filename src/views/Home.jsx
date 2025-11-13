import React from 'react'
import TechStackSection from '../component/HomePage/TechStackSection'
import ProjectsSection from '../component/HomePage/ProjectsSection'
// import BlogSection from '../component/HomePage/BlogSection'
// import TestimonialsSection from '../component/HomePage/TestimonialsSection'
import LetsConnectSection from '../component/HomePage/LetsConnectSection'
import BannerHeroSection from '../component/HomePage/Banner'


export const Home = () => {
    return (
        <>
            <BannerHeroSection />
            <TechStackSection />
            <ProjectsSection/>
            {/* <TestimonialsSection/> */}
            {/* <BlogSection/> */}
            <LetsConnectSection/>
        </>
    )
}
