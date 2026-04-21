import PageHero from "@/components/PageHero";

function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white">
      <div>
        <PageHero title={"Privacy Policy"} />
      </div>
      <div className="max-w-5xl mx-auto py-10 px-4 md:px-0">
        <div className="py-6 text-gray-700 leading-relaxed">
        <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>

        <p className="mb-6">
          At <a href="https://www.sobhaoneworld.gen.in/"><b>Sobha One World</b></a>, accessible via our website, we understand that
          searching for a home is an important decision. Protecting your
          personal information is a responsibility we take seriously. This
          Privacy Policy explains how we collect, use, and safeguard your data
          when you interact with our website.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>

        <p className="mb-4">
          We only collect information that is necessary to assist you with your
          property search and improve your browsing experience.
        </p>

        <p className="mb-2 font-medium">Personal Information:</p>
        <p className="mb-4">
          When you fill out a form on our website, we may collect basic details
          such as your name, phone number, and email address. This information
          helps us respond to your queries and provide relevant project details.
        </p>

        <p className="mb-2 font-medium">Usage Information:</p>
        <p className="mb-4">
          We automatically gather limited technical data such as your device
          type, browser, and pages visited. This helps us understand how users
          interact with our website and allows us to improve performance and
          usability.
        </p>

        <p className="mb-2 font-medium">Cookies:</p>
        <p className="mb-6">
          Our website uses cookies to enhance your browsing experience. These
          small data files help us remember your preferences, making future
          visits smoother and faster. You can choose to disable cookies through
          your browser settings if you prefer.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>

        <p className="mb-4">
          We respect your time and privacy. Your data is used strictly for
          relevant and helpful communication.
        </p>

        <ul className="list-disc ml-6 mb-6">
          <li>
            Project Updates: To share information such as floor plans,
            brochures, pricing details, and availability of Sobha One World.
          </li>
          <li>
            Pre-launch and Exclusive Offers: To inform you about early
            investment opportunities and special deals in and around Hoskote.
          </li>
          <li>
            Personalized Recommendations: To suggest suitable properties based
            on your preferences and requirements.
          </li>
          <li>
            Communication Consent: By submitting your contact details, you agree
            to receive calls, messages, or emails from us or our authorized
            partners, even if your number is registered under Do Not Disturb
            (DND).
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          3. Data Protection and Sharing
        </h2>

        <p className="mb-4">
          We are committed to keeping your information secure and confidential.
        </p>

        <p className="mb-2 font-medium">Security Measures:</p>
        <p className="mb-4">
          We use industry-standard security practices to protect your data from
          unauthorized access, misuse, or loss.
        </p>

        <p className="mb-2 font-medium">No Unauthorized Selling:</p>
        <p className="mb-6">
          We do not sell, rent, or trade your personal information to
          third-party marketing companies. Your data may only be shared with
          trusted partners, such as developers or authorized sales teams,
          strictly for assisting you with your property requirements.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          4. Your Rights and Choices
        </h2>

        <p className="mb-4">You have full control over your personal data.</p>

        <ul className="list-disc ml-6 mb-6">
          <li>You can request access to the information we hold about you.</li>
          <li>You can ask us to correct or update any incorrect details.</li>
          <li>You can request the deletion of your data from our records.</li>
          <li>You can opt out of calls, messages, or emails at any time.</li>
        </ul>

        <p className="mb-6">
          We will process your request promptly and ensure your preferences are
          respected.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>

        <p>
          If you have any questions, concerns, or requests related to this
          Privacy Policy or your data, feel free to get in touch with us.
        </p>

        <p className="mt-4">
          You can visit our website or contact our support team for assistance.
          We are always here to help you make informed decisions about your home
          search.
        </p>
      </div>
      <div className="py-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="mb-6">
          <h3 className="font-semibold text-xl mb-2">
            Q1: Will I receive frequent or unwanted calls after registering?
          </h3>
          <p>
            No, we respect your privacy and avoid unnecessary communication. You
            will only be contacted regarding the specific information you
            requested, such as project brochures, pricing details, or updates
            related to Sobha One World.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-xl mb-2">
            Q2: What are the advantages of investing in a pre-launch project?
          </h3>
          <p>
            Pre-launch properties are introduced at an early stage of
            development, which allows buyers to purchase at comparatively lower
            prices. This phase often offers better deals, flexible payment
            plans, and higher potential for price appreciation as the project
            progresses.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-xl mb-2">
            Q3: How can I unsubscribe from updates or communications?
          </h3>
          <p>
            You can easily opt out at any time. Simply reach out to us through
            our contact page or request removal via message, and we will
            promptly stop all communications and remove your details from our
            database.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2">
            Q4: Is my personal information secure on this website?
          </h3>
          <p>
            Yes, your data is protected using industry-standard security
            measures. We ensure that your personal details, such as your name
            and contact number, remain confidential and are only used for
            relevant communication purposes.
          </p>
        </div>
      </div>
      </div>
    </main>
  );
}

export default PrivacyPolicyPage;
