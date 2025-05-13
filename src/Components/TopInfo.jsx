import React from 'react'
import { Mail, Phone } from 'lucide-react'

function TopInfo() {
  return (
    <div className='w-full p-2 bg-gray-200 text-black flex justify-around items-center'>
      <div className='flex items-center gap-2'>
        <Mail size={20} />
        <span>info@kapsammakina.com</span>
      </div>
      <div className='flex items-center gap-2'>
        <Phone size={20} />
        <span> +90 535 828 25 25</span>
      </div>
    </div>
  )
}

export default TopInfo