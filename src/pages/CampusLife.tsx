import React from 'react';
import { motion } from 'framer-motion';

const CampusLife = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-emerald-800 mb-8">Campus Life</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Student Activities */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Student Activities</h2>
          <p className="text-gray-600">
            Discover the vibrant student life on campus with numerous clubs, organizations,
            and events that enrich your college experience.
          </p>
        </div>

        {/* Housing */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Housing</h2>
          <p className="text-gray-600">
            Explore our comfortable and modern residential facilities designed to make
            you feel at home while pursuing your education.
          </p>
        </div>

        {/* Athletics */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Athletics</h2>
          <p className="text-gray-600">
            Stay active and competitive with our diverse sports programs and
            state-of-the-art athletic facilities.
          </p>
        </div>

        {/* Dining */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Dining</h2>
          <p className="text-gray-600">
            Enjoy diverse dining options across campus with healthy, delicious meals
            prepared fresh daily.
          </p>
        </div>

        {/* Health & Wellness */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Health & Wellness</h2>
          <p className="text-gray-600">
            Access comprehensive health services and wellness programs designed to
            support your physical and mental well-being.
          </p>
        </div>

        {/* Campus Safety */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Campus Safety</h2>
          <p className="text-gray-600">
            Feel secure with our 24/7 campus security services and emergency
            response systems.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CampusLife;