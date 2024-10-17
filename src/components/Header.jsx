import { GithubOutlined } from '@ant-design/icons'
import React from 'react'

function Header() {
  return (
    <div className='py-8 bg-[#001529] border-b-white border-b-[2px] px-10'>
      <div className="flex items-center space-x-10">
        <GithubOutlined className='scale-[3] text-white' />
        <h2 className='text-white text-[22px] font-semibold'>Admin panel</h2>
      </div>
    </div>
  )
}

export default Header
