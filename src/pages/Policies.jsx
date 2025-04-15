import React from "react";
import { motion } from "framer-motion";

export default function Policies() {
  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl font-bold text-indigo-700 mb-2">Policies</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-gray-700">LivPaC is committed to transparency and good governance. Here you will find our key organizational policies and governance documents.</motion.p>
      <motion.ul initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7, type: "spring" }} className="list-disc ml-6 text-gray-700">
        <li>Safeguarding Policy</li>
        <li>Data Protection & Privacy Policy</li>
        <li>Complaints Procedure</li>
        <li>Code of Conduct</li>
        <li>Constitution & Governance</li>
        <li>And more (coming soon)</li>
      </motion.ul>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7, type: "spring" }} className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
        <strong>Need a document?</strong> Please <a href="/contact" className="text-indigo-600 underline">contact us</a> to request copies of our policies.
      </motion.div>
    </section>
  );
}
