import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeWarning = dynamic(() => import('../components/home/warning'))
const DynamicTermsOfServiceDetail = dynamic(() => import('../components/home/termsOfServiceDetail'))

const TermsOfService: NextPageWithLayout = () => {
  return (
    <>
      {/* <DynamicHomeWarning /> */}
      <DynamicTermsOfServiceDetail />
    </>
  )
}

TermsOfService.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default TermsOfService
