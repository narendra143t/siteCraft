"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Elite Math Tuition Center',
      category: 'Tuition Center',
      description: 'Complete website redesign with online enrollment system and student portal.',
      image: '/api/placeholder/400/300', // Placeholder
      results: '300% increase in online inquiries',
      link: '#'
    },
    {
      title: 'Dance Academy Pro',
      category: 'Dance Academy',
      description: 'Vibrant website with class booking, video gallery, and instructor profiles.',
      image: '/api/placeholder/400/300',
      results: '200% increase in class bookings',
      link: '#'
    },
    {
      title: 'CodeMasters Institute',
      category: 'Coding Institute',
      description: 'Modern platform with course catalog, student projects, and career guidance.',
      image: '/api/placeholder/400/300',
      results: '150% increase in enrollments',
      link: '#'
    },
    {
      title: 'FitLife Personal Training',
      category: 'Fitness Training',
      description: 'Dynamic website showcasing transformations, workout plans, and client success stories.',
      image: '/api/placeholder/400/300',
      results: '250% increase in client inquiries',
      link: '#'
    },
    {
      title: 'English Excellence Academy',
      category: 'Spoken English',
      description: 'Interactive platform with level assessment, online lessons, and progress tracking.',
      image: '/api/placeholder/400/300',
      results: '180% increase in student registrations',
      link: '#'
    },
    {
      title: 'Competitive Edge Coaching',
      category: 'Exam Coaching',
      description: 'Focused website with mock tests, study materials, and success rate tracking.',
      image: '/api/placeholder/400/300',
      results: '220% increase in admissions',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results for real education businesses. See how we've transformed their online presence.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <Eye className="w-12 h-12 mx-auto mb-2" />
                  <p>Website Preview</p>
                  <p className="text-sm">(Image placeholder)</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-800 font-semibold text-sm">{project.results}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gray-50 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-600">Websites Built</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">250%</div>
              <p className="text-gray-600">Average Enrollment Increase</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Industries Served</p>
            </div>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and target audience.' },
              { step: '02', title: 'Design', desc: 'Create stunning designs that reflect your brand and convert visitors.' },
              { step: '03', title: 'Development', desc: 'Build fast, secure websites with all the features you need.' },
              { step: '04', title: 'Launch & Support', desc: 'Deploy your site and provide ongoing maintenance and growth support.' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 bg-blue-600 text-white p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-6">
            Let's create a website that drives real results for your education business.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
}