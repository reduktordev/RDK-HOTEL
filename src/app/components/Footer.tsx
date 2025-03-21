// app/components/Footer.tsx
'use client'
import Link from 'next/link'
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiMail
} from 'react-icons/fi'

export default function Footer () {
  return (
    <footer className='bg-gray-900 text-white pt-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          {/* About Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-amber-400 mb-4'>
              <span className='text-amber-600'>RDK</span> Hotel
            </h3>
            <p className='text-gray-300'>
              Experience world-class hospitality and unmatched luxury in the
              heart of the city.
            </p>
            <div className='flex gap-4 mt-4'>
              <a
                href='#'
                className='p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition'
              >
                <FiFacebook size={20} />
              </a>
              <a
                href='#'
                className='p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition'
              >
                <FiInstagram size={20} />
              </a>
              <a
                href='#'
                className='p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition'
              >
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-amber-400'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-300 hover:text-amber-400 transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/rooms'
                  className='text-gray-300 hover:text-amber-400 transition-colors'
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  href='/amenities'
                  className='text-gray-300 hover:text-amber-400 transition-colors'
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-300 hover:text-amber-400 transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-amber-400'>
              Contact Us
            </h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-2'>
                <FiMapPin className='text-amber-400' />
                <span className='text-gray-300'>
                  123 Premium Avenue, City Center
                </span>
              </li>
              <li className='flex items-center gap-2'>
                <FiPhone className='text-amber-400' />
                <span className='text-gray-300'>+1 (234) 567-8900</span>
              </li>
              <li className='flex items-center gap-2'>
                <FiMail className='text-amber-400' />
                <span className='text-gray-300'>info@rdkhotel.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-amber-400'>
              Newsletter
            </h4>
            <p className='text-gray-300 mb-4'>
              Subscribe for exclusive offers and updates
            </p>
            <form className='flex gap-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-400'
              />
              <button className='bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors'>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-800 py-6 text-center'>
          <p className='text-gray-400'>
            © {new Date().getFullYear()}{' '}
            <span className='text-amber-400'>RDK</span> Hotel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
