import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Calculator, FlaskRound as Flask, Brain, Palette } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-600" />,
      title: "Literature & Creative Writing",
      description: "Explore classical and contemporary literature while developing your creative writing skills.",
      duration: "4 years",
      credits: 120
    },
    {
      icon: <Code className="h-8 w-8 text-emerald-600" />,
      title: "Computer Science",
      description: "Learn programming, algorithms, and software development with hands-on projects.",
      duration: "4 years",
      credits: 128
    },
    {
      icon: <Calculator className="h-8 w-8 text-emerald-600" />,
      title: "Business Administration",
      description: "Study management, finance, marketing, and entrepreneurship.",
      duration: "4 years",
      credits: 120
    },
    {
      icon: <Flask className="h-8 w-8 text-emerald-600" />,
      title: "Environmental Science",
      description: "Study ecosystems, climate change, and sustainable environmental practices.",
      duration: "4 years",
      credits: 124
    },
    {
      icon: <Brain className="h-8 w-8 text-emerald-600" />,
      title: "Psychology",
      description: "Understand human behavior, mental processes, and psychological research methods.",
      duration: "4 years",
      credits: 120
    },
    {
      icon: <Palette className="h-8 w-8 text-emerald-600" />,
      title: "Fine Arts",
      description: "Develop your artistic skills in painting, sculpture, and digital media.",
      duration: "4 years",
      credits: 120
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-emerald-800 mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">{course.icon}</div>
            <h2 className="text-2xl font-semibold text-emerald-700 mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="border-t pt-4">
              <div className="flex justify-between text-sm text-emerald-600">
                <span>Duration: {course.duration}</span>
                <span>Credits: {course.credits}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;