'use client'

import { useState } from 'react'
import {
  FiCheck,
  FiUsers,
  FiCalendar,
  FiArrowLeft,
  FiHome
} from 'react-icons/fi'
import Image from 'next/image'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { rooms } from '../page'
import toast, { Toaster } from 'react-hot-toast' // Untuk popup
import { useParams } from 'next/navigation' // Import useParams dari next/navigation

export default function RoomDetail () {
  // Gunakan useParams() untuk mengakses params
  const params = useParams()
  const slug = params.slug

  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1'
  })

  // Cari room berdasarkan slug
  const room = rooms.find(r => r.slug === slug)

  if (!room) return <div>Room not found</div>

  const calculateNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0 // Validasi tanggal
    const checkIn = new Date(bookingData.checkIn)
    const checkOut = new Date(bookingData.checkOut)
    const timeDiff = checkOut.getTime() - checkIn.getTime()
    return Math.ceil(timeDiff / (1000 * 3600 * 24))
  }

  const totalPrice = room.price * calculateNights()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!bookingData.checkIn || !bookingData.checkOut) {
      toast.error('Please select check-in and check-out dates') // Popup error
      return
    }

    // Popup sukses
    toast.success('Booking successful!', {
      duration: 4000,
      position: 'top-center'
    })
  }

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Toast Popup */}
      <Toaster />

      {/* Breadcrumb Navigation */}
      <nav className='bg-amber-50 py-4'>
        <div className='max-w-6xl mx-auto px-4'>
          <ol className='flex items-center space-x-2'>
            <li>
              <Link
                href='/'
                className='flex items-center text-amber-600 hover:text-amber-700'
              >
                <FiHome className='mr-1' /> Home
              </Link>
            </li>
            <li>
              <span className='text-gray-500'>/</span>
            </li>
            <li>
              <Link
                href='/rooms'
                className='text-amber-600 hover:text-amber-700'
              >
                Rooms
              </Link>
            </li>
            <li>
              <span className='text-gray-500'>/</span>
            </li>
            <li className='text-gray-500'>{room.name}</li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <div className='flex-1 max-w-6xl mx-auto px-4 py-8'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Room Image */}
          <div className='relative h-96 rounded-xl overflow-hidden shadow-lg'>
            <Image
              src={room.image}
              alt={room.name}
              fill
              className='object-cover'
            />
          </div>

          {/* Room Details */}
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold text-gray-800'>{room.name}</h1>
            <p className='text-2xl text-amber-600 font-semibold'>
              ${room.price}/night
            </p>

            <div className='prose text-gray-600'>
              <p>{room.description}</p>
              <ul className='space-y-2'>
                {room.highlights.map((h, i) => (
                  <li key={i} className='flex items-center gap-2'>
                    <FiCheck className='text-green-500' /> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label className='block mb-2 text-gray-700'>
                    Check-in Date
                  </label>
                  <div className='relative'>
                    <input
                      type='date'
                      className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500'
                      value={bookingData.checkIn}
                      onChange={e =>
                        setBookingData({
                          ...bookingData,
                          checkIn: e.target.value
                        })
                      }
                      required
                    />
                    <FiCalendar className='absolute right-3 top-3.5 text-gray-400' />
                  </div>
                </div>

                <div>
                  <label className='block mb-2 text-gray-700'>
                    Check-out Date
                  </label>
                  <div className='relative'>
                    <input
                      type='date'
                      className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500'
                      value={bookingData.checkOut}
                      onChange={e =>
                        setBookingData({
                          ...bookingData,
                          checkOut: e.target.value
                        })
                      }
                      required
                    />
                    <FiCalendar className='absolute right-3 top-3.5 text-gray-400' />
                  </div>
                </div>
              </div>

              <div>
                <label className='block mb-2 text-gray-700'>Guests</label>
                <div className='relative'>
                  <select
                    className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500'
                    value={bookingData.guests}
                    onChange={e =>
                      setBookingData({ ...bookingData, guests: e.target.value })
                    }
                  >
                    {[...Array(room.guests)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} Guest{i > 0 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                  <FiUsers className='absolute right-3 top-3.5 text-gray-400' />
                </div>
              </div>

              <button
                type='submit'
                className='w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors'
              >
                Book Now - ${totalPrice}
                <span className='text-sm ml-2'>
                  ({calculateNights()} nights)
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
