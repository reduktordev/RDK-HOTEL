'use client'

import { motion } from 'framer-motion'

interface AmenityCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function AmenityCard ({
  icon,
  title,
  description
}: AmenityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'
    >
      <div className='w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4'>
        {icon}
      </div>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </motion.div>
  )
}
export { AmenityCard }