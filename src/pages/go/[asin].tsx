import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Page() {
  const router = useRouter()

  // const redirectionLink: any = "https://www.amazon.co.uk/dp/" + {router.} + '?tag=sellercirclel-21'
  // window.location.replace()
  const { asin }: any = router.query

  useEffect(() => {
    return window.location.replace('https://www.amazon.co.uk/dp/' + asin + '?tag=sellercirclel-21')
  }, [asin])

  // const redirectionLink = window.location.replace('https://www.amazon.co.uk/dp/' + { asin } + '?tag=sellercirclel-21')

  return <div>{asin}</div>
}
