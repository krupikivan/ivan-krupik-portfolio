import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import SocialLink from "./SocialLink";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Ivan Krupik. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <SocialLink
              href="https://linkedin.com/in/krupikivan"
              icon={<Linkedin className="w-4 h-4" />}
              className="w-10 h-10"
            />
            <SocialLink
              href="https://github.com/krupikivan"
              icon={<Github className="w-4 h-4" />}
              className="w-10 h-10"
            />
            <SocialLink
              href="mailto:krupikivan@gmail.com"
              icon={<Mail className="w-4 h-4" />}
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
