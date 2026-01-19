import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SiteCraft</h3>
            <p className="text-gray-400">
              Building powerful online presence for education and skill-training businesses.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-white">Website Design</Link></li>
              <li><Link href="/services" className="hover:text-white">Education Features</Link></li>
              <li><Link href="/services" className="hover:text-white">Lead Tools</Link></li>
              <li><Link href="/services" className="hover:text-white">Marketing Tools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/industries" className="hover:text-white">Tuition Centers</Link></li>
              <li><Link href="/industries" className="hover:text-white">Coaching Institutes</Link></li>
              <li><Link href="/industries" className="hover:text-white">Dance Academies</Link></li>
              <li><Link href="/industries" className="hover:text-white">Fitness Trainers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-white">Get in Touch</Link></li>
              <li><Link href="mailto:inf" className="hover:text-white">SiteCraft@gmail.com</Link></li>
              <li><Link href="tel:+919581621692" className="hover:text-white">+91 9581621692</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 SiteCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}