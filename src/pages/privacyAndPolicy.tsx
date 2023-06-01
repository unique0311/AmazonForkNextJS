import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeWarning = dynamic(() => import('../components/home/warning'))
const DynamicPrivacyPolicyDetail = dynamic(() => import('../components/home/privacyPolicyDetail'))

const PrivacyAndPolicy: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeWarning />
      <DynamicPrivacyPolicyDetail />
    </>
  )
}

PrivacyAndPolicy.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default PrivacyAndPolicy
