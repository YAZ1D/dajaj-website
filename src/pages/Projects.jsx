import React from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function Projects() {

  usePageMeta({
    title: "Projects — Transit Automation, Zoo Platform, Demographics Explorer",
    description:
      "See DAJAJ LLC projects: county transit automation, zoo habitat observation platform, and community demographics pipelines for Rock Island and Scott counties.",
    canonical: "https://dajajdata.com/projects/",

    ogTitle: "DAJAJ LLC Projects — Data Systems for the Quad Cities",
    ogDescription:
      "Transit automation, zoo observation platforms, and community demographics pipelines developed for Rock Island & Scott County.",
    ogImage: "https://dajajdata.com/android-chrome-512x512.png",
    ogUrl: "https://dajajdata.com/projects/"
  });

  return (
    <div className="pt-16">

      {/* HEADER */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">County Impact</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Practical data systems for Rock Island County and Scott County — public transit, 
            the zoological park, and community analytics — built quickly, explained clearly, 
            and ready for real use.
          </p>
        </div>
      </section>

      {/* CASE CARDS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">

          {/* TRANSIT PROJECT */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">County Transit Operations Automation</h3>
                  <p className="text-[#003366] font-medium">Rock Island County • Transit</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  {["Python", "PowerShell", "Selenium", "Tableau", "SQL", "Blender/3D Tiles"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="bg-[#E6EEF6] text-[#003366] px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Unified automation + visualization stack for a county transit agency: ETL jobs that
                produce GTFS-style feeds with geometry checks, kiosk automation that keeps public
                maps centered on moving vehicles, and a live 3D view for ops review.
              </p>

              <ul className="text-gray-700 list-disc pl-6 space-y-1">
                <li>Daily ETL with validation + archiving; scheduled on Windows Task Scheduler/cron.</li>
                <li>Kiosk auto-centering and zoom via Selenium to keep riders oriented.</li>
                <li>Ridership dashboards by week/route; optional 3D animation of vehicle positions.</li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://yazidmouayn.vercel.app/project/transit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg 
                             border-2 border-[#003366] text-[#003366] hover:bg-[#E6EEF6] font-semibold"
                >
                  View technical notes
                </a>

                {/* FIXED CTA — LINK TO CONTACT */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg 
                             bg-[#003366] text-white hover:bg-[#004C99] font-semibold"
                >
                  Upgrade our transit dashboards and GTFS automation
                </Link>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                All examples are illustrative/anonymized.
              </p>
            </div>
          </div>

          {/* ZOO PROJECT */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Zoo Habitat Observation Platform</h3>
                  <p className="text-[#003366] font-medium">Rock Island County • Zoological Park</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  {["React", "Vite", "Tailwind", "Supabase", "Leaflet", "Offline-first"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="bg-[#E6EEF6] text-[#003366] px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                A touch-friendly web app that replaces paper ethograms: log behaviors, edit
                burrow/terrain in real time, and sync to a central database—works great on iPads in
                the field and desktops in the office.
              </p>

              <ul className="text-gray-700 list-disc pl-6 space-y-1">
                <li>Standardized observation forms → clean, queryable records in Supabase.</li>
                <li>Map edits (Leaflet) for habitat features; offline caching with background sync.</li>
                <li>Keeper-friendly UI and quick-add shortcuts to speed observation rounds.</li>
              </ul>

              <div className="mt-6 flex gap-3">
                <span
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg 
                             border-2 border-[#003366] text-[#003366] bg-white cursor-default"
                >
                  Currently in development — UI preview available upon request.
                </span>

                {/* FIXED CTA — LINK TO CONTACT */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg 
                             bg-[#003366] text-white hover:bg-[#004C99] font-semibold"
                >
                  Request a demo
                </Link>
              </div>

            </div>
          </div>

          {/* COMMUNITY ANALYTICS */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Quad Cities Demographics Explorer</h3>
                  <p className="text-[#003366] font-medium">
                    Rock Island County &amp; Scott County • Community Analytics
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  {["Python", "Census API (ACS)", "FIPS/GEOID joins", "Tableau"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="bg-[#E6EEF6] text-[#003366] px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                A reproducible pipeline that pulls tract-level ACS data, builds GEOID-based joins,
                and exports a tidy CSV for Tableau storytelling—income, education, tenure, and
                foreign-born share across the metro.
              </p>

              <ul className="text-gray-700 list-disc pl-6 space-y-1">
                <li>Scripted per-county pulls (Rock Island, Scott); adaptable for any U.S. metro.</li>
                <li>Clean joins to TIGER centroids for precise tract mapping and labeling.</li>
                <li>Actionable, privacy-safe visuals for community planning and outreach.</li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://yazidmouayn.vercel.app/project/quad-cities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg 
                             border-2 border-[#003366] text-[#003366] hover:bg-[#E6EEF6] font-semibold"
                >
                  Explore the method
                </a>

                {/* FIXED CTA — LINK TO CONTACT */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg 
                             bg-[#003366] text-white hover:bg-[#004C99] font-semibold"
                >
                  Start a community analysis
                </Link>
              </div>

            </div>
          </div>

        </div>

        <p className="text-xs text-gray-500 mt-8">
          Notes: partners named where permitted; data shown on this site is illustrative/anonymized.
        </p>
      </section>

    </div>
  );
}
