import React from 'react';
import { Calendar } from 'lucide-react';

const News = () => {
  const news = [
    {
      date: "March 15, 2024",
      title: "New Research Center Opening",
      description: "State-of-the-art facility focused on sustainable technology research"
    },
    {
      date: "March 10, 2024",
      title: "International Conference 2024",
      description: "Annual gathering of global academic leaders and researchers"
    },
    {
      date: "March 5, 2024",
      title: "Student Achievement Awards",
      description: "Celebrating outstanding academic and extracurricular accomplishments"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy">Latest News & Events</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="border border-primary/10 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="bg-sage h-48"></div>
              <div className="p-6">
                <div className="flex items-center text-primary mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">{item.title}</h3>
                <p className="text-charcoal mb-4">{item.description}</p>
                <a href="#" className="text-accent font-semibold hover:text-accent/80">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;