import React from 'react'
import Navbar from '../Navbar'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <div className="max-w-lg mx-auto">
          <form>
            <div className="mb-4 ">
              <label className="block mb-2 font-semibold " htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md hover:shadow-2xl hover:shadow-gray-500"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold hover:shadow-2xl hover:shadow-gray-500" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md hover:shadow-2xl hover:shadow-gray-500"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-md hover:shadow-2xl hover:shadow-gray-500"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact