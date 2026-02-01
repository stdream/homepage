import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { professor, phdStudents, msStudents } from "@/data/team";
import { researchAreasData } from "@/data/research-areas";

const stats = [
  {
    value: projects.length,
    label: "Research Projects",
    bg: "bg-white",
  },
  {
    value: publications.length,
    label: "Publications",
    bg: "bg-[#FFDE59]",
  },
  {
    value: 1 + phdStudents.length + msStudents.length,
    label: "Team Members",
    bg: "bg-[#00D4FF]",
  },
  {
    value: researchAreasData.length,
    label: "Research Areas",
    bg: "bg-white",
  },
];

export default function StatsStrip() {
  return (
    <section className="py-12 sm:py-16 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`${stat.bg} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 text-center`}
            >
              <span className="text-4xl sm:text-5xl font-black text-black block">
                {stat.value}
              </span>
              <p className="text-xs sm:text-sm font-bold uppercase text-black mt-2 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
