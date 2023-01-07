import Container from '../components/Container'
import React from 'react'

export default function Index() {
  return (
    <Container>
      <div>
        <h1 className='text-6xl font-bold'>Hello world!</h1>
        <div className='mt-8'>
          <p className='text-gray-600 dark:text-gray-400'>
            This is a sample website using Next.js and Tailwind CSS!
          </p>
        </div>
      </div>
    </Container>
  )
}
