import Link from "next/link";

interface ResearchHeroProps {
  title: string;
  titleKr: string;
  description: string;
  accentColor: string;
}

export default function ResearchHero({
  title,
  titleKr,
  description,
  accentColor,
}: ResearchHeroProps) {
  return (
    <section className="py-16 sm:py-24 bg-white border-b-4 border-black" style={{ borderLeftWidth: "8px", borderLeftColor: accentColor, borderLeftStyle: "solid" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm font-bold text-black">
            <li>
              <Link href="/" className="hover:bg-[#FFDE59] px-1 transition-colors uppercase">
                Home
              </Link>
            </li>
            <li className="font-black">/</li>
            <li>
              <Link href="/#research" className="hover:bg-[#FFDE59] px-1 transition-colors uppercase">
                Research
              </Link>
            </li>
            <li className="font-black">/</li>
            <li className="uppercase" style={{ color: accentColor === "#000000" ? "#00D4FF" : accentColor }}>{title}</li>
          </ol>
        </nav>

        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight mb-2">
            {title}
          </h1>
          <p className="text-lg sm:text-xl font-bold text-black/70 mb-4">
            {titleKr}
          </p>
          <p className="text-black/60 text-base sm:text-lg max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
