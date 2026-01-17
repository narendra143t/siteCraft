"use client";

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';

export default function About() {
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
            About SiteCraft
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about empowering education businesses with cutting-edge digital solutions.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To democratize professional web presence for education businesses worldwide,
              enabling them to reach more students and grow their impact through technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <Eye className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              A world where every education business, regardless of size, has access to
              premium digital tools that amplify their teaching and business success.
            </p>
          </motion.div>
        </div>

        {/* Why Education Focus */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 p-8 rounded-lg mb-20"
        >
          <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Why We Focus Exclusively on Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Understanding</h3>
              <p className="text-gray-600">
                We understand the unique challenges and opportunities in education businesses.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Features</h3>
              <p className="text-gray-600">
                Built-in tools for course management, enrollment, and student engagement.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Our Business focused websites consistently deliver higher conversion rates.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Problem We Solve */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            The Problem We Solve
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-600 mb-6">
              Most education businesses struggle with outdated websites that don't reflect their quality
              or capture leads effectively. Generic website builders don't understand education-specific needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Low Conversion Rates</h3>
                  <p className="text-gray-600">Websites that look unprofessional and fail to convert visitors into students.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Missing Features</h3>
                  <p className="text-gray-600">No course listings, enrollment forms, or student management tools.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Poor Mobile Experience</h3>
                  <p className="text-gray-600">Sites that don't work well on phones, missing mobile students.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Slow Loading</h3>
                  <p className="text-gray-600">Heavy, unoptimized sites that frustrate visitors and hurt SEO.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Solution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Solution: Premium Education Websites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We build websites that not only look amazing but also drive real business results
            for education entrepreneurs.
          </p>
          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6">
              Join hundreds of education businesses who've increased their enrollment with our websites.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}