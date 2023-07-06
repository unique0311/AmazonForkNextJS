import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { MentorCardItem } from '@/components/mentor'
import { getData} from './mentors.data'
import { useSelector } from 'react-redux'
import { selectQueryState, selectMinPriceState, selectMaxPriceState, selectMostRecentState } from '@/querySlice'
import { Mentor } from '@/interfaces/mentor'
import { CategoryTitle } from '../category'
import { Outlet } from 'react-router-dom'

const DashboardContainer: FC = () => {
  const [data, setData] = useState([])
  const query = useSelector(selectQueryState)
  const minPrice = useSelector(selectMinPriceState)
  const maxPrice = useSelector(selectMaxPriceState)
  const mostRecent = useSelector(selectMostRecentState)
  const [selected, setSelected] = useState('All')

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
  const AutomotiveFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Automotive'))
  const BabyProductsFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Baby Products'))
  const BeautyFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Beauty'))
  const BookFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Books'))
  const BusinessFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Business, Industry & Science'))
  const FoodAndDrinkFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Food & Drink'))
  const ComputerFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Computer & Accessories'))
  const DiyFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'DIY & Tools'))
  const DvdFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'DVD & Blu-Ray'))
  const ElectronicFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Electronics & Photo'))
  const GardenFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Garden'))
  const GroceryFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Grocery'))
  const HealthFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Health & Personal Care'))
  const HomeFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Home & Kitchen'))
  const MusicalFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Musical Instruments & DJ'))
  const PetSuppliesFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Pet Supplies'))
  const SportsFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Sports & Outdoors'))
  const StationeryFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Stationery & Office Supplies'))
  const ToysFiltered = searchFilter(data.filter((item: Mentor) => item.categoryName == 'Toys & Games')) 

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
          md: 36,
        }, 
        px: { 
          xs: 5,
          md: 20
        },
        backgroundColor: '#EEF0F2', //#ecf3f3
      }}
      className='dashboarda_container'
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column'}} className='categoryMain_container'>
          <h4 className='categoryNew_title'>Categories</h4>
          <label className='categoryNew_container' onClick={() => setSelected('All')}>
            All ({sortData.length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Automotive')}>
            Automotive ({sortData.filter((item: Mentor) => item.categoryName == 'Automotive').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Baby Products')}>
            Baby Products ({sortData.filter((item: Mentor) => item.categoryName == 'Baby Products').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Beauty')}>
            Beauty ({sortData.filter((item: Mentor) => item.categoryName == 'Beauty').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Books')}>
            Books ({sortData.filter((item: Mentor) => item.categoryName == 'Books').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container'  onClick={() => setSelected('Business, Industry & Science')}>
            Business Industry & Science ({sortData.filter((item: Mentor) => item.categoryName == 'Business, Industry & Science').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container'  onClick={() => setSelected('Food & Drink')}>
            Food & Drink ({sortData.filter((item: Mentor) => item.categoryName == 'Food & Drink').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container'  onClick={() => setSelected('Computer & Accessories')}>
            Computer & Accessories ({sortData.filter((item: Mentor) => item.categoryName == 'Computer & Accessories').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('DIY & Tools')}>
            DIY & Tools ({sortData.filter((item: Mentor) => item.categoryName == 'DIY & Tools').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Dvd & Blu-Ray')}>
            DVD & Blu-Ray ({sortData.filter((item: Mentor) => item.categoryName == 'Dvd & Blu-Ray').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Electronics & Photo')}>
            Electronics & Photo ({sortData.filter((item: Mentor) => item.categoryName == 'Electronics & Photo').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Garden')}>
            Garden ({sortData.filter((item: Mentor) => item.categoryName == 'Garden').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Grocery')}>
            Grodery ({sortData.filter((item: Mentor) => item.categoryName == 'Grocery').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Health & Personal Care')}>
            Health & Personal Care ({sortData.filter((item: Mentor) => item.categoryName == 'Health & Personal Care').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Home & Kitchen')}>
            Home & Kitchen ({sortData.filter((item: Mentor) => item.categoryName == 'Home & Kitchen').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Musical Instruments & DJ')}>
            Musical Instruments & DJ ({sortData.filter((item: Mentor) => item.categoryName == 'Musical Instruments & DJ').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Pet Supplies')}>
            Pet Supplies ({sortData.filter((item: Mentor) => item.categoryName == 'Pet Supplies').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Sports & Outdoors')}>
            Sports & Outdoors ({sortData.filter((item: Mentor) => item.categoryName == 'Sports & Outdoors').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Stationery & Office Supplies')}>
            Stationary & Office Supplies ({sortData.filter((item: Mentor) => item.categoryName == 'Stationery & Office Supplies').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
          <label className='categoryNew_container' onClick={() => setSelected('Toys & Games')}>
            Toys & Games ({sortData.filter((item: Mentor) => item.categoryName == 'Toys & Games').length})
            <input type='radio' name='radio'/>
            <span className='checkmark'></span>
          </label>
        </Box>
        <Box sx={{ width: '100%'}}>
          {
            selected === 'All' ? ( 
            <>
              {sortData.map((item: Mentor) => (
                <MentorCardItem key={String(item)} item={item} />
              ))}
            </> ) : (selected === 'Books' ? (
              <>
                {BookFiltered.map((item: Mentor) => (
                  <MentorCardItem key={String(item)} item={item} />
                ))}
              </>) : (selected === 'Automotive' ? (
                <>
                  {AutomotiveFiltered.map((item: Mentor) => (
                    <MentorCardItem key={String(item)} item={item} />
                  ))}
                </>) : (selected === 'Baby Products' ? (
                  <>
                    {BabyProductsFiltered.map((item: Mentor) => (
                      <MentorCardItem key={String(item)} item={item} />
                    ))}
                  </>) : (selected === 'Beauty' ? (
                    <>
                      {BeautyFiltered.map((item: Mentor) => (
                        <MentorCardItem key={String(item)} item={item} />
                      ))}
                    </>) : (selected === 'Business, Industry & Science' ? (
                      <>
                        {BusinessFiltered.map((item: Mentor) => (
                          <MentorCardItem key={String(item)} item={item} />
                        ))}
                      </>) : (selected === 'Food & Drink' ? (
                        <>
                          {FoodAndDrinkFiltered.map((item: Mentor) => (
                            <MentorCardItem key={String(item)} item={item} />
                          ))}
                        </>) : (selected === 'Computer & Accessories' ? (
                          <>
                            {ComputerFiltered.map((item: Mentor) => (
                              <MentorCardItem key={String(item)} item={item} />
                            ))}
                          </>) : (selected === 'DIY & Tools' ? (
                            <>
                              {DiyFiltered.map((item: Mentor) => (
                                <MentorCardItem key={String(item)} item={item} />
                              ))}
                            </>) : (selected === 'DVD & Blu-Ray' ? (
                              <>
                                {DvdFiltered.map((item: Mentor) => (
                                  <MentorCardItem key={String(item)} item={item} />
                                ))}
                              </>) : (selected === 'Electronics & Photo' ? (
                                <>
                                  {ElectronicFiltered.map((item: Mentor) => (
                                    <MentorCardItem key={String(item)} item={item} />
                                  ))}
                                </>) : (selected === 'Garden' ? (
                                  <>
                                    {GardenFiltered.map((item: Mentor) => (
                                      <MentorCardItem key={String(item)} item={item} />
                                    ))}
                                  </>) : (selected === 'Grocery' ? (
                                    <>
                                      {GroceryFiltered.map((item: Mentor) => (
                                        <MentorCardItem key={String(item)} item={item} />
                                      ))}
                                    </>) : (selected === 'Health & Personal Care' ? (
                                      <>
                                        {HealthFiltered.map((item: Mentor) => (
                                          <MentorCardItem key={String(item)} item={item} />
                                        ))}
                                      </>) : (selected === 'Home & Kitchen' ? (
                                        <>
                                          {HomeFiltered.map((item: Mentor) => (
                                            <MentorCardItem key={String(item)} item={item} />
                                          ))}
                                        </>) : (selected === 'Musical Instruments & DJ' ? (
                                          <>
                                            {MusicalFiltered.map((item: Mentor) => (
                                              <MentorCardItem key={String(item)} item={item} />
                                            ))}
                                          </>) : (selected === 'Pet Supplies' ? (
                                            <>
                                              {PetSuppliesFiltered.map((item: Mentor) => (
                                                <MentorCardItem key={String(item)} item={item} />
                                              ))}
                                            </>) : (selected === 'Sports & Outdoors' ? (
                                              <>
                                                {SportsFiltered.map((item: Mentor) => (
                                                  <MentorCardItem key={String(item)} item={item} />
                                                ))}
                                              </>) : (selected === 'Stationery & Office Supplies' ? (
                                                <>
                                                  {StationeryFiltered.map((item: Mentor) => (
                                                    <MentorCardItem key={String(item)} item={item} />
                                                  ))}
                                                </>) : (selected === 'Toys & Games' ? (
                                                  <>
                                                  {ToysFiltered.map((item: Mentor) => (
                                                    <MentorCardItem key={String(item)} item={item} />
                                                  ))}
                                                  </>) : (<></>)
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          }
        </Box>
        {/* <Outlet /> */}
      </Box>
    </Box>
    
  )
}

export default DashboardContainer
