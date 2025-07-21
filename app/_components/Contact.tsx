'use client'
import React, { useState } from 'react'


const GITHUB_URL = 'https://github.com/YOUR_GITHUB_USERNAME';
const LINKEDIN_URL = 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME';
const EMAIL = 'your.email@example.com';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    // Basic email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSuccess('Message sent! (Not really, just logged to console)');
    setError('');
    console.log('Contact form submitted:', form);
    setForm({ name: '', email: '', message: '' });
    setShowForm(false);
  };

  return (
    <section
      id='contact'
      className='card relative mx-6 flex flex-col items-center justify-center px-9 py-7 z-30 gap-14 md:gap-9 mb-16 md:mb-10 max-w-full'
    >
      <div className='flex flex-col items-center justify-center gap-5 md:w-full'>
        <h2 className='font-semibold text-2xl md:text-4xl md:max-w-2xl text-center'>
          Want Me on Your Team? Let me Know ✨
        </h2>
        <div className='flex gap-6 mt-2 mb-2'>
          <a
            href={`mailto:${EMAIL}`}
            className='flex items-center gap-2 text-purple-700 hover:underline font-medium'
            title='Email'
          >
            <span role='img' aria-label='email'>📧</span> Email
          </a>
          <a
            href={GITHUB_URL}
            className='flex items-center gap-2 text-gray-300 hover:underline font-medium'
            target='_blank'
            rel='noopener noreferrer'
            title='GitHub'
          >
            <span role='img' aria-label='github'>🐙</span> GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            className='flex items-center gap-2 text-blue-700 hover:underline font-medium'
            target='_blank'
            rel='noopener noreferrer'
            title='LinkedIn'
          >
            <span role='img' aria-label='linkedin'>💼</span> LinkedIn
          </a>
        </div>
        <button
          className='bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded shadow mt-4 transition-colors duration-200'
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? 'Close Form' : 'Email Me'}
        </button>
        {showForm && (
          <form
            className='flex flex-col gap-4 w-full max-w-md mt-4'
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={form.name}
              onChange={handleChange}
              className='border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={form.email}
              onChange={handleChange}
              className='border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400'
              required
            />
            <textarea
              name='message'
              placeholder='Your Message'
              value={form.message}
              onChange={handleChange}
              className='border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400'
              rows={4}
              required
            />
            {error && <div className='text-red-500 text-sm'>{error}</div>}
            {success && <div className='text-green-600 text-sm'>{success}</div>}
            <button
              type='submit'
              className='bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200'
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact