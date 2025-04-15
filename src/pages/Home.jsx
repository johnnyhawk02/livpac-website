import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: "spring" }} className="text-center mt-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-2">Welcome to LivPaC</h1>
        <p className="text-lg text-gray-700 mb-4">Liverpool Parent and Carers (LivPaC) is the official parent carer forum for Liverpool, representing families of children and young people with special educational needs and disabilities (SEND).</p>
        <motion.p initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-md text-gray-600">Empowering parents and carers to have a voice and navigate SEND processes through awareness, information and confidence training.</motion.p>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, type: "spring" }} className="bg-white rounded-lg shadow p-6">
          <h2 className="font-bold text-indigo-600 mb-2">Our Services</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Coffee Mornings and Support Groups</li>
            <li>Training and Workshops</li>
            <li>One-to-One Support</li>
            <li>Advocacy and Representation</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, type: "spring", delay: 0.1 }} className="bg-white rounded-lg shadow p-6">
          <h2 className="font-bold text-indigo-600 mb-2">Contact Us</h2>
          <p className="text-gray-700">The Granby Centre, 79 Granby Street, Liverpool, L8 2TU</p>
          <p className="text-gray-700">Phone: +44 7504 544 638 / 0151 727 5271</p>
          <p className="text-gray-700">Email: info@LivPaC.org.uk</p>
          <div className="flex gap-3 mt-2">
            <a href="https://www.facebook.com/LiverpoolParentAndCarers" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-transform duration-200 transform hover:scale-110" aria-label="Facebook"><svg className="h-6 w-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg></a>
            <a href="https://twitter.com/LivPaCL8" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-transform duration-200 transform hover:scale-110" aria-label="Twitter"><svg className="h-6 w-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.116 2.813 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
