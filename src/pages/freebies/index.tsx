import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeWarning = dynamic(() => import('../../components/home/warning'))
const DynamicHomePopularCourse = dynamic(() => import('../../components/home/popular-courses'))
const DynamicCategoryDetail = dynamic(() => import('../../components/home/categoryDetail'))
const DynamicHomeNewsLetter = dynamic(() => import('../../components/home/newsletter'))

const TermsOfService: NextPageWithLayout = () => {
  return (
    <>
      {/* <DynamicHomeWarning /> */}
      {/* <DynamicHomePopularCourse /> */}
      <DynamicCategoryDetail />
      {/* <DynamicHomeNewsLetter /> */}
    </>
  )
}

TermsOfService.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default TermsOfService
