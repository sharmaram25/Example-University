import React from 'react';
import { motion } from 'framer-motion';
import { FlaskRound as Flask, BookOpen, Users, Award } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: <Flask className="h-8 w-8 text-primary" />,
      title: "Environmental Science",
      description: "Studying climate change, renewable energy, and sustainable practices."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Digital Humanities",
      description: "Exploring the intersection of technology and cultural heritage."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Social Sciences",
      description: "Investigating human behavior and societal challenges."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Medical Research",
      description: "Advancing healthcare through innovative studies."
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
          <h1 className="text-4xl font-bold text-navy mb-4">Research at Example University</h1>
          <p className="text-lg text-primary">Advancing Knowledge Through Innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-navy">{area.title}</h3>
              <p className="text-charcoal">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-sage rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Research Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy">For Students</h3>
              <ul className="space-y-2 text-charcoal">
                <li>• Undergraduate Research Programs</li>
                <li>• Graduate Research Assistantships</li>
                <li>• Summer Research Fellowships</li>
                <li>• International Research Exchange</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy">For Faculty</h3>
              <ul className="space-y-2 text-charcoal">
                <li>• Research Grants</li>
                <li>• Collaborative Projects</li>
                <li>• Industry Partnerships</li>
                <li>• Research Facilities Access</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-6">Get Involved in Research</h2>
          <p className="text-charcoal mb-8">
            Join our thriving research community and contribute to groundbreaking discoveries.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
          >
            Contact Research Office
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Research;