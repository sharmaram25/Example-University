import React from 'react';
import { motion } from 'framer-motion';
import { Book, Clock, Search, BookOpen } from 'lucide-react';

const Library = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">University Library</h1>
          <p className="text-lg text-emerald-700">Your Gateway to Knowledge and Resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-emerald-50 p-6 rounded-lg"
          >
            <Clock className="h-8 w-8 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">Hours</h3>
            <ul className="text-emerald-600">
              <li>Monday - Friday: 7:00 AM - 12:00 AM</li>
              <li>Saturday: 9:00 AM - 9:00 PM</li>
              <li>Sunday: 10:00 AM - 10:00 PM</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-emerald-50 p-6 rounded-lg"
          >
            <Search className="h-8 w-8 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">Find Resources</h3>
            <p className="text-emerald-600">
              Search our extensive collection of books, journals, and digital resources.
            </p>
            <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
              Search Catalog
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-emerald-50 p-6 rounded-lg"
          >
            <Book className="h-8 w-8 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">Study Spaces</h3>
            <p className="text-emerald-600">
              Reserve individual or group study rooms for your academic needs.
            </p>
            <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
              Book a Room
            </button>
          </motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">Digital Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">Online Databases</h3>
              <ul className="space-y-2 text-emerald-600">
                <li>JSTOR</li>
                <li>ProQuest</li>
                <li>Science Direct</li>
                <li>IEEE Xplore</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">E-Books</h3>
              <ul className="space-y-2 text-emerald-600">
                <li>Over 500,000 titles</li>
                <li>Multiple formats supported</li>
                <li>24/7 access</li>
                <li>Mobile-friendly</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">Need Help?</h2>
          <p className="text-gray-600 mb-8">
            Our librarians are here to assist you with your research needs.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Ask a Librarian
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Library;