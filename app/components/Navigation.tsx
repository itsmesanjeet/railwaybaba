'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navigation.css'

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen)

  const pathname = usePathname()

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Search Trains', link: '/search' },
    { name: 'Live Status', link: '/status' },
    { name: 'PNR Check', link: '/pnr' },
    { name: 'Train Schedule', link: '/schedule' },
  ]

  return (
    <header className="bg-white shadow-md z-50 relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold text-blue-900">
          Railway<span className="text-blue-700">Baba</span>
        </div>

        <ul className="hidden md:flex space-x-4 text-sm font-medium text-blue-900">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${pathname === item.link
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'hover:bg-blue-50 hover:text-blue-700'
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <FaBars className="text-2xl text-blue-900 cursor-pointer" />
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${mobileOpen ? 'slide-in' : 'slide-out'}`}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <div className="text-2xl font-bold text-blue-900">
            <span className="cursor-pointer">Railway</span>
            <span className="text-blue-700">Baba</span>
          </div>
          <button onClick={toggleMobileMenu}>
            <FaTimes className="text-2xl text-blue-900 cursor-pointer" />
          </button>
        </div>

        <ul className="flex flex-col gap-3 text-lg font-medium text-blue-900 px-6 pt-6 list-none">
          {menuItems.map((item) => (
            <li key={item.name} onClick={toggleMobileMenu}>
              <Link
                href={item.link}
                className={`block text-center w-full py-2 rounded-md transition-all duration-200 ${pathname === item.link
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'hover:bg-blue-50 hover:text-blue-700'
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navigation
