import PageHero from "@/components/PageHero";

function DisclaimerPage() {
  return (
    <main className="w-full bg-white">
      <div>
        <PageHero title={"Disclaimer"} />
      </div>
      <div className="max-w-5xl mx-auto py-10 px-4 md:px-0">
        <div className="py-6 text-gray-700 leading-relaxed">
          <h1 className="text-2xl font-bold mb-4">Disclaimer</h1>

          <h2 className="text-xl font-semibold mb-2">1. General Information</h2>

          <p className="mb-6">
            The information provided on this website is intended to give users a
            clear overview of the <a href="https://www.sobhaoneworld.gen.in/"><b>Sobha One World</b></a> project. As an authorized
            marketing partner, we aim to present accurate and up-to-date details
            regarding pricing, floor plans, availability, and project
            specifications. However, real estate information is subject to
            change without prior notice. Prices, layouts, and inventory status
            may vary depending on market conditions and developer updates.
            Visitors are advised to treat this website as a reference guide and
            verify all details directly with the developer before making any
            purchase decisions.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            2. Images and Visual Content
          </h2>

          <p className="mb-6">
            All images, illustrations, 3D renderings, and layout maps displayed
            on this website are artistic representations created for marketing
            purposes. These visuals are meant to provide an idea of the
            project’s design, layout, and lifestyle offerings. They may not
            reflect the exact final construction. Minor or major changes may
            occur during the development phase, especially in pre-launch
            projects. The final specifications and features of the property will
            be as mentioned in the official agreement between the buyer and the
            developer.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. No Legal Commitment</h2>

          <p className="mb-6">
            The content available on this website is purely informational and
            does not constitute a legal offer, contract, or guarantee of any
            kind. Accessing or using this website does not establish any formal
            agreement between the user and the developer or marketing partner.
            Prospective buyers are strongly encouraged to conduct independent
            verification, review official documents, and seek advice from legal
            or financial professionals before proceeding with any property
            transaction.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            4. Limitation of Liability
          </h2>

          <p className="mb-6">
            While we strive to ensure the accuracy and reliability of the
            information provided, we do not take responsibility for any loss,
            damage, or inconvenience caused by reliance on the content of this
            website. Real estate investments involve market risks, and any
            financial decisions made are solely at the user’s discretion. We are
            not liable for any direct or indirect consequences arising from the
            use of this website.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            5. Branding and Intellectual Property
          </h2>

          <p className="mb-6">
            All project names, logos, trademarks, and brand identities mentioned
            on this website belong to their respective owners. References to
            names such as “Sobha” or “Sobha Limited” are made strictly for
            identification and informational purposes. This website does not
            claim ownership of any third-party trademarks or brand assets.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            6. Contact and Verification
          </h2>

          <p>
            For the most accurate and updated information regarding pricing,
            availability, floor plans, or booking details, users are encouraged
            to get in touch with us directly. Our team will assist you with the
            latest updates, arrange site visits, and guide you through the next
            steps of the buying process.
          </p>
        </div>
        <div className="py-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Q1: Is the price mentioned on this website the final amount
                payable?
              </h3>
              <p>
                No, the prices displayed on the website are indicative and may
                vary over time. Property rates can change depending on factors
                such as demand, availability, and project updates. It is always
                recommended to request the latest cost sheet from our team to
                understand the exact pricing, including additional charges and
                applicable fees.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Q2: Are the images shown actual photographs of the completed
                project?
              </h3>
              <p>
                Most of the visuals featured on this website are high-quality 3D
                renderings and artistic impressions. These are created to give
                you a clear understanding of the project’s design, layout, and
                lifestyle features. The final construction may include slight
                variations in finishes, landscaping, or architectural details.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Q3: Can I directly book an apartment through this website?
              </h3>
              <p>
                This website is designed for informational purposes, enquiries,
                and initial research. To proceed with booking a unit, you will
                need to connect with our sales team, review the official
                documents, and complete the booking process as per the builder’s
                guidelines.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Q4: Why should I consider investing in new residential projects
                in Hoskote?
              </h3>
              <p>
                Hoskote is emerging as one of the fastest-growing residential
                hubs in East Bangalore. With improved infrastructure, upcoming
                road developments, and proximity to major IT corridors, the area
                offers strong growth potential. Investing during the early or
                pre-launch stage often provides better pricing and higher
                returns in the long term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DisclaimerPage;
