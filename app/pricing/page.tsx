"use client";

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
  {
    name: 'Starter',
    price: '4999',
    description: 'Perfect for small local businesses and individual service providers',
    features: [
      '5-page responsive website',
      'Mobile-first design',
      'Basic SEO optimization',
      'Contact form & WhatsApp integration',
      'Google Maps location integration',
      '1 year hosting & domain',
      'Basic maintenance support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '6499',
    description: 'Ideal for growing businesses looking to attract more customers',
    features: [
      '10-page custom website',
      'Booking or appointment system',
      'WhatsApp & lead capture integration',
      'Customer testimonials & gallery',
      'Social media links & feeds',
      'Advanced SEO optimization',
      'Priority support',
      '1 year hosting & domain',
      'Monthly maintenance'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '13999',
    description: 'Complete solution for established businesses seeking maximum growth',
    features: [
      'Unlimited pages & full customization',
      'Booking & WhatsApp automation',
      'Advanced lead generation & CRM integration',
      'Online payment integration (if applicable)',
      'Custom animations & premium design',
      'Video & media integration',
      'Advanced analytics & reports',
      '24/7 priority support',
      '2 years hosting & domain',
      'Premium maintenance package'
    ],
    popular: false
  }
];


  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with everything included. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-sm mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            
              { name: 'Content Creation', price: '3000+', desc: 'Professional content writing' },
              { name: 'Logo Design', price: '299+', desc: 'Custom logo design' },
            
            
      
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">How long does it take to build a website?</h3>
              <p className="text-gray-600">Typically 2-4 weeks depending on complexity and your requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Do you provide training?</h3>
              <p className="text-gray-600">Yes, we include basic training and offer advanced training packages.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">What about mobile responsiveness?</h3>
              <p className="text-gray-600">All our websites are mobile-first and fully responsive.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 30-day satisfaction guarantee on all projects.</p>
            </div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-6">
            Get a free consultation and custom quote for your education website.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Free Quote
          </a>
        </motion.div>
      </div>
    </div>
  );
}