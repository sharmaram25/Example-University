import React from 'react';
import { motion } from 'framer-motion';
import { History, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">About Example University</h1>
          <p className="text-lg text-emerald-700">A Legacy of Excellence in Education</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Our History</h2>
            <div className="flex items-start mb-4">
              <History className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
              <p className="text-gray-600">
                Founded in 1900, Example University has been at the forefront of academic excellence
                for over a century. What began as a small college has grown into a world-renowned
                institution, dedicated to pushing the boundaries of knowledge and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Our Mission</h2>
            <div className="flex items-start mb-4">
              <Target className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
              <p className="text-gray-600">
                Our mission is to educate future leaders, advance knowledge through innovative
                research, and serve our global community. We strive to create an inclusive
                environment where diverse perspectives are valued and celebrated.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-emerald-800">20,000+</div>
              <div className="text-emerald-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-emerald-800">2,000+</div>
              <div className="text-emerald-600">Faculty Members</div>
            </div>
            <div className="text-center">
              <History className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-emerald-800">124</div>
              <div className="text-emerald-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">Join Our Community</h2>
          <p className="text-gray-600 mb-8">
            Become part of our diverse and dynamic community of scholars, researchers, and innovators.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Apply Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;