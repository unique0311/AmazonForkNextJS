import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Warning } from '@mui/icons-material'

const WarningPage: FC = () => {
  return (
    <div className="warning_container">
      <div className="warning_mainContainer">
        <Warning
          sx={{ width: '60px', height: '60px', color: 'white', mr: { xs: 0, md: '50px' }, py: { xs: 2, md: 0 } }}
        />
        <Typography sx={{ color: 'white', py: { xs: 2, md: 3 } }}>
          Please note that some of the links on this website are affiliate links, and at no additional cost to you,
          Discount Genie will earn a commission if you decide to make a purchase after clicking through the link. We
          only recommend products or services that we have investigated and truly feel deliver value to you.
        </Typography>
      </div>
    </div>
  )
}

export default WarningPage
