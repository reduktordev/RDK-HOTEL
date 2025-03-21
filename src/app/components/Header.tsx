// app/components/Header.tsx
'use client'

import Link from 'next/link'
import {
  FiHome,
  FiX,
  FiMenu,
  FiCalendar,
  FiUser,
  FiCreditCard
} from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent shadow-none'
      }`}
    >
      <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 group'>
            <FiHome
              className={`text-2xl transition-transform group-hover:scale-110 ${
                isScrolled ? 'text-amber-600' : 'text-white'
              }`}
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <span className='text-amber-600'>RDK</span> Hotel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            <Link
              href='/rooms'
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-600 hover:text-amber-600'
                  : 'text-white hover:text-amber-300'
              }`}
            >
              Rooms & Suites
            </Link>
            <Link
              href='/amenities'
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-600 hover:text-amber-600'
                  : 'text-white hover:text-amber-300'
              }`}
            >
              Amenities
            </Link>
            <Link
              href='/contact'
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-600 hover:text-amber-600'
                  : 'text-white hover:text-amber-300'
              }`}
            >
              Contact
            </Link>
            <button
              onClick={() => setIsBookingOpen(true)}
              className={`ml-4 px-6 py-2 rounded-full transition-colors ${
                isScrolled
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-white text-amber-600 hover:bg-amber-50'
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled
                ? 'text-gray-600 hover:text-amber-600'
                : 'text-white hover:text-amber-300'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden absolute w-full bg-white shadow-lg left-0 right-0'>
            <div className='px-4 pt-2 pb-4 space-y-4'>
              <Link
                href='/rooms'
                className='block px-4 py-2 text-gray-600 hover:bg-amber-50 rounded-lg'
              >
                Rooms & Suites
              </Link>
              <Link
                href='/amenities'
                className='block px-4 py-2 text-gray-600 hover:bg-amber-50 rounded-lg'
              >
                Amenities
              </Link>
              <Link
                href='/contact'
                className='block px-4 py-2 text-gray-600 hover:bg-amber-50 rounded-lg'
              >
                Contact
              </Link>
              <button
                onClick={() => setIsBookingOpen(true)}
                className='block w-full text-center bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700'
              >
                Book Now
              </button>
            </div>
          </div>
        )}

        {/* Booking Popup */}
        <Dialog
          open={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          className='relative z-50'
        >
          <div
            className='fixed inset-0 bg-black/30 backdrop-blur-sm'
            aria-hidden='true'
          />

          <div className='fixed inset-0 flex items-center justify-center p-4'>
            <Dialog.Panel className='w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl'>
              <div className='flex justify-between items-start mb-6'>
                <Dialog.Title className='text-2xl font-bold text-gray-800'>
                  Make a Reservation
                </Dialog.Title>
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className='text-gray-400 hover:text-gray-600'
                >
                  <FiX size={24} />
                </button>
              </div>

              <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Check-in Date */}
                <div className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Check-in Date <span className='text-amber-600'>*</span>
                    </label>
                    <div className='relative'>
                      <input
                        type='date'
                        className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                        required
                      />
                      <FiCalendar className='absolute right-3 top-3.5 text-gray-400' />
                    </div>
                  </div>

                  {/* Adults */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Adults <span className='text-amber-600'>*</span>
                    </label>
                    <div className='relative'>
                      <select
                        className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                        required
                      >
                        <option value='1'>1 Adult</option>
                        <option value='2'>2 Adults</option>
                        <option value='3'>3 Adults</option>
                        <option value='4'>4 Adults</option>
                      </select>
                      <FiUser className='absolute right-3 top-3.5 text-gray-400' />
                    </div>
                  </div>
                </div>

                {/* Check-out Date */}
                <div className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Check-out Date <span className='text-amber-600'>*</span>
                    </label>
                    <div className='relative'>
                      <input
                        type='date'
                        className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                        required
                      />
                      <FiCalendar className='absolute right-3 top-3.5 text-gray-400' />
                    </div>
                  </div>

                  {/* Room Type */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Room Type <span className='text-amber-600'>*</span>
                    </label>
                    <div className='relative'>
                      <select
                        className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                        required
                      >
                        <option value=''>Select Room</option>
                        <option value='executive'>Executive Suite</option>
                        <option value='presidential'>Presidential Suite</option>
                        <option value='honeymoon'>Honeymoon Suite</option>
                      </select>
                      <FiCreditCard className='absolute right-3 top-3.5 text-gray-400' />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className='md:col-span-2'>
                  <button
                    type='submit'
                    className='w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors'
                  >
                    Check Availability
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      </nav>
    </header>
  )
}
