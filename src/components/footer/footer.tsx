import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { FooterNavigation } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#ffffff', py: { xs: 1, md: 2 }, color: 'black', px: { xs: 5, md: 20 } }}>
      <Box>
        <Grid spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                <Image src="/images/logo_donkey.png" alt="Discount Donkey" width={200} height={50} />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
          <Grid item xs={12} md={7} sx={{ marginTop: 2}}>
            <p className='copyRight'>Copyright &copy; 2023 Discountdonkey.com</p>
            <p className='copyRight'>All Rights Reserved</p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer
