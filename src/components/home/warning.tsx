import React, { FC } from 'react'
import { Typography, Container } from '@mui/material'
import { Warning } from '@mui/icons-material'

const WarningPage: FC = () => {
  return (
    <Container className="warning_container">
      <div className="warning_mainContainer">
        <Warning
          sx={{ width: '30px', height: '30px', color: 'white', mr: { xs: 0, md: '15px' }, py: { xs: 2, md: 0 } }}
        />
        <Typography sx={{ color: 'white', py: { xs: 1, md: 1 } }}>
          Please Note: Some of the links on this website use affiliate links, these come at no extra cost. Discount
          Donkey will earn a commission if you make a purchase after clicking a link on our site. We only recommend
          products/services that we have investigated and believe deliver high value to you.
        </Typography>
      </div>
    </Container>
  )
}

export default WarningPage
