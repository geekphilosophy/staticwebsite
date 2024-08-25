import React from 'react'
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Chris Simmons</h1>
        <p className="text-xl text-gray-600"></p>
      </header>
      <main className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">About Me</h2>
          <p className="text-gray-700">
            Tech (Cloud computing, distributed systems, rust), Philosophy, Reading, Learning, Video Games
          </p>
        </section>
        <section className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/chrisesimmons" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
            <i className="fab fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a href="https://twitter.com/geekphilosophy" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition duration-300">
            <i className="fab fa-twitter mr-2"></i> Twitter
          </a>
          <a href="https://github.com/geekphilosophy" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition duration-300">
            <i className="fab fa-github mr-2"></i> GitHub
          </a>
        </section>
      </main>
      <nav className="mt-6">
        <Link to="/dev" className="text-blue-600 hover:text-blue-800">
          Development
        </Link>
      </nav>
      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App