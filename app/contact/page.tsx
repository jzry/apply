'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="bg-white pt-35 lg:pt-35 max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-5xl text-black font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Send a message or call{" "}
          <img
            src="/images/whitenumber.png"
            className="inline-block h-4 align-text-bottom"
            alt="Phone number"
          />{" "}
          and we'll get back to you within 24 hours.
        </p>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              Thank you! We received your message and will get back to you soon.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">
              {errorMessage}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-black block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              required
              disabled={isSubmitting}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:bg-gray-100"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="text-black block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              disabled={isSubmitting}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:bg-gray-100"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="text-black block text-sm font-medium mb-2">Message</label>
            <textarea
              required
              rows={6}
              disabled={isSubmitting}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:bg-gray-100"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer w-full bg-gradient-to-t from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold transition-colors hover:bg-gradient-to-bl from-red-450 to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  )
}