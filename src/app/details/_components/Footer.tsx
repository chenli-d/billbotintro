import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} BillBot — AI-First Receipt Recognition</p>
      <p>Team: An-Ni Huang · Chen Li · Si Di · Himanshi Punj</p>
    </footer>
  );
}
