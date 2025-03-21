// app/page.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import {
  FiArrowRight,
  FiCoffee,
  FiUsers,
  FiStar,
  FiClock,
  FiGrid,
  FiMapPin,
  FiWifi,
  FiZap,
  FiArrowLeft,
  FiX,
  FiCalendar
} from 'react-icons/fi'
import React from 'react'

import { Dialog } from '@headlessui/react'
import { useState } from 'react'

// Data dummy
const rooms = [
  {
    id: 1,
    name: 'Executive Suite',
    price: 599,
    size: '45m²',
    guests: 2,
    view: 'Sea View',
    bed: 'King Bed',
    amenities: ['Free WiFi', 'Smart TV', 'Mini Bar']
  },
  {
    id: 2,
    name: 'Presidential Suite',
    price: 899,
    size: '75m²',
    guests: 4,
    view: 'City View',
    bed: 'Super King Bed',
    amenities: ['Private Pool', 'Butler Service', 'Jacuzzi']
  },
  {
    id: 3,
    name: 'Honeymoon Suite',
    price: 799,
    size: '60m²',
    guests: 2,
    view: 'Ocean View',
    bed: 'Four Poster Bed',
    amenities: ['Champagne Service', 'Rose Petal Decor', 'Couples Massage']
  }
]

const testimonials = [
  {
    id: 1,
    quote:
      "The best hotel experience we've ever had! Every detail was perfect.",
    author: 'Sarah Johnson',
    location: 'London, UK'
  },
  {
    id: 2,
    quote: 'Impeccable service and stunning views. Will definitely return!',
    author: 'Michael Chen',
    location: 'Singapore'
  },
  {
    id: 3,
    quote: 'A true 5-star experience from start to finish. Highly recommended!',
    author: 'Maria Gonzalez',
    location: 'Madrid, Spain'
  }
]

const amenities = [
  {
    icon: <FiStar />,
    title: 'Luxury Spa',
    description: 'Full-service wellness center'
  },
  {
    icon: <FiClock />,
    title: '24/7 Service',
    description: 'Round-the-clock concierge'
  },
  {
    icon: <FiGrid />,
    title: 'Event Spaces',
    description: 'Grand ballroom & meetings'
  },
  {
    icon: <FiWifi />,
    title: 'High-Speed WiFi',
    description: 'Fiber-optic connectivity'
  },
  {
    icon: <FiZap />,
    title: 'Fitness Center',
    description: 'State-of-the-art equipment'
  },
  {
    icon: <FiMapPin />,
    title: 'Prime Location',
    description: 'City center access'
  }
]

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    title: 'Grand Lobby',
    description: 'Our luxurious main lobby with contemporary design'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1500815845799-7748ca339f27',
    title: 'Infinity Pool',
    description: '50m infinity edge pool with panoramic city views'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35',
    title: 'Wellness Spa',
    description: 'Award-winning spa and wellness center'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    title: 'Fine Dining',
    description: 'Michelin-starred restaurant experience'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    title: 'Executive Suite',
    description: 'Luxurious bedroom with premium amenities'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
    title: 'Spa Bathroom',
    description: 'Marble-clad bathroom with heated floors'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1715227200034-536f1ea86dcf',
    title: 'Sky Bar',
    description: 'Rooftop cocktail bar with live music'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1549294413-26f195200c16',
    title: 'Event Venue',
    description: 'Grand ballroom for weddings and events'
  }
]

export default function Home () {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  return (
    <div className='min-h-screen'>
      <Header />
      {/* Hero Section */}
      <section className='relative mt-[-65px] h-screen'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/hero-bg.jpg'
            alt='RDK Hotel'
            fill
            className='object-cover'
            priority
            sizes='100vw'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-900/20' />
        </div>

        <div className='relative h-full flex items-center max-w-6xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-white max-w-2xl relative'
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className='absolute -top-8 -left-8 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2'
            >
              <FiStar className='text-amber-400' />
              <span className='text-sm'>5-Star Luxury Resort</span>
            </motion.div>

            <h1 className='text-5xl font-bold mb-6 leading-tight'>
              Experience Luxury <br />
              <span className='text-amber-400'>Redefined</span>
            </h1>

            <div className='mb-8 flex gap-4 items-center'>
              <div className='flex gap-1 text-amber-400'>
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} />
                ))}
              </div>
              <span className='text-gray-300'>
                Top Rated Hotel in Southeast Asia
              </span>
            </div>

            <p className='text-xl mb-8 font-light max-w-md'>
              Discover unparalleled comfort with panoramic city views,
              world-class amenities, and bespoke service in the heart of the
              metropolis.
            </p>

            <div className='flex gap-4 flex-wrap'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className='bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full flex items-center gap-2 text-lg transition-all'
              >
                Book Now <FiArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className='border border-amber-500 text-amber-500 hover:bg-amber-500/10 px-8 py-4 rounded-full transition-all'
              >
                Virtual Tour
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className='bg-amber-50 py-16'>
        <div className='max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          <StatItem value='250+' label='Luxury Rooms' />
          <StatItem value='5★' label='Guest Rating' />
          <StatItem value='24/7' label='Concierge' />
          <StatItem value='3' label='Restaurants' />
        </div>
      </section>
      {/* Featured Rooms */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <SectionHeader
            title='Signature Accommodations'
            description='Discover our curated collection of premium suites and rooms'
          />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {rooms.map(room => (
              <RoomCard
                key={room.id}
                room={room}
                onBookNow={() => {
                  setSelectedRoom(room)
                  setIsBookingOpen(true)
                }}
              />
            ))}
          </div>

          <div className='text-center mt-12'>
            <CTAButton><a href="./rooms">Explore All Rooms</a></CTAButton>
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <SectionHeader
            title='World-Class Amenities'
            description='Experience luxury at every turn with our premium facilities'
          />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className='bg-white p-8 rounded-xl shadow-lg'
              >
                <div className='w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4'>
                  {React.cloneElement(amenity.icon, {
                    className: 'text-amber-500 text-2xl'
                  })}
                </div>
                <h3 className='text-xl font-bold mb-2'>{amenity.title}</h3>
                <p className='text-gray-600'>{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Dining Experience */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center'>
          <motion.div
            className='flex-1 relative h-96 rounded-2xl overflow-hidden'
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src='/images/dining.jpg'
              alt='Fine Dining'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </motion.div>

          <div className='flex-1 space-y-6'>
            <h2 className='text-4xl font-bold'>Culinary Excellence</h2>
            <p className='text-gray-600 text-lg'>
              Indulge in extraordinary dining experiences:
            </p>
            <ul className='space-y-6'>
              <FeatureItem
                icon={<FiCoffee className='text-white text-xl' />}
                title='International Cuisine'
                description="24-hour in-room dining & chef's table experiences"
              />
              <FeatureItem
                icon='🍷'
                title='Sky Lounge'
                description='Rooftop cocktails with panoramic city views'
              />
              <FeatureItem
                icon='🎂'
                title='Special Events'
                description='Wedding receptions & private dining packages'
              />
            </ul>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <SectionHeader
            title='Guest Experiences'
            description='What our valued guests say about their stay'
          />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <SectionHeader
            title='Our Gallery'
            description='Experience luxury through our lens'
          />

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: 1.05 }}
                className='relative h-48 md:h-64 rounded-xl overflow-hidden cursor-pointer'
                onClick={() => {
                  setActiveImageIndex(index)
                  setIsLightboxOpen(true)
                }}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 50vw, 25vw'
                />
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 p-4'>
                  <p className='text-white text-sm'>{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox Component */}
          <Dialog
            open={isLightboxOpen}
            onClose={() => setIsLightboxOpen(false)}
            className='relative z-50'
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='fixed inset-0 bg-black/90 backdrop-blur-xl'
              aria-hidden='true'
            />

            <div className='fixed inset-0 flex items-center justify-center p-4'>
              <Dialog.Panel className='w-full max-w-6xl'>
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className='relative aspect-video bg-gray-900 rounded-xl overflow-hidden'
                >
                  <Image
                    src={galleryImages[activeImageIndex].src}
                    alt={galleryImages[activeImageIndex].title}
                    fill
                    className='object-contain'
                    sizes='(max-width: 768px) 100vw, 80vw'
                    priority
                  />

                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6 text-white'>
                    <h3 className='text-2xl font-bold'>
                      {galleryImages[activeImageIndex].title}
                    </h3>
                    <p>{galleryImages[activeImageIndex].description}</p>
                  </div>

                  {/* Navigation Arrows */}
                  {activeImageIndex > 0 && (
                    <button
                      onClick={() => setActiveImageIndex(activeImageIndex - 1)}
                      className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all'
                    >
                      <FiArrowLeft className='text-white text-2xl' />
                    </button>
                  )}

                  {activeImageIndex < galleryImages.length - 1 && (
                    <button
                      onClick={() => setActiveImageIndex(activeImageIndex + 1)}
                      className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all'
                    >
                      <FiArrowRight className='text-white text-2xl' />
                    </button>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className='absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all'
                  >
                    <FiX className='text-white text-2xl' />
                  </button>

                  {/* Counter */}
                  <div className='absolute top-4 left-4 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm text-sm'>
                    {activeImageIndex + 1} / {galleryImages.length}
                  </div>
                </motion.div>
              </Dialog.Panel>
            </div>
          </Dialog>

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
                Book {selectedRoom?.name}
              </Dialog.Title>
              <button
                onClick={() => setIsBookingOpen(false)}
                className='text-gray-400 hover:text-gray-600'
              >
                <FiX size={24} />
              </button>
            </div>

            <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
                    <FiUsers className='absolute right-3 top-3.5 text-gray-400' />
                  </div>
                </div>
              </div>

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

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Total Guests <span className='text-amber-600'>*</span>
                  </label>
                  <div className='relative'>
                    <select
                      className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                      required
                    >
                      <option value='1'>1 Guest</option>
                      <option value='2'>2 Guests</option>
                      <option value='3'>3 Guests</option>
                      <option value='4'>4 Guests</option>
                    </select>
                    <FiUsers className='absolute right-3 top-3.5 text-gray-400' />
                  </div>
                </div>
              </div>

              <div className='md:col-span-2'>
                <button
                  type='submit'
                  className='w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors'
                >
                  Confirm Booking - ${selectedRoom?.price}/night
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
      <Footer />
    </div>
  )
}

// Reusable Components
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <motion.div whileHover={{ scale: 1.05 }} className='p-6'>
    <div className='text-4xl font-bold text-amber-600 mb-2'>{value}</div>
    <div className='text-gray-600'>{label}</div>
  </motion.div>
)

const SectionHeader = ({
  title,
  description
}: {
  title: string
  description: string
}) => (
  <div className='text-center mb-16'>
    <h2 className='text-4xl font-bold mb-4'>{title}</h2>
    <p className='text-gray-600 max-w-2xl mx-auto'>{description}</p>
  </div>
)

const RoomCard = ({
  room,
  onBookNow
}: {
  room: typeof rooms[number]
  onBookNow: () => void
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className='group relative overflow-hidden rounded-xl shadow-lg cursor-pointer'
    onClick={onBookNow}
  >
    <Image
      src={`/images/room-${room.id}.jpg`}
      alt={room.name}
      width={600}
      height={800}
      className='w-full h-96 object-cover transform group-hover:scale-105 transition-all'
      sizes='(max-width: 768px) 100vw, 33vw'
    />

    <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent p-6 flex flex-col justify-end'>
      <h3 className='text-xl font-bold text-white mb-2'>{room.name}</h3>

      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-2 text-amber-400'>
          <button
            className='font-bold hover:text-amber-300 transition-colors'
            onClick={e => {
              e.stopPropagation()
              onBookNow()
            }}
          >
            From ${room.price}
          </button>
          <span className='text-sm text-white/80'>/ night</span>
        </div>
        <div className='flex items-center gap-2 text-sm text-white'>
          <FiUsers className='mr-1' /> {room.guests} Guests
        </div>
      </div>
    </div>
  </motion.div>
)

const CTAButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full transition-all flex items-center gap-2 mx-auto'
  >
    {children} <FiArrowRight />
  </motion.button>
)

const FeatureItem = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
  <motion.li
    whileHover={{ x: 5 }}
    className='flex items-center gap-4 bg-white p-4 rounded-lg'
  >
    <div className='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center'>
      {typeof icon === 'string' ? (
        <span className='text-amber-500 text-xl'>{icon}</span>
      ) : (
        React.isValidElement(icon) &&
        React.cloneElement(icon as React.ReactElement<any>, {
          className: 'text-amber-500 text-xl'
        })
      )}
    </div>
    <div>
      <h3 className='font-bold'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  </motion.li>
)

const TestimonialCard = ({
  testimonial
}: {
  testimonial: typeof testimonials[number]
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className='bg-white p-8 rounded-xl shadow-lg relative'
  >
    <div className='text-amber-500 text-4xl absolute top-4 left-4'>“</div>
    <p className='text-gray-600 mb-6'>{testimonial.quote}</p>
    <div className='flex items-center gap-4'>
      <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center'>
        <span className='text-amber-500 font-bold'>
          {testimonial.author[0]}
        </span>
      </div>
      <div>
        <h4 className='font-bold'>{testimonial.author}</h4>
        <p className='text-sm text-gray-500'>{testimonial.location}</p>
      </div>
    </div>
  </motion.div>
)
