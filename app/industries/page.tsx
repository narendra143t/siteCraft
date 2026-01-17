"use client";

import { motion } from 'framer-motion';
import {GraduationCap, Users, Music, Car, Dumbbell, Languages, Code, Trophy, BookOpen, Palette, Camera, Gamepad2, Heart } from 'lucide-react';

export default function Industries() {
  const industries = [
      {
    name: 'Rental & Travel Services',
    icon: Car,
    description: 'Websites for bike rentals, car rentals, scooters, and travel agencies with booking functionality.',
    features: ['Booking calendar', 'WhatsApp booking', 'Price calculator', 'Location integration']
  },
  {
    name: 'Clinics & Diagnostics',
    icon: Heart,
    description: 'Websites for clinics, diagnostic centers, and hospitals to increase appointments and trust.',
    features: ['Appointment booking', 'Doctor profiles', 'Patient reviews', 'Contact forms']
  },
    {
      name: 'Tuition Centers',
      icon: GraduationCap,
      description: 'Comprehensive websites for math, science, and academic tutoring centers with course listings and enrollment systems.',
      features: ['Online enrollment', 'Subject-wise pages', 'Student progress tracking', 'Parent portals']
    },
    {
      name: 'Coaching Institutes',
      icon: Users,
      description: 'Professional platforms for competitive exam coaching with batch management and test series integration.',
      features: ['Batch scheduling', 'Test series', 'Result tracking', 'Study materials']
    },
    {
      name: 'Dance Academies',
      icon: Music,
      description: 'Beautiful, vibrant websites showcasing dance styles, class schedules, and instructor profiles.',
      features: ['Class booking', 'Video galleries', 'Instructor profiles', 'Event calendars']
    },
    {
      name: 'Music Schools',
      icon: Music,
      description: 'Melodic websites for music education with instrument listings and performance galleries.',
      features: ['Instrument courses', 'Performance videos', 'Music theory', 'Concert bookings']
    },
    {
      name: 'Driving Schools',
      icon: Car,
      description: 'Trust-building sites for driving instruction with course packages and vehicle information.',
      features: ['Course packages', 'Vehicle fleet', 'Instructor profiles', 'Booking system']
    },
    {
      name: 'Fitness Trainers',
      icon: Dumbbell,
      description: 'Dynamic websites for personal trainers with workout plans, client testimonials, and booking systems.',
      features: ['Workout plans', 'Client transformations', 'Online booking', 'Nutrition guides']
    },
    {
      name: 'Yoga Centers',
      icon: Dumbbell,
      description: 'Peaceful, serene websites promoting wellness with class schedules and meditation content.',
      features: ['Class schedules', 'Meditation guides', 'Wellness blog', 'Retreat bookings']
    },
    {
      name: 'Spoken English',
      icon: Languages,
      description: 'Engaging platforms for English language training with interactive content and progress tracking.',
      features: ['Level assessment', 'Interactive lessons', 'Speaking practice', 'Certification']
    },
    {
      name: 'Coding Institutes',
      icon: Code,
      description: 'Modern websites for programming education with course catalogs and project portfolios.',
      features: ['Course catalog', 'Project showcases', 'Coding challenges', 'Career guidance']
    },
    {
      name: 'Competitive Exam Coaching',
      icon: Trophy,
      description: 'Focused websites for exam preparation with study materials, mock tests, and success stories.',
      features: ['Mock tests', 'Study materials', 'Success stories', 'Exam updates']
    },
    {
      name: 'Writing Coaches',
      icon: BookOpen,
      description: 'Creative websites for writing instruction with portfolio showcases and workshop bookings.',
      features: ['Writing workshops', 'Portfolio reviews', 'Publishing guidance', 'Writing tips']
    },
    {
      name: 'Any Skill Training',
      icon: Palette,
      description: 'Custom websites for any skill-based business, from photography to gaming instruction.',
      features: ['Skill assessments', 'Custom curricula', 'Progress tracking', 'Certification']
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
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you teach a skill, we build your website. Specialized solutions for every education business.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <industry.icon className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <ul className="space-y-2">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gray-50 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Education Businesses Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                We understand the unique challenges and opportunities in education and skill training.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Our websites have helped education businesses increase enrollment by up to 300%.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                We don't just build websites - we maintain them and help you grow your business.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create a website that perfectly represents your education business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Your Custom Quote
            </a>
            <a
              href="/portfolio"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}