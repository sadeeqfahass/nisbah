import React from 'react'

function Nav() {
  return (
    <div className='nav flex justify-between items-center p-4'>
      <div className='logo'>
        <h1 className='text-4xl font-bold'>Nisbah</h1>
        <p className='text-sm text-red-400 italic'>By Mastermind Tech</p>
      </div>
      <div className='nav-links'>
        <ul className='flex gap-4'>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Reviews</a></li>
            <li><a href='#'>Download</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
