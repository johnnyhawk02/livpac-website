import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- Copied from LocalSchools.jsx --- 
const schoolsData = [
  // Dedicated SEN Schools
  { category: "Dedicated SEN Schools", name: "Abbot's Lea School", description: "Autism, global developmental delay", ageRange: "3-19", url: "https://www.abbotslea.com/", postcode: "L25 6EE" },
  { category: "Dedicated SEN Schools", name: "Bank View High School", description: "Autism Spectrum Disorder, complex learning difficulties", ageRange: "5-19", url: "https://www.bankviewhigh.co.uk/", postcode: "L9 6AD" },
  { category: "Dedicated SEN Schools", name: "Childwall Abbey School", description: "Complex Learning Difficulties", ageRange: "11-19", url: "https://www.childwallabbeyschool.net/", postcode: "L16 5EY" },
  { category: "Dedicated SEN Schools", name: "Clifford Holroyde Specialist SEN College", description: "Social, emotional, mental health needs", ageRange: "11-16", url: "https://cliffordholroyde.co.uk/", postcode: "L14 7NX" },
  { category: "Dedicated SEN Schools", name: "Ernest Cookson School", description: "Social, Emotional and Mental Health needs", ageRange: "5-11", url: "https://www.ernestcooksonschool.co.uk/", postcode: "L13 0BQ" },
  { category: "Dedicated SEN Schools", name: "Hope School", description: "Social, emotional, mental health, neurodivergent", ageRange: "5-11", url: "https://www.hopeschool-liverpool.co.uk/", postcode: "L25 2RY" },
  { category: "Dedicated SEN Schools", name: "Millstead School", description: "Profound and multiple learning difficulties, severe learning difficulties, complex autism", ageRange: "2-11", url: "https://www.millsteadschool.co.uk/", postcode: "L5 3LU" },
  { category: "Dedicated SEN Schools", name: "Palmerston School", description: "Autism, Multi-Sensory Impairment, Speech, Language and Communication, Severe Learning Difficulties", ageRange: "11-19", url: "https://www.palmerstonschool.co.uk/", postcode: "L17 6AU" },
  { category: "Dedicated SEN Schools", name: "Princes Primary School", description: "Autism, Profound and Multiple Learning Difficulties, Severe Learning Difficulties", ageRange: "2-11", url: "https://www.princes.liverpool.sch.uk/", postcode: "L8 1TG" },
  { category: "Dedicated SEN Schools", name: "Redbridge High School", description: "Autism, Physical Disability, Severe Learning Difficulties", ageRange: "11-19", url: "https://www.redbridgehighschool.co.uk/", postcode: "L9 6AD" },
  { category: "Dedicated SEN Schools", name: "Sandfield Park School", description: "Physical Disability", ageRange: "11-19", url: "https://www.sandfieldparkschool.co.uk/", postcode: "L12 9HJ" },
  { category: "Dedicated SEN Schools", name: "Woolton High School", description: "Social, Emotional and Mental Health needs", ageRange: "11-16", url: "https://www.wooltonhighschool.co.uk/", postcode: "L25 7TX" },
  { category: "Dedicated SEN Schools", name: "Merefield School", description: "Various, including social, emotional needs", ageRange: "2-19", url: "https://www.merefieldschool.co.uk/", postcode: "PR8 2QZ" },
  { category: "Dedicated SEN Schools", name: "Rowan Park School", description: "Various SEN needs", ageRange: "3-19", url: "https://www.rowanpark.co.uk/", postcode: "L21 0DB" },
  { category: "Dedicated SEN Schools", name: "Bluebell Park School", description: "Various SEN needs", ageRange: "3-19", url: "https://www.bluebellparkschool.co.uk/", postcode: "L36 7SY" },
  { category: "Dedicated SEN Schools", name: "Penkford School", description: "Various SEN needs", ageRange: "8-16", url: "https://www.penkford.st-helens.sch.uk/", postcode: "WA12 9HP" },
  { category: "Dedicated SEN Schools", name: "Clare Mount Specialist Sports College", description: "Various SEN needs, sports focus", ageRange: "11-19", url: "https://www.claremountssc.co.uk/", postcode: "CH46 1RA" },
  { category: "Dedicated SEN Schools", name: "Elleray Park School", description: "Various SEN needs", ageRange: "2-11", url: "https://www.elleraypark.com/", postcode: "CH45 0LH" },
  { category: "Dedicated SEN Schools", name: "The Observatory School", description: "Various SEN needs", ageRange: "11-16", url: "https://www.theobservatoryschool.wirral.sch.uk/", postcode: "CH43 7QT" },
  // Mainstream Schools with SEN Provision
  { category: "Mainstream Schools with SEN Provision", name: "Springwood Heath Primary School", description: "Enhanced resourced provision for primary-aged pupils with physical disabilities", ageRange: "4-11", url: "https://www.springwoodheath.co.uk/", postcode: "L19 4TL" },
  { category: "Mainstream Schools with SEN Provision", name: "Childwall Sports and Science Academy", description: "Comprehensive SEN support, including autism and communication needs", ageRange: "11-18", url: "https://www.childwallssa.org/", postcode: "L15 6XZ" },
  { category: "Mainstream Schools with SEN Provision", name: "The Academy of St Nicholas", description: "Fully inclusive, caters for SEN and disabilities", ageRange: "11-18", url: "https://www.st-nicholas.liverpool.sch.uk/", postcode: "L19 5NY" },
  { category: "Mainstream Schools with SEN Provision", name: "Broadgreen International School", description: "Resourced provision for students with complex needs", ageRange: "11-18", url: "https://www.broadgreeninternationalschool.com/", postcode: "L13 5UQ" },
  { category: "Mainstream Schools with SEN Provision", name: "Leamington Community Primary School", description: "Supports specific learning difficulties, speech and language needs", ageRange: "4-11", url: "https://www.leamingtonprimary.co.uk/", postcode: "L11 7BT" },
  { category: "Mainstream Schools with SEN Provision", name: "Holy Family Catholic Primary School", description: "Supports various SEN needs within a Catholic setting", ageRange: "4-11", url: "https://www.holyfamilyliverpool.co.uk/", postcode: "L25 9PA" },
  { category: "Mainstream Schools with SEN Provision", name: "Knotty Ash Primary School", description: "Resourced for profound hearing impairment, sign support", ageRange: "4-11", url: "https://www.knottyashprimaryschool.co.uk/", postcode: "L14 5NX" },
  { category: "Mainstream Schools with SEN Provision", name: "All Saints Catholic Primary School", description: "Supports SEN within Catholic environment", ageRange: "4-11", url: "https://www.allsaintsliverpool.co.uk/", postcode: "L4 2QG" },
  { category: "Mainstream Schools with SEN Provision", name: "The Notre Dame Catholic College", description: "Supports SEN with additional provisions", ageRange: "11-18", url: "https://www.notredame.liverpool.sch.uk/", postcode: "L5 2NH" },
  { category: "Mainstream Schools with SEN Provision", name: "Bebington High Sports College", description: "SEN unit for autism and other needs", ageRange: "11-18", url: "https://www.bebingtonhigh.com/", postcode: "CH63 2PS" },
  { category: "Mainstream Schools with SEN Provision", name: "Woodchurch High School", description: "Resourced provision for specific learning difficulties", ageRange: "11-16", url: "https://www.woodchurchhigh.com/", postcode: "CH49 7NG" },
  { category: "Mainstream Schools with SEN Provision", name: "Weatherhead High School", description: "Resource base for autism", ageRange: "11-18", url: "https://www.weatherheadhigh.co.uk/", postcode: "CH44 3HS" },
  { category: "Mainstream Schools with SEN Provision", name: "Pensby High School", description: "SEN unit for communication and interaction needs", ageRange: "11-18", url: "https://www.pensbyhighschool.org/", postcode: "CH61 6XN" },
];

const groupByCategory = (schools) => {
  return schools.reduce((acc, school) => {
    const category = school.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(school);
    return acc;
  }, {});
};
// --- End Copied --- 

export default function Resources() {
  const [isSchoolsVisible, setIsSchoolsVisible] = useState(false);
  const groupedSchools = groupByCategory(schoolsData);

  return (
    <main className="min-h-screen pb-8">
      <section className="card mt-8 mb-8 bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors duration-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-brand-light mb-3 leading-tight tracking-tight">Resources</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">
          Helpful links, guides, and downloadable materials for families of children and young people with SEND.
        </p>
        
        {/* Accordion Section for Local Schools */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 mb-8 overflow-hidden transition-colors duration-200">
          <button 
            onClick={() => setIsSchoolsVisible(!isSchoolsVisible)}
            className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
            aria-expanded={isSchoolsVisible}
            aria-controls="local-schools-list"
          >
            <div>
              <h2 className="text-xl font-semibold text-brand-primary dark:text-brand-light">Local Schools & Provisions</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">Click to view list of local schools offering specialist support and provisions.</p>
            </div>
            {/* Chevron Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 text-brand-primary dark:text-brand-light transform transition-transform duration-200 ${isSchoolsVisible ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Conditionally Rendered School List */}
          {isSchoolsVisible && (
            <div id="local-schools-list" className="p-4 border-t border-gray-200 dark:border-gray-600">
              {Object.entries(groupedSchools).map(([category, schools]) => (
                <div key={category} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-bold text-brand-primary dark:text-brand-light border-b border-brand-primary/20 dark:border-brand-light/20 pb-1 mb-4">{category}</h3>
                  <div className="space-y-4">
                    {schools.map((school, index) => (
                      <div key={index} className="flex flex-col sm:flex-row justify-between items-start gap-3">
                        <div className="flex-1 mb-2 sm:mb-0">
                          <h4 className="font-semibold text-brand-primary dark:text-brand-light mb-0.5">
                            {school.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 italic text-sm mb-1">{school.description}</p>
                          <div className="text-xs text-gray-500 dark:text-gray-400 space-x-3">
                            <span>Age: {school.ageRange}</span>
                            <span>Postcode: {school.postcode}</span>
                          </div>
                        </div>
                        <a 
                          href={school.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={`Visit ${school.name} website (opens in new tab)`}
                          className="text-brand-accent dark:text-brand-accent hover:text-brand-primary dark:hover:text-brand-light transition-colors duration-200 p-1 -m-1 flex-shrink-0 self-end sm:self-start"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Liverpool-Specific Resources */}
        <h2 className="text-2xl font-bold text-brand-primary dark:text-brand-light mt-6 mb-3">Liverpool-Specific Resources</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
            <a href="https://fsd.liverpool.gov.uk/kb5/liverpool/fsd/localoffer.page?localofferchannel=0" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg text-brand-primary dark:text-brand-light">
              Liverpool SEND Local Offer
            </a>
            <p className="text-gray-700 dark:text-gray-300 mt-1">Comprehensive local directory of services and support for children and young people with SEND in Liverpool.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
            <a href="https://www.knowsleyinfo.co.uk/categories/knowsley-send-local-offer" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg text-brand-primary dark:text-brand-light">
              Knowsley SEND Local Offer
            </a>
            <p className="text-gray-700 dark:text-gray-300 mt-1">Information on local services and support for SEND children and their families in Knowsley.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
            <a href="https://fisd.liverpool.gov.uk/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg text-brand-primary dark:text-brand-light">
              Liverpool Family Information & SEND Directory (FISD)
            </a>
            <p className="text-gray-700 dark:text-gray-300 mt-1">Comprehensive directory offering details on family services, childcare providers, and SEND support in Liverpool.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
            <a href="https://www.seftondirectory.com/kb5/sefton/directory/localoffer.page?localofferchannel=0" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg text-brand-primary dark:text-brand-light">
              Sefton SEND Local Offer
            </a>
            <p className="text-gray-700 dark:text-gray-300 mt-1">Comprehensive directory of services and support for children and young people with SEND in Sefton.</p>
          </div>
        </div>
        {/* Key National Resources */}
        <h2 className="text-2xl font-bold text-brand-primary dark:text-brand-light mt-8 mb-3">Key National Resources</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
            <a href="https://www.gov.uk/government/publications/send-guide-for-parents-and-carers" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg text-brand-primary dark:text-brand-light">
              Parent Carer Support Guide
            </a>
            <p className="text-gray-700 dark:text-gray-300 mt-1">Government-issued guide explaining the SEND system for parents and carers.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
            <a href="https://www.gov.uk/children-with-special-educational-needs/extra-SEN-help" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg text-brand-primary dark:text-brand-light">
              EHCP Information Pack
            </a>
            <p className="text-gray-700 dark:text-gray-300 mt-1">Overview of EHCPs – what they are, how to apply, and your rights.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
            <a href="https://www.barnardossendiass.org.uk/liverpool-and-knowsley-sendiass/useful-contacts/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg text-brand-primary dark:text-brand-light">
              Useful Contacts
            </a>
            <p className="text-gray-700 dark:text-gray-300 mt-1">Directory of local and national organizations that support families with SEND needs.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
