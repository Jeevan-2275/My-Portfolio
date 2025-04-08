import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceTimeline = () => {
  const experiences = [
    { title: "Project Work", date: "2024", desc: "Built personal projects" },
    { title: "Open Source", date: "2025", desc: "Contributed to repos" },
  ];

  useEffect(() => {
    gsap.utils.toArray(".timeline-item").forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-400 h-full"></div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`timeline-item flex items-center mb-12 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`w-1/2 p-4 bg-gray-900 rounded-lg shadow-lg border border-cyan-400 ${
              index % 2 === 0 ? "mr-4 text-right" : "ml-4"
            }`}
          >
            <h3 className="text-xl font-semibold text-cyan-400">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.date}</p>
            <p>{exp.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;