import React from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  className = "",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 ${className}`}
  >
    {icon}
  </a>
);

export default SocialLink;
