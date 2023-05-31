import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { MentorCardItem } from '@/components/mentor'
import { getData, data } from './mentors.data'
import { useSelector } from 'react-redux'
import { selectQueryState } from '@/querySlice'
import { Mentor } from '@/interfaces/mentor'

const HomeOurMentors: FC = () => {
  // const [data, setData] = useState([])
  const query = useSelector(selectQueryState)

  const searchFilter: any = (array: any[]) => {
    return array.filter((el: any) => el.title.toLowerCase().indexOf(query.toLocaleLowerCase()) >= 0)
  }

  // useEffect(() => {
  //   getData().then((result: any) => {
  //     console.log(result)
  //     setData(result.data)
  //   })
  // }, [])

  const filtered = searchFilter(data)

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
        {filtered.map((item: Mentor) => (
          <MentorCardItem key={String(item)} item={item} />
        ))}
      </Container>
    </Box>
  )
}

export default HomeOurMentors
