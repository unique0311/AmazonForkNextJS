import React, { FC, useState, useEffect } from 'react'
import { getData, data } from '../home/mentors.data'
import { Box, Container } from '@mui/material'
import { MentorCardItem } from '@/components/mentor'
import { useSelector } from 'react-redux'
import { Mentor } from '@/interfaces/mentor'
import { selectQueryState, selectMinPriceState, selectMaxPriceState, selectMostRecentState } from '@/querySlice'

const StationeryOfficeSupplies: FC = () => {
  // const [data, setData] = useState([])
  const query = useSelector(selectQueryState)
  const minPrice = useSelector(selectMinPriceState)
  const maxPrice = useSelector(selectMaxPriceState)
  const mostRecent = useSelector(selectMostRecentState)

  const searchFilter: any = (array: any[]) => {
    return array.filter(
      (el: any) =>
        el.title.toLowerCase().indexOf(query.toLocaleLowerCase()) >= 0 && el.price >= minPrice && el.price <= maxPrice
    )
  }

  // useEffect(() => {
  //   getData().then((result: any) => {
  //     setData(result.data)
  //   })
  // }, [])

  const filtered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Stationery & Office Supplies'))

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
        backgroundColor: '#ecf3f3',
      }}
    >
      <Container maxWidth="lg">
        {sortData.map((item: Mentor) => (
          <MentorCardItem key={String(item)} item={item} />
        ))}
      </Container>
    </Box>
  )
}

export default StationeryOfficeSupplies
