'use client'

import { FiSend } from 'react-icons/fi'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function ContactForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all fields')
      return
    }
    toast.success('Message sent successfully!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className='max-w-2xl mx-auto'>
      <Toaster />
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label className='block text-sm font-medium mb-2'>Name</label>
          <input
            type='text'
            className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500'
            placeholder='Your Name'
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Email</label>
          <input
            type='email'
            className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500'
            placeholder='your.email@example.com'
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Message</label>
          <textarea
            className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500'
            rows={5}
            placeholder='Your Message'
            value={formData.message}
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </div>

        <button
          type='submit'
          className='w-full flex items-center justify-center gap-2 bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors'
        >
          <FiSend /> Send Message
        </button>
      </form>
    </div>
  )
}
