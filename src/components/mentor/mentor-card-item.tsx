import React, { FC, useState } from 'react'
import Image from 'next/image'
import { Schedule } from '@mui/icons-material'
import { DealModal } from '../dealModal'
import { Mentor } from '@/interfaces/mentor'
import shareImage from '../../../public/images/share_1.png'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dates = new Date()
  const formattedDate: any = dates.toLocaleString('en-GB', { timeZone: 'Europe/London' })

  const d = new Date(String(item.dealCreatedAt))
  const minTime = ~~((Date.now() - d.getTime()) / 1000 / 60)
  const hourTime = ~~(minTime / 60)
  const dayTime = ~~(hourTime / 24)
  const restHourTime = ~~(hourTime - dayTime * 24)
  const restMinuteTime = ~~(minTime - hourTime * 60)

  let time: any = ''

  if (dayTime > 1) {
    time = dayTime + ' ' + 'D'
  } else if (dayTime == 1) {
    time = '1 D,' + ' ' + restHourTime + ' ' + 'H'
  } else if (dayTime < 1) {
    if (hourTime > 1) {
      time = hourTime + ' ' + 'H, ' + restMinuteTime + ' m' + ' '
    } else if (hourTime < 1) {
      time = minTime + ' ' + 'm'
    } else if (hourTime == 1) {
      time = '1 H, ' + restMinuteTime + ' ' + 'm'
    }
  }
  return (
    <>{~~(((item.beforePrice - item.price) / item.beforePrice) * 100) >= 0?
    <div className="mentor_container">
      <Image src={item.imageUrl} style={{margin: '15px'}} alt={'Products ' + item.asin} className="image_container" width={170} height={170}/>
      <div className="mentor_mainRight">
        {/* <div className="mentorRight_update">
          <div></div>
          <div className="mentorUpdate_show">
            <Schedule />
          </div>
        </div> */}
        <h5>{item.title}</h5>
        <div className="mentorRight_price">
          <div className="beforePrice">£{item.beforePrice}</div>
          <div className="currentPrice">£{item.price}</div>
          <div className="priceCross" />
          <div className="manufacturer">{item.manufacturer}</div>
        </div>
        {/* <h6>{item.description}</h6> */}
        <div className="getDeal_button">
          <div onClick={() => setIsOpen(true)}>
            <p>Get Deal</p>
            <Image src={shareImage} width={17} height={17} className='shareImage_container'/>
          </div>
          <p>Posted {time} ago</p>
        </div>
        {isOpen && <DealModal setIsOpen={setIsOpen} item={item} />}
      </div>
      {/* <div className="badge_container">
        {~~(((item.beforePrice - item.price) / item.beforePrice) * 100) >= 0
          ? `${~~(((item.beforePrice - item.price) / item.beforePrice) * 100)} % OFF`
          : `${Math.abs(~~(((item.beforePrice - item.price) / item.beforePrice) * 100))} % ON`}
      </div> */}
    </div>:<></>
  }</>
    
  )
}
export default MentorCardItem
