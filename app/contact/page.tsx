"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('firstName') + ' ' + formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const businessType = formData.get('businessType');
    const message = formData.get('message');

    const whatsappMessage = `New Contact Form Submission\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness Type: ${businessType}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919581621692?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  };
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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to build your dream website? Let's discuss your vision and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your business type</option>
                  <option value="tuition">Tuition Center</option>
                  <option value="coaching">Coaching Institute</option>
                  <option value="dance">Dance Academy</option>
                  <option value="music">Music School</option>
                  <option value="driving">Driving School</option>
                  <option value="fitness">Fitness Training</option>
                  <option value="yoga">Yoga Center</option>
                  <option value="english">Spoken English</option>
                  <option value="coding">Coding Institute</option>
                  <option value="competitive">Competitive Exam Coaching</option>
                  <option value="other">Other Skill Training</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your business and what you're looking for..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:+919581621692" className="text-gray-600 hover:text-blue-600">
                      +91 9581621692
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:SiteCraft@gmail.com" className="text-gray-600 hover:text-blue-600">
                      SiteCraft@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <a href="https://wa.me/919581621692" className="text-gray-600 hover:text-blue-600">
                      +91 9581621692
                    </a>
                  </div>
                </div>
                {/* Address section - commented out for now
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Education Street<br />
                      Learning City, LC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                */}
              </div>
            </div>

            {/* Map Placeholder - commented out for now
            <div className="bg-gray-200 p-8 rounded-lg text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Location</h3>
              <p className="text-gray-600">
                Interactive Google Map will be embedded here showing our office location.
              </p>
            </div>
            */}

            {/* Quick Actions */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="tel:+919581621692"
                  className="block bg-blue-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/919581621692"
                  className="block bg-green-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp Chat
                </a>
                <a
                  href="mailto:SiteCraft@gmail.com"
                  className="block bg-gray-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-gray-700 transition-colors"
                >
                  ✉️ Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gray-50 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How quickly can you start my project?</h3>
              <p className="text-gray-600">We can begin within 1-2 business days after receiving your requirements and deposit.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you work with international clients?</h3>
              <p className="text-gray-600">Yes, we work with education businesses worldwide and handle all time zone differences professionally.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What if I need changes after launch?</h3>
              <p className="text-gray-600">All plans include initial revisions, and we offer maintenance packages for ongoing updates.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can you integrate with my existing systems?</h3>
              <p className="text-gray-600">Yes, we can integrate with various CRM, payment, and management systems commonly used in education.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}