import React, { FC } from 'react'
import { Paper, InputBase, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setQuery } from '@/querySlice'

const SearchNavigation: FC = () => {
  const dispatch = useDispatch()

  const handleChange: any = (e: any) => {
    dispatch(setQuery(e.target.value))
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350, backgroundColor: '#EEF0F2', borderRadius: 2}}
    >
      <IconButton type="button" sx={{ p: '2px 10px' }} aria-label="search">
        <Search sx={{ color: '#ADADAD' }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: '#ADADAD', fontSize: '15px' }}
        placeholder="Search brands, products etc..."
        inputProps={{ 'aria-label': 'search brands, products, etc.' }}
        onChange={handleChange}
      />
    </Paper>
  )
}

export default SearchNavigation
