import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' },
          cursor: 'pointer',
          mr: 5
        }}
      >
        <Image src="/images/logo_donkey.png" alt="Discount Donkey" width={180} height={40} />
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
