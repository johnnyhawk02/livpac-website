import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl font-bold text-indigo-700 mb-2">About Us</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-gray-700">LivPaC (Liverpool Parent and Carers) is the official parent carer forum for Liverpool, representing families of children and young people with special educational needs and disabilities (SEND). We are passionate about empowering parents and carers to have a voice and supporting them to navigate the SEND processes.</motion.p>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7, type: "spring" }} className="bg-white rounded-lg shadow p-4">
        <h2 className="font-semibold text-indigo-600 mb-1">Our Mission</h2>
        <p className="text-gray-700">Empower parents/carers to have a voice and enable them to navigate the special educational needs and/or disabilities processes through awareness, information and confidence training.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.7, type: "spring" }} className="bg-white rounded-lg shadow p-4">
        <h2 className="font-semibold text-indigo-600 mb-1">What We Stand For</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Advocacy for SEND families</li>
          <li>Community support and engagement</li>
          <li>Access to information and resources</li>
          <li>Collaboration with service providers</li>
        </ul>
      </motion.div>
    </section>
  );
}
