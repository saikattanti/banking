'use client'

import CountUp from 'react-countup'
import React from 'react'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
     <CountUp 
     duration={2.75}
     decimals={2}
     decimal=","
     prefix="$"
     end={amount}
  /> 
    </div>
  )
}

export default AnimatedCounter
