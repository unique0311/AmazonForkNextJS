import React, { FC } from 'react'
import Image from 'next/image'
import { Mentor } from '@/interfaces/mentor'

interface Props {
  setIsOpen: any
  item: Mentor
}

const DealModal: FC<Props> = ({ setIsOpen, item }) => {
  return (
    <>
      <div className="modal_background" onClick={() => setIsOpen(false)} />
      <div className="getDeal_container">
        <div className="getDealContainer_main">
          <div className="getDealContainer_left">
            <div className="getDeal_alert">
              This product was found 2 hours ago may have changed since then. Please ensure you do your own research
              before purchasing any product!
            </div>
            <div className="getDeal_title">{item.title}</div>
            <div className="getDeal_description">{item.description}</div>
            <div className="getDeal_price">
              <p>Current Price</p>
              <div className="getDealPrice_now">
                <h5>${item.price}</h5>
                <h4>${item.beforePrice}</h4>
              </div>
            </div>
            <div className="getDeal_buttonContainer">
              <div className="getDeal_cancelButton" onClick={() => setIsOpen(false)}>
                Cancel
              </div>
              <a href={item.link} className="getDeal_confirmButton">
                Get Deal
              </a>
            </div>
          </div>
          <div className="getDealContainer_right">
            <div className="getDeal_imageContainer">
              <Image src={item.imageUrl} width="800px" height="1200px" alt="getDeal" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DealModal
