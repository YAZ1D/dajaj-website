import React, { useState } from "react";
import { Mail, Phone, Users, CheckCircle2 } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { supabase } from "../lib/supabaseClient";

export default function Contact() {
  // ⭐ Page SEO
  usePageMeta({
    title: "Contact DAJAJ LLC — Let's Talk About Your Data & Automation",
    description:
      "Contact DAJAJ LLC to discuss dashboards, ETL pipelines, GTFS-style transit feeds, GIS mapping, and automation for small teams, agencies, and community organizations in the Quad Cities.",
    canonical: "https://dajajdata.com/contact/",
    ogTitle: "Contact DAJAJ LLC — Data & Automation Consulting in the Quad Cities",
    ogDescription:
      "Reach out to DAJAJ LLC to explore practical dashboards, automation, GIS, and analytics systems built for real operations in Rock Island & Scott County.",
    ogImage: "https://dajajdata.com/android-chrome-512x512.png",
    ogUrl: "https://dajajdata.com/contact/",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // ⭐ Supabase INSERT handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setSubmitted(false);

    const { name, email, message } = formData;

    const { error: insertError } = await supabase
      .from("contact_messages")
      .insert([{ name, email, message }]);

    if (insertError) {
      console.error(insertError);
      setError(true);
      return;
    }

    // Reset form + success message
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-16">

      {/* HEADER */}
      <section className="bg-gradient-to-r from-[#003366] to-[#004C99] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Share a project idea, a messy spreadsheet, or a transit/zoo/community data question —
            DAJAJ LLC can help you turn it into something clear and usable.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* FORM SECTION */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

            <p className="text-gray-700 mb-4">
              A short description is enough to start — it’s okay if things feel unorganized right now.
              You can attach examples, spreadsheets, or additional context later in the conversation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  placeholder="For example: GTFS feed cleanup, zoo observation app, dashboard request, or help with a specific dataset."
                  required
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#003366] text-white px-8 py-3 rounded-lg font-semibold 
                           hover:bg-[#004C99] transform hover:scale-[1.02] active:scale-[0.99] 
                           transition-colors transition-transform"
              >
                Send Message
              </button>

              {/* SUCCESS MESSAGE */}
              {submitted && (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center transition-opacity duration-700">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Thank you — your message was received. You’ll usually get a reply within 1–2 business days.
                </div>
              )}

              {/* ERROR MESSAGE */}
              {error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center transition-opacity duration-700">
                  Something went wrong submitting the form. You can also email{" "}
                  <a href="mailto:info@dajajdata.com" className="underline ml-1">
                    info@dajajdata.com
                  </a>.
                </div>
              )}

              <p className="text-xs text-gray-500">
                Currently booking data and automation projects for late 2025 and early 2026.
              </p>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">

              {/* EMAIL */}
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#003366] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@dajajdata.com" className="hover:underline">
                      info@dajajdata.com
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Best for detailed requests, attachments, and follow-up documents.
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#003366] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+13127726271" className="hover:underline">
                      (312) 772-6271
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Short calls can be scheduled after an initial email or form message.
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-start">
                <Users className="w-6 h-6 text-[#003366] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Typical Response Window</h3>
                  <p className="text-gray-600">
                    Monday – Friday: 9:00 AM – 5:00 PM (Central Time)
                  </p>
                  <p className="text-gray-500 text-sm">
                    Messages outside these hours are still welcome — they’ll be answered the next business day whenever possible.
                  </p>
                </div>
              </div>

            </div>

            {/* WHY WORK WITH DAJAJ */}
            <div className="mt-12 p-6 bg-[#E6EEF6] rounded-xl">
              <h3 className="text-xl font-bold mb-4">Why Reach Out to DAJAJ LLC?</h3>

              <ul className="space-y-3">
                {[
                  "You need dashboards, maps, or automations, but don’t have an in-house data team.",
                  "You’re working with transit, wildlife, or community data and want someone who understands those contexts.",
                  "You’d like to move away from fragile spreadsheets into something more reliable — without a huge software project.",
                  "You value clear documentation, honest timelines, and systems your staff can maintain."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#003366] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
