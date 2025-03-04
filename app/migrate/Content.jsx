import Image from 'next/image';

export default function DreamCountryMigration() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600">Migrate to Your Dream Country</h1>

      <div className="mt-4 flex justify-center">
        <Image 
          src="/public/1.jpg" 
          alt="Dream Country Migration" 
          width={600} 
          height={400} 
          className="rounded-lg"
        />
      </div>

      <p className="mt-4 text-gray-700">
        Looking for a better future? Whether it’s for career growth, education, or a fresh start, migrating to your dream country can open doors to endless opportunities!
      </p>

      <h2 className="text-2xl font-semibold mt-4">Why Migrate?</h2>
      <ul className="list-disc pl-6 mt-2 text-gray-700">
        <li>✅ Better career opportunities and higher salaries</li>
        <li>✅ High-quality healthcare and education</li>
        <li>✅ Exposure to global cultures and lifestyles</li>
        <li>✅ Permanent residency and citizenship options</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">Top Countries to Migrate To</h2>
      <ul className="list-disc pl-6 mt-2 text-gray-700">
        <li>🌟 Germany – Strong economy and free education</li>
        <li>🌟 Canada – High quality of life and welcoming policies</li>
        <li>🌟 Australia – Great work-life balance and beautiful nature</li>
        <li>🌟 USA – The land of endless opportunities</li>
        <li>🌟 UK – Top universities and global job market</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">How to Migrate?</h2>
      <ol className="list-decimal pl-6 mt-2 text-gray-700">
        <li>Choose the right country based on your goals</li>
        <li>Check the visa requirements and eligibility</li>
        <li>Prepare essential documents and financial proof</li>
        <li>Apply for a visa through the official embassy or portal</li>
        <li>Plan your move and start your new journey!</li>
      </ol>
    </div>
  );
}
 

      
