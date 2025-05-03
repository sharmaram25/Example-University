import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Clock } from 'lucide-react';

const Academics = () => {
  const departments = [
    {
      name: "Arts & Humanities",
      description: "Explore literature, philosophy, and cultural studies",
      icon: <BookOpen className="h-8 w-8 text-emerald-600" />
    },
    {
      name: "Science & Technology",
      description: "Leading research in natural and computer sciences",
      icon: <Award className="h-8 w-8 text-emerald-600" />
    },
    {
      name: "Business & Economics",
      description: "Preparing future business leaders and economists",
      icon: <Users className="h-8 w-8 text-emerald-600" />
    },
    {
      name: "Engineering",
      description: "Innovation in mechanical, electrical, and civil engineering",
      icon: <Clock className="h-8 w-8 text-emerald-600" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold text-emerald-900 mb-4"
          >
            Academic Excellence
          </motion.h1>
          <p className="text-lg text-emerald-700">
            Discover our world-class academic programs and research opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{dept.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-800">{dept.name}</h3>
              <p className="text-emerald-600">{dept.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">Research Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-emerald-50 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-emerald-800">Undergraduate Research</h3>
              <p className="text-emerald-600">
                Get hands-on experience working with faculty on groundbreaking research projects.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-emerald-50 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-emerald-800">Graduate Studies</h3>
              <p className="text-emerald-600">
                Pursue advanced degrees and contribute to cutting-edge research in your field.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Academics;