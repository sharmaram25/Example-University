import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, FileText, Settings } from 'lucide-react';

const StudentPortal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">Student Portal</h1>
          <p className="text-lg text-primary">Access Your Academic Resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-navy">Academics</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Course Registration
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Grade Reports
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Class Schedule
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Academic Calendar
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-navy">Schedule</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Upcoming Classes
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Assignment Due Dates
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Exam Schedule
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Office Hours
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-navy">Documents</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Transcripts
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Financial Aid Forms
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Student ID
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Housing Forms
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Settings className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-navy">Settings</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Profile Settings
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Notification Preferences
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Privacy Settings
              </li>
              <li className="flex items-center text-charcoal hover:text-primary transition cursor-pointer">
                <span className="mr-2">•</span> Account Security
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="bg-sage rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Need Help?</h2>
          <p className="text-charcoal mb-6">
            Contact our IT Support team for assistance with the Student Portal
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
          >
            Contact Support
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentPortal;