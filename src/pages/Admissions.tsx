import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, Users, MessageCircle } from 'lucide-react';

const Admissions = () => {
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
            Join Our Community
          </h1>
          <p className="text-lg text-emerald-700">
            Begin your journey at Example University
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-emerald-900 mb-6">Application Process</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Deadlines</h3>
                  <p className="text-emerald-600">Early Decision: November 1</p>
                  <p className="text-emerald-600">Regular Decision: January 15</p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Requirements</h3>
                  <p className="text-emerald-600">Academic transcripts</p>
                  <p className="text-emerald-600">Letters of recommendation</p>
                  <p className="text-emerald-600">Personal statement</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-emerald-900 mb-6">Financial Aid</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Scholarships</h3>
                  <p className="text-emerald-600">Merit-based awards</p>
                  <p className="text-emerald-600">Need-based grants</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Support</h3>
                  <p className="text-emerald-600">Financial aid counseling</p>
                  <p className="text-emerald-600">Payment plan options</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-emerald-800 text-white p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="mb-6">Take the first step towards your future at Example University</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-100 transition"
          >
            Start Application
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Admissions;