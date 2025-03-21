'use client'

import {
  FiWifi,
  FiCoffee,
  FiZap,
  FiGrid,
  FiStar,
  FiUsers,
  FiMessageSquare,
  FiCamera,
  FiPhone
} from 'react-icons/fi'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import AmenityCard from '../components/AmenityCard'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const amenitiesList = [
  {
    icon: <FiWifi />,
    title: 'High-Speed WiFi',
    description:
      'Fiber-optic internet access for seamless browsing and streaming.'
  },
  {
    icon: <FiCoffee />,
    title: 'Premium Coffee',
    description: 'Nespresso machine with a selection of premium coffee blends.'
  },
  {
    icon: <FiZap />,
    title: 'Smart Room',
    description:
      'iPad-controlled room system for lighting, temperature, and entertainment.'
  },
  {
    icon: <FiGrid />,
    title: 'Workspace',
    description:
      'Ergonomic desk setup with high-speed internet for productivity.'
  },
  {
    icon: <FiStar />,
    title: 'Luxury Toiletries',
    description: 'Bulgari bath amenities for a luxurious bathing experience.'
  },
  {
    icon: <FiUsers />,
    title: '24/7 Service',
    description: 'Personal concierge available around the clock for your needs.'
  }
]

const testimonials = [
  {
    name: 'John Doe',
    comment:
      'The amenities here are top-notch! The high-speed WiFi and smart room system made my stay incredibly comfortable.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww'
  },
  {
    name: 'Jane Smith',
    comment:
      'I loved the premium coffee and luxury toiletries. It felt like a home away from home!',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'
  },
  {
    name: 'Michael Johnson',
    comment:
      'The 24/7 service is amazing. The staff is always ready to help with anything you need.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'
  }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1729156638396-47c6a6cffe16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1722480417422-950aafe00bd4?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

export default function AmenitiesPage () {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='relative mt-[-65px] h-96'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Luxury Amenities'
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
            <h1 className='text-5xl font-bold mb-4'>Amenities</h1>
            <p className='text-xl font-light'>
              Explore our world-class amenities designed to enhance your stay
              and provide unparalleled comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {amenitiesList.map((amenity, index) => (
              <AmenityCard
                key={index}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            What Our Guests Say
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className='bg-white p-6 rounded-xl shadow-md'
              >
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className='object-cover'
                    />
                  </div>
                  <h3 className='text-xl font-semibold'>{testimonial.name}</h3>
                </div>
                <p className='text-gray-600'>{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Our Amenities Gallery
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className='relative h-64 rounded-xl overflow-hidden shadow-lg'
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className='object-cover'
                />
              </motion.div>
            ))}
          </div>
          {/* Photo Credit */}
          <div className='mt-8 text-center text-sm text-gray-500'>
            Photos by{' '}
            <a
              href='https://unsplash.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-amber-500 hover:underline'
            >
              Unsplash
            </a>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className='py-16 bg-amber-50'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Experience Luxury?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Book your stay now and enjoy our world-class amenities.
          </p>
          <div className='flex justify-center gap-4'>
            <Link
              href='/rooms'
              className='flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors'
            >
              <FiMessageSquare /> Book Now
            </Link>
            <Link
              href='/contact'
              className='flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg border border-amber-600 hover:bg-amber-50 transition-colors'
            >
              <FiPhone /> Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
