import React from "react";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl font-bold text-indigo-700 mb-2">Events Calendar</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-gray-700">Join us for regular coffee mornings, support groups, and special events across Liverpool. Check back often for new dates and venues!</motion.p>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7, type: "spring" }} className="bg-white rounded-lg shadow p-4">
        <h2 className="font-semibold text-indigo-600 mb-1">Upcoming Events</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Coffee & Connect mornings/afternoons at Blessed Sacrament, Liverpool Lighthouse, Team Oasis, and more</li>
          <li>Support sessions at Clubmoor Children's Centre</li>
          <li>Workshops and training sessions (see Resources)</li>
          <li>See our <a href="/news" className="text-indigo-600 underline">Social News</a> for the latest updates</li>
        </ul>
      </motion.div>
    </section>
  );
}
