import { useRouter } from 'next/router'
import React from 'react'

const ActivoDigital = () => {
  const router = useRouter()
  console.log(router.query)
  console.log(router.query.id)
  return <div></div>
}

export default ActivoDigital
