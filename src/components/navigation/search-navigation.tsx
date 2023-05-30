import React, { FC } from 'react'
import { Paper, InputBase, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
// import { Input } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setQuery } from '@/querySlice'

const SearchNavigation: FC = () => {
  // const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const handleChange: any = (e: any) => {
    dispatch(setQuery(e.target.value))
  }

  return (
    // <Box sx={{ '& button:first-child': { mr: 2 } }}>
    //   <StyledButton disableHoverEffect={true} variant="outlined">
    //     Sign In
    //   </StyledButton>
    //   <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
    // </Box>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350, backgroundColor: '#e5e5e5' }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Search sx={{ color: '#aeaeae' }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: '#aeaeae' }}
        placeholder="Search Brands, Products, etc..."
        inputProps={{ 'aria-label': 'search brands, products, etc.' }}
        onChange={handleChange}
      />
    </Paper>
  )
}

export default SearchNavigation
