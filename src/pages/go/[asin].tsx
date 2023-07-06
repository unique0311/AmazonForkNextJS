import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page(): any {
  const router = useRouter()
  const { asin }: any = router.query

  useEffect(() => {
    if (asin !== undefined)
      return window.location.replace('https://www.amazon.co.uk/dp/' + asin + '?tag=sellercirclel-21')
  }, [asin])
}
