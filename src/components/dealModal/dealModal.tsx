import React, { FC } from 'react'
import Image from 'next/image'
import { Mentor } from '@/interfaces/mentor'

interface Props {
  setIsOpen: any
  item: Mentor
}

const DealModal: FC<Props> = ({ setIsOpen, item }) => {
  const d = new Date(String(item.dealCreatedAt))
  const currentUrl = window.location.href
  const redirectionLink: any = String(item.link) + '?tag=sellercirclel-21'
  const minTime = ~~((Date.now() - d.getTime()) / 1000 / 60)
  const hourTime = ~~(minTime / 60)
  const dayTime = ~~(hourTime / 24)
  const restHourTime = ~~(hourTime - dayTime * 24)
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
      time = '1 hour '
    }
  }

  return (
    <>
      <div className="modal_background" onClick={() => setIsOpen(false)} />
      <div className="getDeal_container">
        <div className="getDealContainer_main">
          <div className="getDealContainer_left">
            <div className="getDeal_alert">
              This product was found {time} ago may have changed since then. Please ensure you do your own research
              before purchasing any product!
            </div>
            <div className="getDeal_title">{item.title}</div>
            <div className="getDeal_description">{item.description}</div>
            <div className="getDeal_price">
              <p>Current Price</p>
              <div className="getDealPrice_now">
                <h5>£{item.price}</h5>
                <h4>£{item.beforePrice}</h4>
              </div>
            </div>
            <div className="getDeal_buttonContainer">
              <div className="getDeal_cancelButton" onClick={() => setIsOpen(false)}>
                Cancel
              </div>
              <a id="myLink" href={redirectionLink} className="getDeal_confirmButton">
                Get Deal
              </a>
            </div>
          </div>
          <div className="getDealContainer_right">
            <div className="getDeal_imageContainer">
              <Image src={item.imageUrl} width={600} height={600} alt="getDeal" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DealModal
