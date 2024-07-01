'use client'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
  return (
    <div className='flex justify-between'>
        <Button variant='secondary' onClick={() => router.back()}>GoBack</Button>
        <Button variant='secondary' onClick={() => router.forward()}>Go Forward</Button>
    </div>
  )
}

export default Navbar