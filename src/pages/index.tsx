import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))
const DynamicHomeWarning = dynamic(() => import('../components/home/warning'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicHomeWarning />
      <DynamicHomeOurMentors />
      <DynamicHomeNewsLetter />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
