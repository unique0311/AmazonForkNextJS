import React, { FC, useState } from 'react'
import Image from 'next/image'
// import Box from '@mui/material/Box'
import { Schedule } from '@mui/icons-material'
// import Typography from '@mui/material/Typography'
import { DealModal } from '../dealModal'

import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  // const currentDate: any = new Date().toLocaleString()

  return (
    <div className="mentor_container">
      <Image src={item.imageUrl} alt={'Products ' + item.asin} width={200} height={200} className="image_container" />
      <div className="mentor_mainRight">
        <div className="mentorRight_update">
          <div></div>
          <div className="mentorUpdate_show">
            <Schedule />
            <p>Posted {item.dealCreatedAt} </p>
          </div>
        </div>
        <h5>{item.title}</h5>
        <div className="mentorRight_price">
          <div className="currentPrice">£{item.price}</div>
          <div className="beforePrice">£{item.beforePrice}</div>
          <div className="priceCross" />
          <div className="manufacturer">{item.manufacturer}</div>
        </div>
        <h6>{item.description}</h6>
        <div className="getDeal_button">
          <div onClick={() => setIsOpen(true)}>Get Deal</div>
        </div>
        {isOpen && <DealModal setIsOpen={setIsOpen} item={item} />}
      </div>
      <div className="badge_container">
        {~~(((item.beforePrice - item.price) / item.beforePrice) * 100) >= 0
          ? `${~~(((item.beforePrice - item.price) / item.beforePrice) * 100)} % OFF`
          : `${Math.abs(~~(((item.beforePrice - item.price) / item.beforePrice) * 100))} % ON`}
      </div>
    </div>
  )
}
export default MentorCardItem
