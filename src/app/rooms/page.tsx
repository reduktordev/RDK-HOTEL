'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import {
  FiArrowRight,
  FiStar,
  FiUsers,
  FiGrid,
  FiWifi,
  FiCoffee,
  FiZap
} from 'react-icons/fi'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

type Room = {
  id: number
  name: string
  slug: string
  price: number
  size: string
  guests: number
  view: string
  bed: string
  amenities: string[]
  image: string
  description: string
  highlights: string[]
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Executive Suite',
    slug: 'executive-suite',
    price: 599,
    size: '45m²',
    guests: 2,
    view: 'Sea View',
    bed: 'King Bed',
    amenities: ['Free WiFi', 'Smart TV', 'Mini Bar', 'Ocean View'],
    image: '/images/room-1.jpg',
    description:
      'Luxurious suite with panoramic ocean views, perfect for romantic getaways or business travel.',
    highlights: [
      'Private balcony with seating area',
      'Marble bathroom with rain shower',
      '24/7 Room service',
      'Complimentary breakfast'
    ]
  },
  {
    id: 2,
    name: 'Presidential Suite',
    slug: 'presidential-suite',
    price: 899,
    size: '75m²',
    guests: 4,
    view: 'City View',
    bed: 'Super King Bed',
    amenities: ['Private Pool', 'Butler Service', 'Jacuzzi', 'Dining Area'],
    image: '/images/room-2.jpg',
    description:
      'Ultimate luxury experience with private pool and personalized butler service.',
    highlights: [
      'Separate living and dining areas',
      'Personalized check-in/check-out',
      'Complimentary limousine service',
      'VIP amenities'
    ]
  },
  {
    id: 3,
    name: 'Honeymoon Suite',
    slug: 'honeymoon-suite',
    price: 799,
    size: '60m²',
    guests: 2,
    view: 'Ocean View',
    bed: 'Four Poster Bed',
    amenities: [
      'Champagne Service',
      'Spa Bath',
      'Private Terrace',
      'Couples Massage'
    ],
    image: '/images/room-3.jpg',
    description:
      'Romantic retreat designed for newlyweds and anniversary celebrations.',
    highlights: [
      'Heart-shaped Jacuzzi',
      'Daily flower arrangements',
      'Candlelight dinner setup',
      'Late checkout included'
    ]
  }
]

const amenitiesList = [
  {
    icon: <FiWifi className='text-amber-600 text-xl' />,
    title: 'High-Speed WiFi',
    description: 'Fiber-optic internet access'
  },
  {
    icon: <FiCoffee className='text-amber-600 text-xl' />,
    title: 'Premium Coffee',
    description: 'Nespresso machine & selection'
  },
  {
    icon: <FiZap className='text-amber-600 text-xl' />,
    title: 'Smart Room',
    description: 'iPad room control system'
  },
  {
    icon: <FiGrid className='text-amber-600 text-xl' />,
    title: 'Workspace',
    description: 'Ergonomic desk setup'
  },
  {
    icon: <FiStar className='text-amber-600 text-xl' />,
    title: 'Luxury Toiletries',
    description: 'Bulgari bath amenities'
  },
  {
    icon: <FiUsers className='text-amber-600 text-xl' />,
    title: '24/7 Service',
    description: 'Personal concierge'
  }
]



export default function RoomsPage () {
  const [sortBy, setSortBy] = useState('price')

  return (
    <div className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='relative mt-[-65px] h-96'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Luxury Rooms'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent' />
        </div>

        <div className='relative h-full flex items-center max-w-6xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-white max-w-2xl'
          >
            <h1 className='text-5xl font-bold mb-4'>Rooms & Suites</h1>
            <p className='text-xl font-light'>
              Discover our collection of meticulously designed accommodations
              offering unparalleled luxury and comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Sorting */}
      <section className='bg-amber-50 py-8'>
        <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-4 justify-between items-center'>
          <div className='flex items-center gap-4'>
            <span className='text-gray-600'>Sort by:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className='bg-white px-4 py-2 rounded-lg border focus:ring-2 focus:ring-amber-500'
            >
              <option value='price'>Price</option>
              <option value='size'>Room Size</option>
              <option value='guests'>Guests</option>
            </select>
          </div>

          <div className='flex items-center gap-4'>
            <span className='text-gray-600'>Showing {rooms.length} rooms</span>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {rooms
            .slice() // Buat salinan array untuk menghindari mutasi
            .sort((a, b) => {
              if (sortBy === 'price') return a.price - b.price
              if (sortBy === 'size') return parseInt(a.size) - parseInt(b.size)
              return a.guests - b.guests
            })
            .map(room => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow'
              >
                <Image
                  src={room.image}
                  alt={room.name}
                  width={600}
                  height={400}
                  className='w-full h-64 object-cover transform group-hover:scale-105 transition-transform'
                />

                <div className='p-6 bg-white'>
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-xl font-bold text-gray-800'>
                      {room.name}
                    </h3>
                    <span className='bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm'>
                      ${room.price}/night
                    </span>
                  </div>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    <span className='flex items-center gap-1 text-gray-600'>
                      <FiUsers /> {room.guests} Guests
                    </span>
                    <span className='flex items-center gap-1 text-gray-600'>
                      <FiGrid /> {room.size}
                    </span>
                  </div>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm'
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/rooms/${room.slug}`}
                    className='w-full flex items-center justify-center gap-2 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors'
                  >
                    View Details <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Room Amenities
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {amenitiesList.map((amenity, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className='bg-white p-6 rounded-xl shadow-md'
              >
                <div className='w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4'>
                  {amenity.icon}
                </div>
                <h3 className='text-xl font-semibold mb-2'>{amenity.title}</h3>
                <p className='text-gray-600'>{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
