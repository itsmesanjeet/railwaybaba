import React from 'react';
import Link from 'next/link';

const features = [
  { title: 'Live Train Status', link: '/status' },
  { title: 'PNR Check', link: '/pnr' },
  { title: 'Train Schedule', link: '/schedule' },
  { title: 'Station Info', link: '/stations' },
  { title: 'Fare Enquiry', link: '/fare' },
  { title: 'Seat Availability', link: '/seats' },
]

const MoreFeatures = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 fade-in">Explore More Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              href={feature.link}
              key={feature.title}
              className={`fade-in delay-${index} block border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition bg-white text-center text-lg font-semibold text-blue-800`}
            >
              {feature.title}
            </Link>
          ))}
        </div>
      </section>
  )
}

export default MoreFeatures