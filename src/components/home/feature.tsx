import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TextField, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material'
import { FilterList } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setMinPrice, setMaxPrice, setMostRecent } from '@/querySlice'

const HomeFeature: FC = () => {
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()

  const handleChange: any = (event: SelectChangeEvent) => {
    setFilter(event.target.value)
  }

  dispatch(setMostRecent(filter))

  const handleMinPriceChange: any = (e: any) => {
    dispatch(setMinPrice(e.target.value))
  }

  const handleMaxPriceChange: any = (e: any) => {
    dispatch(setMaxPrice(e.target.value))
  }

  return (
    <div className="feature_container">
      <div className="feature_detail">
        <div className="feature_detail_sub">
          <Typography
            sx={{ color: '#fff', fontSize: { xs: '18px', md: '24px' }, pl: { xs: 5, md: 10 }, mr: { xs: 1, md: 2 } }}
          >
            Price
          </Typography>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: 250 } }} noValidate autoComplete="off">
            <TextField
              id="min-number"
              placeholder="Min"
              type="number"
              InputLabelProps={{ shrink: true }}
              onChange={handleMinPriceChange}
              sx={{ backgroundColor: '#fff', border: 'none', borderRadius: 1 }}
            />
          </Box>
        </div>
        <div className="feature_detail_sub">
          <Typography sx={{ color: '#fff', fontSize: { xs: '18px', md: '24px' }, mx: { xs: 1, md: 2 } }}>To</Typography>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: 250 } }} noValidate autoComplete="off">
            <TextField
              id="max-number"
              placeholder="Max"
              type="number"
              InputLabelProps={{ shrink: true }}
              onChange={handleMaxPriceChange}
              sx={{ backgroundColor: '#fff', border: 'none', borderRadius: 1 }}
            />
          </Box>
        </div>
      </div>
      <div className="feature_details">
        <FilterList sx={{ color: '#fff' }} />
        <Typography sx={{ color: '#fff', fontSize: { xs: '18px', md: '24px' }, px: { xs: 1.5, md: 2 } }}>
          Filter
        </Typography>
        <FormControl
          sx={{ m: 1, width: 250, backgroundColor: 'white', border: 'none', borderRadius: 2, mr: { xs: 1, md: 10 } }}
        >
          <Select value={filter} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'filter' }}>
            <MenuItem value="mostRecent">Most Recent</MenuItem>
            <MenuItem value="priceLH">Price (Lowest- Highest)</MenuItem>
            <MenuItem value="priceHL">Price (Highest- Lowest)</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default HomeFeature
