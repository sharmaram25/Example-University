import React from 'react';
import { BookOpen, Users, GraduationCap, FlaskRound as Flask } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "100+ Programs",
      description: "Diverse range of undergraduate and graduate programs across multiple disciplines"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "20,000+ Students",
      description: "Vibrant community of learners from over 50 countries"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "95% Employment Rate",
      description: "Our graduates are highly sought after by top employers"
    },
    {
      icon: <Flask className="h-8 w-8" />,
      title: "Research Excellence",
      description: "Leading research center with state-of-the-art facilities"
    }
  ];

  return (
    <div className="py-16 bg-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy">Why Choose Example University?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-navy">{feature.title}</h3>
              <p className="text-charcoal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;