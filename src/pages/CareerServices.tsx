import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Target } from 'lucide-react';

const CareerServices = () => {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Career Counseling",
      description: "One-on-one guidance for career planning and development."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Resume Workshop",
      description: "Expert help in crafting professional resumes and cover letters."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Interview Preparation",
      description: "Mock interviews and feedback sessions with industry professionals."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Job Search Strategy",
      description: "Techniques for effective job searching and networking."
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
          <h1 className="text-4xl font-bold text-navy mb-4">Career Services</h1>
          <p className="text-lg text-primary">Your Path to Professional Success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-navy">{service.title}</h3>
              <p className="text-charcoal">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-sage rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy">Career Fair</h3>
              <p className="text-charcoal mb-4">
                Meet with top employers from various industries. Bring your resume and dress professionally.
              </p>
              <p className="text-primary">Date: April 15, 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy">Networking Workshop</h3>
              <p className="text-charcoal mb-4">
                Learn effective networking strategies and build professional connections.
              </p>
              <p className="text-primary">Date: April 20, 2024</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-navy mb-6">For Students</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-charcoal">
                <span className="mr-2">•</span> Career Assessment Tools
              </li>
              <li className="flex items-center text-charcoal">
                <span className="mr-2">•</span> Internship Opportunities
              </li>
              <li className="flex items-center text-charcoal">
                <span className="mr-2">•</span> Job Board Access
              </li>
              <li className="flex items-center text-charcoal">
                <span className="mr-2">•</span> Alumni Mentorship Program
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-navy mb-6">For Employers</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-charcoal">
                <span className="mr-2">•</span> Post Job Opportunities
              </li>
              <li className="flex items-center text-charcoal">
                <span className="mr-2">•</span> Campus Recruitment
              </li>
              <li className="flex items-center text-charcoal">
                <span className="mr-2">•</span> Information Sessions
              </li>
              <li className="flex items-center text-charcoal">
                <span className="mr-2">•</span> Partnership Programs
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-6">Schedule an Appointment</h2>
          <p className="text-charcoal mb-8">
            Meet with our career counselors to discuss your professional goals
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
          >
            Book Appointment
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerServices;