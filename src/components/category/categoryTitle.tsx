import React, {FC, useEffect, useState} from "react"
import { Box } from "@mui/material"
import { getData } from "../home/mentors.data"
import { useSelector } from "react-redux"
import { selectMaxPriceState, selectMinPriceState, selectMostRecentState, selectQueryState } from "@/querySlice"
import { Mentor } from "@/interfaces/mentor"

const CategoryTitle: FC = () => {
  const [data, setData] = useState([])
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

  useEffect(() => {
    getData().then((result: any) => {
      setData(result.data)
    })
  }, [])

  const filtered = searchFilter(data)

  const sortData: any = filtered

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
      <h4 className='categoryNew_title'>Categories</h4>
      <label className='categoryNew_container'>
        Books ({sortData.filter((item: Mentor) => item.categoryName == 'Beauty').length})
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        Fashion
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        Food & Drink
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        Health & Beauty
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        Home & Garden
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        Kids
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        Music
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        Sport
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        Technology
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        TV & Film
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        Travel
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
      <label className='categoryNew_container'>
        Other
        <input type='radio' name='radio'/>
        <span className='checkmark'></span>
      </label>
    </Box>
  )
}

export default CategoryTitle