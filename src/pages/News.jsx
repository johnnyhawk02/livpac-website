import React from "react";
import { motion } from "framer-motion";

export default function News() {
  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl font-bold text-indigo-700 mb-2">Social News</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-gray-700">Stay up to date with the latest news, announcements, and social media updates from LivPaC.</motion.p>
      <motion.ul initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7, type: "spring" }} className="list-disc ml-6 text-gray-700">
        <li>Follow us on <a href="https://www.facebook.com/LiverpoolParentAndCarers" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">Facebook</a> and <a href="https://twitter.com/LivPaCL8" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">Twitter</a> for real-time updates.</li>
        <li>Check this page for upcoming events, news, and important information for SEND families in Liverpool.</li>
      </motion.ul>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7, type: "spring" }} className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
        <strong>Latest:</strong> Website content is updated regularly—check back soon for more news!
      </motion.div>
    </section>
  );
}
