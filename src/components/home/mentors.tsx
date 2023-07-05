import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { MentorCardItem } from '@/components/mentor'
import { getData} from './mentors.data'
import { useSelector } from 'react-redux'
import { selectQueryState, selectMinPriceState, selectMaxPriceState, selectMostRecentState } from '@/querySlice'
import { Mentor } from '@/interfaces/mentor'

const HomeOurMentors: FC = () => {
  const [data, setData] = useState([])
  const query = useSelector(selectQueryState)
  const minPrice = useSelector(selectMinPriceState)
  const maxPrice = useSelector(selectMaxPriceState)
  const mostRecent = useSelector(selectMostRecentState)
  const [value, setValue] = useState('books')

  // console.log('mostRecents: ...', mostRecent)

  const searchFilter: any = (array: any[]) => {
    return array.filter(
      (el: any) =>
        el.title.toLowerCase().indexOf(query.toLocaleLowerCase()) >= 0 && el.price >= minPrice && el.price <= maxPrice
    )
  }

  useEffect(() => {
    getData().then((result: any) => {
      setData(result.data)
    })
  }, [])

  const filtered = searchFilter(data)

  let sortData: any = filtered

  if (mostRecent == 'mostRecent') {
    sortData = filtered.slice().sort((date1: any, date2: any) => {
      return date2.dealCreatedAt > date1.dealCreatedAt ? 1 : date2.dealCreatedAt < date1.dealCreatedAt ? -1 : 0
    })
  } else if (mostRecent == 'priceHL') {
    sortData = filtered.slice().sort((price1: any, price2: any) => {
      return price2.price > price1.price ? 1 : price2.price < price1.price ? -1 : 0
    })
  } else if (mostRecent == 'priceLH') {
    sortData = filtered.slice().sort((price1: any, price2: any) => {
      return price1.price > price2.price ? 1 : price1.price < price2.price ? -1 : 0
    })
  }

  // console.log('sortDate: ///', sortData)

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
        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
          <h4>Categories</h4>
          <select
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          >
            <option value="books">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select>
        </Box>
        <Box maxWidth="lg">
          {sortData.map((item: Mentor) => (
            <MentorCardItem key={String(item)} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default HomeOurMentors
