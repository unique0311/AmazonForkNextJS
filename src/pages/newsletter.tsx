import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeWarning = dynamic(() => import('../components/home/warning'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const Newsletter: NextPageWithLayout = () => {
  return (
    <>
      {/* <DynamicHomeWarning /> */}
      <DynamicHomeNewsLetter />
    </>
  )
}

Newsletter.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Newsletter
