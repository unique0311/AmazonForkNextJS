import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeWarning = dynamic(() => import('../../components/home/warning'))
const DynamicHomeFeature = dynamic(() => import('../../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../../components/home/popular-courses'))
const DynamicAutoMative = dynamic(() => import('../../components/deal/dvdBlueray'))

const DvdBluray: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeWarning />
      <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicAutoMative />
    </>
  )
}

DvdBluray.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default DvdBluray
