import React from "react";
import usePageMeta from "../hooks/usePageMeta";

export default function PrivacyPolicy() {

  usePageMeta({
    title: "Privacy Policy — DAJAJ LLC",
    description:
      "Privacy Policy for DAJAJ LLC. Learn how we collect, store, and use information submitted through this website.",
    canonical: "https://dajajdata.com/privacy-policy/",
    ogTitle: "Privacy Policy — DAJAJ LLC",
    ogDescription:
      "See how DAJAJ LLC handles submitted information, including contact form data and email communications.",
    ogImage: "https://dajajdata.com/android-chrome-512x512.png",
    ogUrl: "https://dajajdata.com/privacy-policy/",
  });

  return (
    <div className="pt-16">
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-700 mb-4">
            This Privacy Policy explains how DAJAJ LLC collects, uses, and protects
            the information you submit through our website at <strong>dajajdata.com</strong>.
            Your privacy matters, and we want you to understand how your information is handled.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            When you submit a message through our contact form, we collect:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Your message or inquiry</li>
          </ul>
          <p className="text-gray-700 mb-4">
            This data is handled securely and stored in our private Supabase database.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use your information only to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Respond to your message or request</li>
            <li>Communicate about potential services or projects</li>
            <li>Improve website functionality and service offerings</li>
          </ul>
          <p className="text-gray-700">
            We do <strong>not</strong> sell, share, or rent your information to anyone.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Where Your Data Is Stored</h2>
          <p className="text-gray-700 mb-4">
            All contact form submissions are securely stored in Supabase, a platform that
            uses modern encryption and access controls.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Cookies & Tracking</h2>
          <p className="text-gray-700 mb-4">
            DAJAJ LLC does not use tracking cookies, analytics cookies, advertising cookies,
            or third-party trackers at this time.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            Contact form messages are retained only as long as necessary to provide services
            or maintain communication. You may request deletion at any time.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-4">You may request at any time:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>A copy of your stored information</li>
            <li>Correction or updates to your information</li>
            <li>Deletion of your information</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">7. Contact</h2>
          <p className="text-gray-700 mb-4">
            For privacy or data questions, email us at{" "}
            <a href="mailto:info@dajajdata.com" className="text-[#003366] underline">
              info@dajajdata.com
            </a>.
          </p>

          <p className="text-gray-500 text-sm mt-8">
            Last updated: November 2025
          </p>
        </div>
      </section>
    </div>
  );
}
