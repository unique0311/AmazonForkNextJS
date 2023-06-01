import React, { FC, useState } from 'react'
import Image from 'next/image'
import { Schedule } from '@mui/icons-material'
import { DealModal } from '../dealModal'
import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dates = new Date()
  const formattedDate: any = dates.toLocaleString('en-GB', { timeZone: 'Europe/London' })

  // const currentDate: any = new Date().toLocaleString()
  const d = new Date(String(item.dealCreatedAt))
  const minTime = ~~((Date.now() - d.getTime()) / 1000 / 60) + 300
  const hourTime = ~~(minTime / 60)
  const dayTime = ~~(hourTime / 24)
  const restHourTime = ~~(hourTime - dayTime * 24)
  const restMinuteTime = ~~(minTime - hourTime * 60)

  let time: any = ''

  if (dayTime > 1) {
    time = dayTime + ' ' + 'days'
  } else if (dayTime == 1) {
    time = '1 day' + ' ' + restHourTime + ' ' + 'hours'
  } else if (dayTime < 1) {
    if (hourTime > 1) {
      time = hourTime + ' ' + 'hours'
    } else if (hourTime < 1) {
      time = minTime + ' ' + 'minutes'
    } else if (hourTime == 1) {
      time = '1 hour ' + restMinuteTime + ' ' + 'mins'
    }
  }
  return (
    <div className="mentor_container">
      <Image src={item.imageUrl} alt={'Products ' + item.asin} width={300} height={200} className="image_container" />
      <div className="mentor_mainRight">
        <div className="mentorRight_update">
          <div></div>
          <div className="mentorUpdate_show">
            <Schedule />
            <p>Posted {time} ago</p>
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
