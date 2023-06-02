import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeWarning = dynamic(() => import('../../components/home/warning'))
const DynamicHomeFeature = dynamic(() => import('../../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../../components/home/popular-courses'))
const DynamicAutoMative = dynamic(() => import('../../components/deal/toyGames'))

const ToysGames: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeWarning />
      <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicAutoMative />
    </>
  )
}

ToysGames.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ToysGames
