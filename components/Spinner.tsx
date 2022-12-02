import React from 'react'

type Props = {}

const Spinner = (props: Props) => {
  return (
      <div className='border-2 border-white/25 border-t-white rounded-full animate-spin h-6 w-6'></div>
  )
}

export default Spinner