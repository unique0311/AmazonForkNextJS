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
          Please Note: Some of the links on this website use affiliate links, these come at no extra cost. Discount
          Donkey will earn a commission if you make a purchase after clicking a link on our site. We only recommend
          products/services that we have investigated and believe deliver high value to you.
        </Typography>
      </div>
    </div>
  )
}

export default WarningPage
