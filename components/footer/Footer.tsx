import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <div className="mb-4">
        <a href="https://twitter.com/yourprofile" className="mx-2 text-gray-400 hover:text-white">Twitter</a>
        <a href="https://github.com/yourprofile" className="mx-2 text-gray-400 hover:text-white">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" className="mx-2 text-gray-400 hover:text-white">LinkedIn</a>
        <a href="https://linkedin.com/in/yourprofile" className="mx-2 text-gray-400 hover:text-white">Facebook</a>
      </div>
      <div className="mb-4">
        <p>Contact: <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white">nomanshk310@gmail.com</a></p>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
