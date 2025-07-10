import React from "react";
import { Server, Video, Wrench } from "lucide-react";
import type { Project } from "../types";

const HomeLab: React.FC = () => {
  const projects: Project[] = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Personal Cloud Infrastructure",
      description:
        "Built a comprehensive home lab environment centered around a TrueNAS server with Cloudflare proxy integration for secure remote access. Implemented a self-hosted cloud ecosystem featuring:",
      features: [
        "Storage & Backup Systems: Multi-tiered backup strategy using Raspberry Pi devices for local and remote rsync operations, complemented by custom NAS server and MinIO S3-compatible object storage",
        "Media & File Management: Deployed Immich as self-hosted photo management solution (replacing iCloud Photos) and Nextcloud as complete cloud drive alternative",
        "Home Automation: Integrated Home Assistant for daily automation tasks and smart home management",
      ],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Mobile Security & Surveillance System",
      description:
        "Designed and implemented a solar-powered vehicle security camera system featuring:",
      features: [
        "Hardware: Dual-camera setup (front/rear) with 24/7 recording capability powered by LiFePO4 battery technology and solar panel charging",
        "Connectivity: Android device configured with Cloudflare tunnel and TinyCam Pro for worldwide remote access",
        "Infrastructure: Complete off-grid solution combining renewable energy, persistent storage, and secure remote monitoring",
      ],
    },
  ];

  const skills = [
    "Network Administration",
    "Container Orchestration",
    "Self-Hosting Solutions",
    "Backup & Disaster Recovery",
    "IoT Device Management",
    "Home Automation",
    "Solar Power Systems",
    "Battery Management",
    "VPN/Tunnel Configuration",
    "Remote Access Solutions",
    "Linux System Administration",
    "Cloudflare Integration",
  ];

  return (
    <section id="homelab" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Home Lab & Infrastructure Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
            Beyond professional development, I'm passionate about building and
            maintaining personal infrastructure projects that showcase my
            expertise in system administration, IoT, and cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">▸</span>
                    <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mr-6">
              <Wrench className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Technical Skills Demonstrated</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLab;
