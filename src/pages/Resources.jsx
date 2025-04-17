import React from "react";

export default function Resources() {
  return (
    <main className="min-h-screen pb-8">
      <section className="card mt-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-3 leading-tight tracking-tight">Resources</h1>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
          Helpful links, guides, and downloadable materials for families of children and young people with SEND.
        </p>
        {/* Liverpool-Specific Resources */}
        <h2 className="text-2xl font-bold text-brand-primary mt-6 mb-3">Liverpool-Specific Resources</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <a href="https://fsd.liverpool.gov.uk/kb5/liverpool/fsd/localoffer.page?localofferchannel=0" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg">
              Liverpool SEND Local Offer
            </a>
            <p className="text-gray-700 mt-1">Comprehensive local directory of services and support for children and young people with SEND in Liverpool.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <a href="https://www.knowsleyinfo.co.uk/categories/knowsley-send-local-offer" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg">
              Knowsley SEND Local Offer
            </a>
            <p className="text-gray-700 mt-1">Information on local services and support for SEND children and their families in Knowsley.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <a href="https://fisd.liverpool.gov.uk/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg">
              Liverpool Family Information & SEND Directory (FISD)
            </a>
            <p className="text-gray-700 mt-1">Comprehensive directory offering details on family services, childcare providers, and SEND support in Liverpool.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <a href="https://www.seftondirectory.com/kb5/sefton/directory/localoffer.page?localofferchannel=0" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg">
              Sefton SEND Local Offer
            </a>
            <p className="text-gray-700 mt-1">Comprehensive directory of services and support for children and young people with SEND in Sefton.</p>
          </div>
        </div>
        {/* Key National Resources */}
        <h2 className="text-2xl font-bold text-brand-primary mt-8 mb-3">Key National Resources</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <a href="https://www.gov.uk/government/publications/send-guide-for-parents-and-carers" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg">
              Parent Carer Support Guide
            </a>
            <p className="text-gray-700 mt-1">Government-issued guide explaining the SEND system for parents and carers.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <a href="https://www.gov.uk/children-with-special-educational-needs/extra-SEN-help" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg">
              EHCP Information Pack
            </a>
            <p className="text-gray-700 mt-1">Overview of EHCPs – what they are, how to apply, and your rights.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <a href="https://www.barnardossendiass.org.uk/liverpool-and-knowsley-sendiass/useful-contacts/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-lg">
              Useful Contacts
            </a>
            <p className="text-gray-700 mt-1">Directory of local and national organizations that support families with SEND needs.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
