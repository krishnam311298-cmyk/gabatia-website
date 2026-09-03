import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="overline-text">[ LEGAL / 01 ]</span>
          
          <h1 className="text-5xl md:text-7xl font-chivo font-black leading-[0.95] tracking-tight mt-8 mb-16">
            Privacy Policy.
          </h1>
          
          <div className="prose prose-lg prose-gray max-w-none text-gray-600 space-y-8">
            <p>
              <strong>Last Updated:</strong> September 2026
            </p>
            <p>
              Gabatia Engineers & Consultants ("Gabatia", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h3 className="text-2xl font-bold text-brand-black mt-12 mb-4">1. Information We Collect</h3>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h3 className="text-2xl font-bold text-brand-black mt-12 mb-4">2. How We Use Your Personal Data</h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h3 className="text-2xl font-bold text-brand-black mt-12 mb-4">3. Data Security</h3>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h3 className="text-2xl font-bold text-brand-black mt-12 mb-4">4. Contact Us</h3>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@gabatia-engineers.com<br/>
              <strong>Address:</strong> Industrial Estate, Vadodara, Gujarat, India 390010
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
