import React from "react";
import { ArrowRight, TrendingUp, Brain, Database } from "lucide-react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "DAJAJ LLC — Data Analytics, Automation & GIS for the Quad Cities",
    description:
      "Dashboards, automations, GTFS-style feeds, GIS maps, and analytics for small organizations and agencies in Rock Island & Scott County. Python, SQL, Azure, Supabase, Tableau, and workflow tools for real-world operations.",
    canonical: "https://dajajdata.com/",
    ogTitle: "DAJAJ LLC — Practical Data & Automation for Rock Island & Scott County",
    ogDescription:
      "Modern data engineering, dashboards, GIS, and automation systems built for small teams, transit agencies, zoos, and community organizations in the Quad Cities.",
    ogImage: "https://dajajdata.com/banner.webp",
    ogUrl: "https://dajajdata.com/"
  });

  return (
    <div className="pt-16">

      {/* HERO SECTION */}
      <section
        className="
          relative 
          bg-gradient-to-br from-[#E6EEF6]/70 to-[#F3F6FA]/70 
          py-24
          overflow-hidden
        "
        style={{
          backgroundImage: "url('/banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm">
              Data Analytics for{" "}
              <span className="text-[#003366]">Just and Agile Journeys</span>
            </h1>

            <p className="text-xl text-gray-800 mb-4 max-w-3xl mx-auto">
              DAJAJ LLC helps small teams, public agencies, and community organizations
              turn scattered data into clear dashboards, automated workflows, and
              decision-ready insights — without needing a full-time data department.
            </p>

            <p className="text-sm text-gray-700 mb-8">
              Serving Rock Island &amp; Scott County with practical analytics, GTFS-style
              transit feeds, GIS mapping, and automation built on Python, SQL, and modern
              cloud tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-[#003366] text-white px-8 py-3 rounded-lg font-semibold 
                           hover:bg-[#004C99] transition-colors flex items-center justify-center shadow-md"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                to="/projects"
                className="bg-white text-[#003366] px-8 py-3 rounded-lg font-semibold 
                           border-2 border-[#003366] hover:bg-[#E6EEF6] transition-colors shadow-sm"
              >
                See County Projects
              </Link>
            </div>

            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-block text-sm text-[#003366] underline hover:text-[#004C99]"
              >
                or get in touch to talk through a specific idea
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Makes DAJAJ Different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Grounded in Real Operations",
              desc:
                "Work shaped by transit agencies, zoos, and county data — GTFS-style feeds, ACS demographics, kiosk automations, and field apps that solve day-to-day problems.",
            },
            {
              icon: Brain,
              title: "Full-Stack Data Thinking",
              desc:
                "From Python ETL and SQL models to React/Supabase apps, Azure workflows, Tableau/Power BI dashboards, and Excel/Smartsheet systems that teams actually use.",
            },
            {
              icon: Database,
              title: "Agile & Sustainable Systems",
              desc:
                "Small, iterative projects that respect your staff time and budget — documented, handed off, and ready to grow instead of becoming another abandoned pilot.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <item.icon className="w-12 h-12 text-[#003366] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
