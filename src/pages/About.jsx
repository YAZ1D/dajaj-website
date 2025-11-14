import React from "react";
import { CheckCircle2 } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

export default function About() {
  usePageMeta({
    title: "About DAJAJ LLC — Data, Automation & GIS for the Quad Cities",
    description:
      "Learn about DAJAJ LLC: a one-person data analytics consultancy helping transit agencies, zoos, community groups, and small teams in Rock Island & Scott County turn data into clear, practical systems.",
    canonical: "https://dajajdata.com/about/",
    ogTitle: "About DAJAJ LLC — Just and Agile Data Journeys",
    ogDescription:
      "Discover the mission of DAJAJ LLC: accessible, ethical data and automation systems built for local teams, public agencies, and community institutions in the Quad Cities.",
    ogImage: "https://dajajdata.com/android-chrome-512x512.png",
    ogUrl: "https://dajajdata.com/about/"
  });

  return (
    <div className="pt-16">

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-[#003366] to-[#004C99] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About DAJAJ LLC</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A one-person data and automation studio helping teams in Rock Island &amp; Scott County
            replace fragile spreadsheets and paper processes with clear, sustainable systems.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT BLOCK */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>

            <p className="text-gray-700 mb-4">
              DAJAJ LLC grew out of hands-on work with local institutions: a county transit agency
              trying to keep riders informed in real time, a zoo modernizing habitat observations,
              and community partners exploring census and neighborhood data for planning.
            </p>

            <p className="text-gray-700 mb-4">
              With a multidisciplinary background in computer science, applied mathematics, and data
              science, DAJAJ LLC combines engineering, analytics, and design thinking. That means
              not just building dashboards or scripts, but understanding how staff actually work,
              what decisions they need to make, and how to keep systems maintainable.
            </p>

            <p className="text-gray-700 mb-4">
              The name stands for <strong>Data Analytics for Just and Agile Journeys</strong> — a
              reminder that data work should support fair, transparent decisions and adapt as teams,
              communities, and systems change over time.
            </p>

            <p className="text-gray-700">
              Every project is scoped to stay practical: start small, automate the painful parts,
              document clearly, and leave teams with tools they can own long after the build is done.
            </p>
          </div>

          {/* VALUES BOX */}
          <div className="bg-[#E6EEF6] p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Our Values</h3>

            <div className="space-y-4">
              {[
                {
                  label: "Accessibility over complexity",
                  text: "Systems should be understandable by the people who use them — not just by the person who built them."
                },
                {
                  label: "Local impact, real operations",
                  text: "Focus on concrete wins for riders, keepers, staff, and residents in Rock Island & Scott County."
                },
                {
                  label: "Ethical & transparent data use",
                  text: "Be clear about what data is collected, how it’s used, and what limitations it has."
                },
                {
                  label: "Iterate, don’t overwhelm",
                  text: "Small, well-scoped improvements beat big, fragile projects that never ship."
                }
              ].map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#003366] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-800 font-semibold">{value.label}</div>
                    <p className="text-gray-700 text-sm">{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* WHO WE WORK WITH / HOW WE WORK */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Who We Work With</h3>
            <p className="text-gray-700 mb-3">
              DAJAJ LLC is built for teams that feel the gap between “we have data” and
              “we can actually use it.” Typical partners include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Transit agencies needing GTFS-style feeds, kiosks, and ridership analytics.</li>
              <li>Zoos and wildlife organizations modernizing observations and habitat data.</li>
              <li>Community and nonprofit organizations exploring census and neighborhood metrics.</li>
              <li>Small businesses and departments running their operations from spreadsheets.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">How Projects Typically Run</h3>
            <p className="text-gray-700 mb-3">
              Projects are designed to be focused and collaborative:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>Listen & map:</strong> Understand current spreadsheets, tools, and decision points.</li>
              <li><strong>Prototype quickly:</strong> Build a first version of a dashboard, feed, or app using your real data.</li>
              <li><strong>Iterate with your team:</strong> Refine workflows based on how staff actually use the tool.</li>
              <li><strong>Document & hand off:</strong> Provide clear notes, diagrams, and training so your team can maintain it.</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
