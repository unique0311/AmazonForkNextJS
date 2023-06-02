import React, { FC, useState, useEffect } from 'react'
import { getData } from './mentors.data'
import { Mentor } from '@/interfaces/mentor'
import Link from 'next/link'

const CategoryDetail: FC = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData().then((result: any) => {
      setData(result.data)
    })
  }, [])

  console.log(
    'babyProducts: ',
    data.filter((item: Mentor) => item.categoryName == 'Baby Products')
  )
  return (
    <div className="categoryDetail_container">
      <div className="category_subContainer">
        <Link href="/deals/automotive">
          <div className="category_item automotive">
            <div className="category_mainDetail">
              <h2>AUTOMOTIVE</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Automotive').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/babyProducts">
          <div className="category_item babyproducts">
            <div className="category_mainDetail">
              <h2 style={{ fontSize: '2.5rem' }}>BABY PRODUCTS</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Baby Products').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/beauty">
          <div className="category_item beauty">
            <div className="category_mainDetail">
              <h2>BEAUTY</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Beauty').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/books">
          <div className="category_item books">
            <div className="category_mainDetail">
              <h2>BOOKS</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Books').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/businessIndustry">
          <div className="category_item businessIndustry">
            <div className="category_mainDetail">
              <h2>BUSINESS INDUSTRY & SCIENCE</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Business, Industry & Science').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/cdsAndVinyl">
          <div className="category_item cdsAndVinyl">
            <div className="category_mainDetail">
              <h2>CDS & VINYL</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Cds & Vinyl').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/computersAndAccessories">
          <div className="category_item computersAndAccessories">
            <div className="category_mainDetail">
              <h2>COMPUTERS & ACCESSORIES</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Computers & Accessories').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/diyTools">
          <div className="category_item diyTools">
            <div className="category_mainDetail">
              <h2>DIY & TOOLS</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'DIY & Tools').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/dvdBluray">
          <div className="category_item dvdBluray">
            <div className="category_mainDetail">
              <h2>DVD & BLU-RAY</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Dvd & Blu-Ray').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/electronicsPhoto">
          <div className="category_item electronicsPhoto">
            <div className="category_mainDetail">
              <h2>ELECTRONICS & PHOTO</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Electronics & Photo').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/garden">
          <div className="category_item garden">
            <div className="category_mainDetail">
              <h2>GARDEN</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Garden').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/grocery">
          <div className="category_item grocery">
            <div className="category_mainDetail">
              <h2>GROCERY</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Grocery').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/healthPersonalCare">
          <div className="category_item healthPersonalCare">
            <div className="category_mainDetail">
              <h2>HEALTH & PERSONAL CARE</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Health & Personal Care').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/homeKitchen">
          <div className="category_item homeKitchen">
            <div className="category_mainDetail">
              <h2>HOME & KITCHEN</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Home & Kitchen').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/largeAppliances">
          <div className="category_item largeAppliances">
            <div className="category_mainDetail">
              <h2>LARGE APPLIANCES</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Large Appliances').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/musicalInstrumentsDj">
          <div className="category_item musicalInstrumentsDj">
            <div className="category_mainDetail">
              <h2>MUSICAL INSTRUMENTS & DJ</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Musical Instruments & DJ').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/pcVideoGame">
          <div className="category_item pcVideoGame">
            <div className="category_mainDetail">
              <h2>PC & VIDEO GAME</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Pcs & Video games').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/petSupplies">
          <div className="category_item petSupplies">
            <div className="category_mainDetail">
              <h2>PET SUPPLIES</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Pet Supplies').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/ ">
          <div className="category_item shops">
            <div className="category_mainDetail">
              <h2>SHOPS</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Shops').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/sportsOutdoors">
          <div className="category_item sportsOutdoors">
            <div className="category_mainDetail">
              <h2>SPORTS & OUTDOORS</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Sports & Outdoors').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/stationeryOfficeSupplies">
          <div className="category_item stationeryOfficeSupplies">
            <div className="category_mainDetail">
              <h2>STATIONERY & OFFICE SUPPLIES</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Stationery & Office Supplies').length}</p>
            </div>
          </div>
        </Link>
        <Link href="/deals/toysGames">
          <div className="category_item toysGames">
            <div className="category_mainDetail">
              <h2>TOYS & GAMES</h2>
              <p>{data.filter((item: Mentor) => item.categoryName == 'Toys & Games').length}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CategoryDetail
