import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { FooterSectionTitle } from '@/components/footer'

// const pageMenu: Array<Navigation> = [
//   { label: 'All Deals', path: '/' },
//   { label: 'Categories', path: '/categories' },
//   { label: 'Join', path: '/newsletter' },
//   { label: 'About Us', path: '/aboutUs' },
// ]

const companyMenu: Array<Navigation> = [
  { label: 'Privacy policy', path: '/privacyAndPolicy' },
  { label: 'Terms & Conditions', path: '/termsOfService' },
  { label: 'About us', path: '/aboutUs' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 0.2,
          color: 'black',
          fontWeight: "bold"
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid> */}
      <Grid item xs={12} md={6}>
        {/* <FooterSectionTitle title="About" /> */}
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
