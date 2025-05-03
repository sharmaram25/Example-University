import React from 'react';
import { motion } from 'framer-motion';

const Alumni = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-emerald-800 mb-6">Alumni Network</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-700 mb-4">
          Connect with our growing network of successful graduates and stay involved with our community.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Alumni content will be added here */}
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Alumni Stories</h3>
            <p className="text-gray-600">Coming soon: Inspiring stories from our graduates.</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Events</h3>
            <p className="text-gray-600">Stay tuned for upcoming alumni events and reunions.</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Get Involved</h3>
            <p className="text-gray-600">Discover ways to contribute to our alumni community.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Alumni;