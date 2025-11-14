import React from "react";
import { X } from "lucide-react";

export default function ServiceModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose} // Close on background click
    >
      {/* MODAL BOX */}
      <div
        className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-xl mx-4 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-4 text-[#003366]">{title}</h2>

        {/* CONTENT */}
        <div className="text-gray-700 space-y-3">{children}</div>
      </div>

      {/* Fade In Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.97); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.18s ease-out;
          }
        `}
      </style>
    </div>
  );
}
