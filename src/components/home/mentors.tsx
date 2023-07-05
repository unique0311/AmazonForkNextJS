import React from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/interfaces/layout";
import { DashboardLayout } from "../layout";

const DynamicDashboard = dynamic(() => import('../home/dashboard'))

const Mentors: NextPageWithLayout = () => {
  return (
    <>
      <DynamicDashboard />
    </>
  )
}

Mentors.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Mentors