import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Lightbulb,
  Users,
  Database,
  Brain,
  ArrowRight
} from "lucide-react";
import ServiceModal from "../components/ServiceModal";
import usePageMeta from "../hooks/usePageMeta";

export default function Services() {
  usePageMeta({
    title: "Data Services — BI, Predictive Analytics, Automation, Cloud & GIS",
    description:
      "Explore DAJAJ LLC services: business intelligence, predictive analytics, cloud automations, ETL pipelines, workflow systems, GIS, visualization, data strategy, database optimization, and statistical analysis.",
    canonical: "https://dajajdata.com/services/",
    ogTitle: "DAJAJ LLC — Data & Automation Services for Rock Island & Scott County",
    ogDescription:
      "Modern data engineering, dashboards, Python automations, Azure workflows, GIS mapping, workflow tools, and analytics for small teams and public institutions.",
    ogImage: "https://dajajdata.com/android-chrome-512x512.png",
    ogUrl: "https://dajajdata.com/services/"
  });

  const [activeService, setActiveService] = useState(null);

  const services = [
    { id: "bi", title: "Business Intelligence & Dashboards", icon: BarChart3 },
    { id: "predictive", title: "Predictive Analytics & Forecasting", icon: TrendingUp },
    { id: "viz", title: "Data Visualization & Storytelling", icon: Lightbulb },
    { id: "strategy", title: "Data Strategy & Workflow Consulting", icon: Users },
    { id: "database", title: "Database & Pipeline Optimization", icon: Database },
    { id: "statistics", title: "Statistical Analysis & Research", icon: Brain }
  ];

  return (
    <div className="pt-16">
      {/* HEADER */}
      <section className="bg-gray-50 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Practical, modern data and automation solutions for small teams, public-sector agencies,
          and organizations across the Quad Cities.
        </p>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-20 bg-[#F3F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <service.icon className="w-12 h-12 text-[#003366] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">
                  Click to learn more about how this service strengthens operations,
                  decision-making, and automation.
                </p>
                <button
                  onClick={() => setActiveService(service.id)}
                  className="text-[#003366] font-medium flex items-center hover:text-[#004C99]"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== TECHNICAL CAPABILITIES ========================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6">
            Technical Capabilities & Tools
          </h2>

          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
            DAJAJ LLC delivers hands-on technical work across data engineering, analytics,
            automation, GIS, and workflow systems — supporting agencies and organizations
            across Rock Island and Scott County.
          </p>

          {/* CORE CAPABILITIES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-[#F3F6FA] p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#003366]">Data Engineering</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Python ETL pipelines (pandas, automation scripts).</li>
                <li>Supabase/Postgres modeling, indexing, and queries.</li>
                <li>GeoID + TIGER/Line joins for tract-level analysis.</li>
                <li>REST API integrations (Census API, custom endpoints).</li>
                <li>Real-time/near-real-time data processing patterns.</li>
              </ul>
            </div>

            <div className="bg-[#F3F6FA] p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#003366]">Dashboards & BI</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Tableau dashboards for operations and planning.</li>
                <li>Power BI and Looker Studio reporting.</li>
                <li>Excel/Sheets dashboards with Power Query.</li>
                <li>Executive and board-ready reporting packs.</li>
                <li>Interactive map overlays for regional trends.</li>
              </ul>
            </div>

            <div className="bg-[#F3F6FA] p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#003366]">Cloud & Automation</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Microsoft Azure (compute, identity, storage basics).</li>
                <li>Azure DevOps pipelines and repositories.</li>
                <li>Selenium kiosk automation for live displays.</li>
                <li>Windows Task Scheduler / cron-driven jobs.</li>
                <li>Zapier and webhook automation workflows.</li>
              </ul>
            </div>

            <div className="bg-[#F3F6FA] p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#003366]">Web & App Development</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>React + Vite + Tailwind front-ends.</li>
                <li>Supabase (auth, storage, RLS policies).</li>
                <li>Offline-first field apps (e.g., habitat observation).</li>
                <li>API-driven UIs for small internal teams.</li>
                <li>Basic Flutter/Firebase mobile prototypes.</li>
              </ul>
            </div>

            <div className="bg-[#F3F6FA] p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#003366]">Workflow & Collaboration</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Jira Software workflows and basic automation.</li>
                <li>Smartsheet templates, reporting, and dashboards.</li>
                <li>Google Workspace and Excel-based systems.</li>
                <li>Process mapping from paper to digital workflows.</li>
                <li>Ops and workforce reporting pipelines.</li>
              </ul>
            </div>

            <div className="bg-[#F3F6FA] p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#003366]">Analytics & Modeling</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Forecasting for demand, ridership, and trends.</li>
                <li>Statistical modeling and hypothesis testing.</li>
                <li>Trend and behavioral pattern analysis.</li>
                <li>Community and demographic insights using ACS.</li>
                <li>Research-ready outputs for grants or reports.</li>
              </ul>
            </div>
          </div>

          {/* EXTENDED TOOLS BY CATEGORY */}
          <h3 className="text-2xl font-bold text-center mb-8 text-[#003366]">
            Extended Tools by Category
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#F9FBFF] p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-[#003366]">
                Languages & Frameworks
              </h4>
              <p className="text-gray-700 text-sm">
                JavaScript · Java · Dart · Python · R · JavaFX (3D) · Flutter · React ·
                HTML/CSS · basic Node.js.
              </p>
            </div>

            <div className="bg-[#F9FBFF] p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-[#003366]">
                Data Science & Analytics Stack
              </h4>
              <p className="text-gray-700 text-sm">
                pandas · numpy · matplotlib · basic stats packages · R Markdown ·
                R visualization stack · Jupyter / Google Colab.
              </p>
            </div>

            <div className="bg-[#F9FBFF] p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-[#003366]">
                Databases, Cloud & Backend
              </h4>
              <p className="text-gray-700 text-sm">
                SQL · Postgres · Supabase · Firebase · Microsoft Azure · Azure DevOps ·
                REST APIs · authentication flows · cloud storage integrations.
              </p>
            </div>

            <div className="bg-[#F9FBFF] p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-[#003366]">
                Mapping, GIS & 3D
              </h4>
              <p className="text-gray-700 text-sm">
                LeafletJS · ArcGIS (usage/exports) · Google Maps API · map tiles ·
                GTFS-style transit data · Google Earth for context and visuals ·
                3D/tileset workflows (e.g., Blender, JavaFX 3D).
              </p>
            </div>

            <div className="bg-[#F9FBFF] p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-[#003366]">
                Office, Automation & Reporting
              </h4>
              <p className="text-gray-700 text-sm">
                Excel · Power Query · macros/VBA · Google Sheets · Smartsheet ·
                Power BI · Tableau · report automation · Windows Task Scheduler · cron.
              </p>
            </div>

            <div className="bg-[#F9FBFF] p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-[#003366]">
                DevOps, Integration & Workflow
              </h4>
              <p className="text-gray-700 text-sm">
                Git & GitHub · Azure DevOps repos · Jira Software · Smartsheet connectors ·
                Zapier · webhooks · documentation & handoff for small teams.
              </p>
            </div>
          </div>

          {/* INDUSTRIES */}
          <h3 className="text-2xl font-bold text-center mb-4 text-[#003366]">
            Industries Served
          </h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Transit agencies · County governments · Wildlife & zoological research ·
            Community organizations · Non-profits · Small businesses · Academic departments.
          </p>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#003366]
                         text-white font-semibold hover:bg-[#004C99] shadow-md"
            >
              Discuss Your Data Needs
            </a>
          </div>
        </div>
      </section>

      {/* ========================== SERVICE MODALS ========================== */}

      {/* BUSINESS INTELLIGENCE */}
      <ServiceModal
        isOpen={activeService === "bi"}
        onClose={() => setActiveService(null)}
        title="Business Intelligence & Dashboards"
      >
        <ul className="list-disc pl-5 space-y-2">
          <li>Operational dashboards for daily and weekly decision-making.</li>
          <li>Tableau, Power BI, and Excel-based reporting systems.</li>
          <li>KPI frameworks tailored to leadership and frontline teams.</li>
          <li>Multi-source consolidation into reliable BI pipelines.</li>
          <li>Interactive map views for regional or route-based insights.</li>
        </ul>
      </ServiceModal>

      {/* PREDICTIVE ANALYTICS */}
      <ServiceModal
        isOpen={activeService === "predictive"}
        onClose={() => setActiveService(null)}
        title="Predictive Analytics & Forecasting"
      >
        <ul className="list-disc pl-5 space-y-2">
          <li>Forecasting demand, ridership, occupancy, or revenue trends.</li>
          <li>Scenario planning for staffing, service changes, and growth.</li>
          <li>Python-based modeling pipelines that auto-refresh data.</li>
          <li>Support for grant applications and long-term planning reports.</li>
          <li>Clear narratives explaining results and tradeoffs.</li>
        </ul>
      </ServiceModal>

      {/* DATA VISUALIZATION */}
      <ServiceModal
        isOpen={activeService === "viz"}
        onClose={() => setActiveService(null)}
        title="Data Visualization & Storytelling"
      >
        <ul className="list-disc pl-5 space-y-2">
          <li>Turning complex data into simple, readable visuals.</li>
          <li>Interactive maps using Leaflet, GIS data, and centroid joins.</li>
          <li>Board-ready slide decks built from live data sources.</li>
          <li>Cleanup of existing reports to focus on what matters.</li>
          <li>Visuals aligned with your organization's branding and tone.</li>
        </ul>
      </ServiceModal>

      {/* DATA STRATEGY */}
      <ServiceModal
        isOpen={activeService === "strategy"}
        onClose={() => setActiveService(null)}
        title="Data Strategy & Workflow Consulting"
      >
        <ul className="list-disc pl-5 space-y-2">
          <li>Mapping how data moves through your organization today.</li>
          <li>Step-by-step plans to move from paper to digital systems.</li>
          <li>
            Tool selection and configuration: Excel, Google Workspace,
            Smartsheet, Jira, and low-code/web apps.
          </li>
          <li>Documentation, basic training, and handoff for staff.</li>
          <li>Lightweight governance so data stays consistent and trusted.</li>
        </ul>
      </ServiceModal>

      {/* DATABASE / PIPELINES */}
      <ServiceModal
        isOpen={activeService === "database"}
        onClose={() => setActiveService(null)}
        title="Database & Pipeline Optimization"
      >
        <ul className="list-disc pl-5 space-y-2">
          <li>Supabase/Postgres structure, indexing, and performance tuning.</li>
          <li>Refactoring ETL pipelines for speed and data quality.</li>
          <li>Excel/Sheets → SQL transitions for growing teams.</li>
          <li>Automated jobs using Python, cron, and cloud schedulers.</li>
          <li>Data validation rules and structure for long-term reliability.</li>
        </ul>
      </ServiceModal>

      {/* STATISTICS */}
      <ServiceModal
        isOpen={activeService === "statistics"}
        onClose={() => setActiveService(null)}
        title="Statistical Analysis & Research"
      >
        <ul className="list-disc pl-5 space-y-2">
          <li>Trend analysis, comparisons, and significance testing.</li>
          <li>Exploring behavioral, operational, or community patterns.</li>
          <li>R and Python-based analysis with clear writeups.</li>
          <li>Applied insights for budgeting, staffing, and programs.</li>
          <li>Outputs suitable for academic partners, grants, or reports.</li>
        </ul>
      </ServiceModal>
    </div>
  );
}
