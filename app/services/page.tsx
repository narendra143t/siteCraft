"use client";

import { motion } from 'framer-motion';
import { ChevronRight, Palette, Smartphone, Zap, Users, MessageSquare, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    {
      category: 'Website Design & Development',
      icon: Palette,
      items: [
        'Premium UI/UX design',
        'Mobile-first responsive layout',
        'Ultra-fast loading optimization',
        'SEO-friendly structure',
        'Modern animations & effects',
        'Clean and professional look'
      ]
    },
    {
      category: 'Education-Focused Features',
      icon: Users,
      items: [
        'Course listing pages',
        'Batch timing display',
        'Admission / enquiry forms',
        'Student registration system',
        'Online enquiry system',
        'Demo class booking',
        'Class schedules',
        'Trainer profiles'
      ]
    },
    {
      category: 'Lead & Conversion Tools',
      icon: MessageSquare,
      items: [
        'Click-to-call button',
        'WhatsApp chat integration',
        'Enquiry forms',
        'Free demo booking',
        'Contact forms',
        'Location map integration'
      ]
    },
    {
      category: 'Marketing & Growth Tools',
      icon: Zap,
      items: [
        'Google Maps integration',
        'SEO optimization',
        'Social media integration',
        'Reviews & testimonials section',
        'Gallery section',
        'YouTube / video embedding'
      ]
    },
    {
      category: 'Hosting & Maintenance',
      icon: Smartphone,
      items: [
        'Domain setup & registration',
        'Hosting & server setup',
        'SSL security certificates',
        'Backup system',
        'Ongoing support & maintenance'
      ]
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
            Our Complete Service Offering
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to establish a powerful online presence for your education business.
          </p>
        </motion.div>

        {/* Services Tree */}
        <div className="space-y-12">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="bg-gray-50 p-6 border-b">
                <div className="flex items-center gap-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">{service.category}</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gray-50 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Industries We Specialize In
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'hotels', 'Coaching Institutes', 'Schools & Colleges', 'Online Educators',
              'Dance Academies', 'Music Classes', 'Driving Schools', 'Fitness Trainers',
              'Yoga Trainers', 'Writing Coaches', 'Spoken English Trainers', 'Coding Institutes',
              'Competitive Exam Coaching', 'Skill Training Businesses'
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </motion.div>
            ))}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your specific needs and create a custom solution for your education business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="/pricing"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Pricing Plans
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}