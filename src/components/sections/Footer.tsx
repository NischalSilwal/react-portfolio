import { personalInfo } from '../../data';

/**
 * Simple footer component
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} {personalInfo.name} {personalInfo.surname}. All rights reserved.
          </p>

          {/* Built with */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with{' '}
            <span className="text-red-500">♥</span>
            {' '}using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
