'use client'

import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ContactPage () {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='relative mt-[-65px] h-96'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Contact Us'
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
            <h1 className='text-5xl font-bold mb-4'>Contact Us</h1>
            <p className='text-xl font-light'>
              We're here to help! Reach out to us for any inquiries or
              assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Address */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-md text-center'
          >
            <div className='w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <FiMapPin className='text-amber-600 text-xl' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Address</h3>
            <p className='text-gray-600'>123 Luxury Street, City, Country</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-md text-center'
          >
            <div className='w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <FiPhone className='text-amber-600 text-xl' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Phone</h3>
            <p className='text-gray-600'>+123 456 7890</p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-md text-center'
          >
            <div className='w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <FiMail className='text-amber-600 text-xl' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Email</h3>
            <p className='text-gray-600'>info@luxuryhotel.com</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-8'>Our Location</h2>
          <div className='relative h-96 rounded-xl overflow-hidden shadow-lg'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531664!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a7c5b4a1a4!2sLuxury%20Hotel!5e0!3m2!1sen!2sus!4v1622549400000!5m2!1sen!2sus'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
