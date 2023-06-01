import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()
  const { asin }: any = router.query

  useEffect(() => {
    return window.location.replace('https://www.amazon.co.uk/dp/' + asin + '?tag=sellercirclel-21')
  }, [asin])

  // const redirectionLink = window.location.replace('https://www.amazon.co.uk/dp/' + { asin } + '?tag=sellercirclel-21')
}
