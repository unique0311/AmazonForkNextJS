import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page(): any {
  const router = useRouter()
  const { listingid }: any = router.query

  // console.log("sdfsdfsdfsf", listingid[0],listingid[1]);

  useEffect(() => {
    if (listingid !== undefined)
      return window.location.replace('https://www.amazon.co.uk/gp/aws/cart/add.html?OfferListingId.1=' + listingid[0] + '&Quantity.1=' + listingid[1] + '&tag=discountdonke-21')
  }, [listingid])
}
