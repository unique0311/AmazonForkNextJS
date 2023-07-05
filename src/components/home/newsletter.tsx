import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'linear-gradient(to right, #00A19C, #8CF4AD)', }} id="newsletter">
        <Box
          sx={{
            //#00A19C, #8CF4AD
            height: "75vh",
            // borderRadius: 10,
            // py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          className='comingSoon_container'
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 52, md: 140 }, color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif' }}>
            Coming Soon
          </Typography>
          <Typography sx={{ mb: 7, color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: { xs: 40, md: 54} }}>
            In the meantime, get the latest<br />updates by signing up here.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 790 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 9999,
                width: '100%',
                height: 48,
                px: 5,
                fontSize: 24,
                py: 4,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                fontFamily: 'Arial, Helvetica, sans-serif'
              }}
              placeholder="Email Address"
            />
            <Box sx={{ fontFamily: 'Arial, Helvetica, sans-serif'}}>
              {/* <StyledButton disableHoverEffect size="large">
                Sign Up
              </StyledButton> */}
              <div className='comingSoon_button'>
                Sign&nbsp;Up
              </div>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default HomeNewsLetter
