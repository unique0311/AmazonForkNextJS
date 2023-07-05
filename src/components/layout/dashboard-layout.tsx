import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { CategoryTitle } from '@/components/category'

interface Props {
  children: ReactNode
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <Box
      id="mentors"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        }, 
        px: { 
          xs: 5, 
          md: 20 
        },
        backgroundColor: '#EEF0F2', //#ecf3f3
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CategoryTitle />
        {children}
      </Box>
    </Box>
  )
}

export default DashboardLayout
