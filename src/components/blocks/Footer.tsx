import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Logo & Description */}
          <div className="max-w-[292px]">
            <Link to="/" className="text-[32px] font-bold text-primary-500 tracking-tight">
              MORENT
            </Link>
            <p className="mt-4 text-base text-secondary-300 leading-relaxed">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16">
            <div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-6">About</h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">How it works</Link></li>
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Featured</Link></li>
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Partnership</Link></li>
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Bussiness Relation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-6">Community</h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Events</Link></li>
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Blog</Link></li>
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Podcast</Link></li>
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Invite a friend</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-6">Socials</h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Discord</Link></li>
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Instagram</Link></li>
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Twitter</Link></li>
                <li><Link to="#" className="text-base text-secondary-300 hover:text-primary-500 transition-colors">Facebook</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-9 border-t border-secondary-200/16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base font-semibold text-secondary-500">
            ©2022 MORENT. All rights reserved
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-base font-semibold text-secondary-500 hover:text-primary-500 transition-colors">
              Privacy & Policy
            </Link>
            <Link to="#" className="text-base font-semibold text-secondary-500 hover:text-primary-500 transition-colors">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
