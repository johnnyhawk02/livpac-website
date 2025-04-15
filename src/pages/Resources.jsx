import React from "react";
import { motion } from "framer-motion";

export default function Resources() {
  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl font-bold text-indigo-700 mb-2">Resources</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-gray-700">We provide a growing collection of helpful resources for families of children and young people with SEND. Check back regularly for updates!</motion.p>
      <motion.ul initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7, type: "spring" }} className="list-disc ml-6 text-gray-700">
        <li>Guides to navigating SEND processes</li>
        <li>Links to local and national support organizations</li>
        <li>Information about benefits and entitlements</li>
        <li>Workshops and training resources</li>
        <li>Frequently asked questions</li>
      </motion.ul>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7, type: "spring" }} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
        <strong>Suggestions?</strong> Please <a href="/contact" className="text-indigo-600 underline">contact us</a> if you have suggestions for resources to add.
      </motion.div>
    </section>
  );
}
