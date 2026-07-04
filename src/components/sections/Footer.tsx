import { personalInfo } from '../../data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-hairline">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-body-sm text-mute">
            © {currentYear} {personalInfo.name} {personalInfo.surname}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
