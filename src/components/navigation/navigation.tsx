import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { navigations } from './navigation.data'
import Link from 'next/link'
import MuiLink from '@mui/material/Link'
import { useLocation } from 'react-router-dom'
import { useRouter } from 'next/router'

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  const router = useRouter();

  return (
    <Link href={path} passHref>
      <MuiLink
        underline="none"
        sx={{
          position: 'relative',
          color: 'text.disabled',
          cursor: 'pointer',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 0, md: 3 },
          mb: { xs: 3, md: 0 },
          fontSize: { xs: '1.2rem', md: 'inherit' },
          ...(path === router.pathname &&  {
            color: 'primary.main',
          }),

          '& > div': { display: 'none' },

          '&.current>div': { display: 'block' },

          '&:hover': {
            color: 'primary.main',
            '&>div': {
              display: 'block'
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            transform: 'rotate(3deg)',
            '& img': { width: 44, height: 'auto' },
          }}
        >
          {/* eslint-disable-next-line */}
          <img src="/images/headline-curve.svg" alt="Headline curve" />
        </Box>
        {label}
      </MuiLink>
    </Link>
  )
}

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path, label }, index) => (
        <NavigationItem key={index + path} label={label} path={path} />
      ))}
    </Box>
  )
}

export default Navigation
