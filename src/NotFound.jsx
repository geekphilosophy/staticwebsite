import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-3xl flex-grow flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return Home
          </Link>
        </div>
      </div>
      
      <footer className="mt-auto py-6 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-3xl text-center text-gray-600">
          <p className="text-sm">© {new Date().getFullYear()} Chris Simmons</p>
          <nav className="mt-4 flex justify-center">
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition duration-300">
              Home
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default NotFound