import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Page() {
  const router = useRouter()

  const [data, setData] = useState()

  // const redirectionLink: any = "https://www.amazon.co.uk/dp/" + {router.} + '?tag=sellercirclel-21'
  // window.location.replace()
  const { asin }: any = router.query

  useEffect(() => {
    setData(asin)
    return window.location.replace('https://www.amazon.co.uk/dp/' + data + '?tag=sellercirclel-21')
  }, [data])

  console.log(data)
  // const redirectionLink = window.location.replace('https://www.amazon.co.uk/dp/' + { asin } + '?tag=sellercirclel-21')

  return <div>{asin}</div>
}
