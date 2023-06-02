import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeWarning = dynamic(() => import('../../components/home/warning'))
const DynamicHomeFeature = dynamic(() => import('../../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../../components/home/popular-courses'))
const DynamicAutoMative = dynamic(() => import('../../components/deal/automative'))

const AutoMotive: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeWarning />
      <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicAutoMative />
    </>
  )
}

AutoMotive.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default AutoMotive
