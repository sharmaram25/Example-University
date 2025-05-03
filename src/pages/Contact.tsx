import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-emerald-700">
            We're here to help and answer any questions you might have
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-emerald-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Address</h3>
                  <p className="text-emerald-600">123 University Avenue</p>
                  <p className="text-emerald-600">Example City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Phone</h3>
                  <p className="text-emerald-600">Main: (555) 123-4567</p>
                  <p className="text-emerald-600">Admissions: (555) 123-4568</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Email</h3>
                  <p className="text-emerald-600">info@example.edu</p>
                  <p className="text-emerald-600">admissions@example.edu</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Office Hours</h3>
                  <p className="text-emerald-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-emerald-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-emerald-900 mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-emerald-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-emerald-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-emerald-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-emerald-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-emerald-800">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-emerald-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-800">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-emerald-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-emerald-50 p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Visit Our Campus</h2>
          <p className="text-emerald-700 mb-6">
            Schedule a campus tour to experience Example University firsthand
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Schedule a Tour
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;