import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#3B82F6', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                <Image src="/images/logo_donkey.png" alt="Discount Donkey" width={200} height={50} />
              </Typography>
              {/* <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Discount Donkey is an E-commerce platform that has been operating since 2023 until now.
              </Typography>
              <FooterSocialLinks /> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
