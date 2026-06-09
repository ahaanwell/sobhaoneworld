/* eslint-disable react/no-unescaped-entities */
import EMICalculator from "./Emicalculator";
import DownloadCostSheetActions from "./DownloadCostSheetActions";

const priceData = [
  { type: "1 BHK", size: "740 sq ft", price: "₹ 1.09 Cr* Onwards" },
  { type: "2 BHK Lux", size: "1070 sq ft", price: "₹ 1.58 Cr* Onwards" },
  { type: "2 BHK Grande", size: "1200 sq ft", price: "₹ 1.77 Cr* Onwards" },
  { type: "3 BHK Lux", size: "1525 sq ft", price: "₹ 2.25 Cr* Onwards" },
  { type: "3 BHK Grande (2 Car Park)", size: "1825 sq ft", price: "₹ 2.73 Cr* Onwards" },
  { type: "4 BHK Lux (2 Car Park)", size: "2100 sq ft", price: "₹ 3.14 Cr* Onwards" },
  { type: "4 BHK Grande (2 Car Park)", size: "2425 sq ft", price: "₹ 3.63 Cr* Onwards" },
];

export default function PriceListSection() {
  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-0">

        <h2
          id="price-list-heading"
          className="text-2xl font-bold text-gray-700 text-center mb-2"
        >
          Types of Apartments and Prices
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <p className="text-gray-700 leading-relaxed mb-5">
            Apartments at <b>Sobha One World</b> will cost between <b>₹1.09 Crores and ₹3.9 Crores</b>, depending on the type of unit and
its size. This is the price before the start, since the project is still in the prelaunch stage. The base price is <b>₹14,720 per
square foot</b>. Here is a table that shows how much each unit costs, along with its Unit Type, super built-up area, and
prices that cover everything.
          </p>
        <div className="flex flex-col lg:flex-row gap-0">
          <div className="flex-1 overflow-x-auto ">
            <table
              className="w-full text-sm md:text-base"
              role="table"
              aria-label="Apartment types and pricing"
            >
              <thead>
                <tr className="border bg-primary text-white border-gray-200">
                  <th className="py-1 px-2 font-bold text-center w-1/4">Unit Type</th>
                  <th className="py-1 px-2 font-bold text-center w-1/4">Size</th>
                  <th className="py-1 px-2 font-bold text-center w-1/4">Price</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-300 hover:bg-gray-50 transition"
                  >
                    <td className="py-2 px-2 text-center text-black">{row.type}</td>
                    <td className="py-2 px-2 text-center text-black">{row.size}</td>
                    <td className="py-2 px-2 text-center font-medium text-primary">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 md:px-0">
            <img
              className="w-full"
              loading="lazy"
              src="/images/costing-details.webp"
              alt="Sobha One World Price Sheet and Costing Details"
            />
            <DownloadCostSheetActions/>
          </div>

        </div>

        <div className="pt-10 text-gray-700 mt-6 leading-relaxed space-y-6">
          
          <p>
            The prices are meant to give early buyers an advantage in East Bangalore, which is an area that is growing fast. The
starting prices for this high-end apartment block project are very good. The buyers can get reasonable rates and
choose from a variety of flexible payment plans that are tied to the stages of building. People who buy a home early
can expect it to appreciate in value as nearby building projects are finished.
          </p>
          <h2 className="text-2xl font-bold">
            Price List, Payment Plan, and Deals
          </h2>
          <p>
            As of March 2026, the way prices are set at One World is meant to give early birds an advantage. The size of a luxury
high-rise in East Bangalore is a great place to start. The price per square foot in the prelaunch phase is ₹14,720,
which is less than the price per square foot in Whitefield, which is right next door and costs Rs. 16,000 per square
foot.
          </p>
          <p>
            The "Construction-Linked Plan" (CLP) makes it easy for buyers to make payments without taking any risks. Since the
area is getting close to being finished with STRR at the time of ownership, early buyers will soon see their money
grow faster.
          </p>
          <div className="w-full overflow-x-auto">
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-8">

    <div>
      <h2 className="text-2xl font-bold mb-4">Pricing & Payment Schedule</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <tbody>
            <tr>
              <td className="border p-3 font-semibold">Unit Number</td>
              <td className="border p-3">1021</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Type of Unit</td>
              <td className="border p-3">3BHK - Grande</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Wing</td>
              <td className="border p-3">1</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Floor</td>
              <td className="border p-3">2</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Carpet Area in sft (C)</td>
              <td className="border p-3">1,098.36</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">SBA (S) in sft</td>
              <td className="border p-3">1,820.24</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Classification</td>
              <td className="border p-3">SELECT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">Basic Value</h3>

      <table className="w-full border border-gray-300 text-sm">
        <tbody>
          <tr>
            <td className="border p-3 font-semibold">Rate in ₹/ sft ( R )</td>
            <td className="border p-3">13,555</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">Basic Value in ₹ (BV)</td>
            <td className="border p-3">24,673,353</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">Additonal Value</h3>

      <table className="w-full border border-gray-300 text-sm">
        <tbody>
          <tr>
            <td className="border p-3 font-semibold">
              Development and Infrastructure Works in ₹
            </td>
            <td className="border p-3">786,344</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              Total Value excluding GST (V = BV + AV)
            </td>
            <td className="border p-3">25,459,697</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              Goods and Services Tax @ 5% on V in ₹ (GST)
            </td>
            <td className="border p-3">1,272,985</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              Basic Value with GST in ₹ (A = V + GST)
            </td>
            <td className="border p-3">26,732,682</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">Deposits</h3>

      <table className="w-full border border-gray-300 text-sm">
        <tbody>
          <tr>
            <td className="border p-3 font-semibold">Maintenance Deposit in ₹</td>
            <td className="border p-3">546,072</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              Total Deposits in ₹ (B)
            </td>
            <td className="border p-3">546,072</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <table className="w-full border border-gray-300 text-sm">
        <tbody>
          <tr>
            <td className="border p-3 font-semibold">
              Total Value excluding Registration & Stamp Duty in ₹ (D = A+B)
            </td>
            <td className="border p-3">27,278,754</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">Payment Schedule</h3>

      <table className="w-full border border-gray-300 text-sm">
        <tbody>
          <tr>
            <td className="border p-3 font-semibold">Application Amount in ₹</td>
            <td className="border p-3">1,336,634</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              Payable within 15 days from Application Date in ₹
            </td>
            <td className="border p-3">1,069,307</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              Payable within 30 days from Application Date in ₹
            </td>
            <td className="border p-3">2,940,595</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Foundation Works in ₹
            </td>
            <td className="border p-3">1,871,288</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Basement 2 Roof Slab in ₹
            </td>
            <td className="border p-3">1,871,288</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Ground Floor Roof Slab in ₹
            </td>
            <td className="border p-3">1,871,288</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Second Floor Roof Slab in ₹
            </td>
            <td className="border p-3">1,871,288</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Ninth Floor Roof Slab in ₹
            </td>
            <td className="border p-3">1,603,961</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Eighteenth Floor Roof Slab in ₹
            </td>
            <td className="border p-3">1,603,961</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Twenty Seventh Floor Roof Slab in ₹
            </td>
            <td className="border p-3">1,603,961</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Thirty Seventh Floor Roof Slab in ₹
            </td>
            <td className="border p-3">1,603,961</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Terrace Slab in ₹
            </td>
            <td className="border p-3">2,138,615</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Internal Skim Coat in the Apartments excl
              Balconies, Utilities, Common Area, Shafts, Ducts etc., in ₹
            </td>
            <td className="border p-3">1,871,288</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Completion of Internal Flooring in the Apartments excl
              Balconies, Utilities, Common Area, Shafts, Ducts etc., in ₹
            </td>
            <td className="border p-3">2,138,615</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              On Final Payment Request Letter in ₹
            </td>
            <td className="border p-3">1,882,706</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              Total Value excluding Registration & Stamp Duty in ₹
            </td>
            <td className="border p-3">27,278,754</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <ol className="list-decimal pl-6 space-y-3 text-sm leading-relaxed">
        <li>Pricelist R0 w.e.f May 17, 2026.</li>

        <li>
          Stamp Duty Charges @ 0.5% (Approximate of Rs.136,394/-) of Total Sale
          Value shall be paid by the Client as per the present government norms
          along with Application Amount for the execution of Sale deed. Charges
          are as per prevailing rates and subject to change.
        </li>

        <li>
          Goods and Services Tax (GST) are as per the prevailing rates and
          subject to change.
        </li>

        <li>
          Delayed payment interest charged would attract additional applicable
          GST.
        </li>

        <li>
          1% TDS under Section 194 IA of the Income Tax Act is to be deducted by
          the clients and paid to the Income Tax Department by giving due Credit
          to SOBHA Limited.
        </li>

        <li>
          Deposit / Charges payable to the authorities towards Electricity
          Connection, Water and Sewage Connections will be collected at actuals
          from the customer along with applicable Taxes in addition to the Total
          Value.
        </li>

        <li>
          Registration and Stamp duty charges to be paid by Customer at the time
          of execution of sale deed as per prevailing rates.
        </li>

        <li>
          Demand note for payment will be on the basis of completion of the
          milestone attributed to the particular Unit. Check the Construction
          status for payment dues.
        </li>

        <li>
          Any other statutory charges which may be imposed by the authorities in
          future from time to time will also be payable by the customers.
        </li>

        <li>
          Basic Value is inclusive of Single Car Parking Space for all the 1
          BHK, 2 BHK and 3 BHK units and Double Car Parking Space (Back to Back)
          for 4 BHK units.
        </li>

        <li>
          In addition to the above Pricing, Maintenance Charges to be collected
          from the Customers in advance along with Final Payment Request Letter
          including applicable taxes.
        </li>

        <li>
          Electricity consumption Deposit as mentioned in the agreement will be
          collected along with Final Payment Request.
        </li>
      </ol>
    </div>

  </div>
</div>
          <EMICalculator />
           <h2 className="text-2xl font-bold">
    Sobha One World Comparison with Sobha East Bangalore Project Comparison Table (2026)
  </h2>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Feature</th>
          <th className="border border-gray-300 px-4 py-2">Sobha One World</th>
          <th className="border border-gray-300 px-4 py-2">SOBHA Galera</th>
          <th className="border border-gray-300 px-4 py-2">SOBHA Ayana</th>
          <th className="border border-gray-300 px-4 py-2">SOBHA Neopolis</th>
          <th className="border border-gray-300 px-4 py-2">SOBHA Altair</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Location</td>
          <td className="border border-gray-300 px-4 py-2">
            Hoskote, Near NH 75 & Old Madras Road
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Whitefield-Hoskote Road, Kannamangala
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Panathur, Off Marathahalli-ORR
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Panathur, Off Marathahalli-ORR
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Hadosiddapura, Off Sarjapur Main Road
          </td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">Theme</td>
          <td className="border border-gray-300 px-4 py-2">Integrated Township Living</td>
          <td className="border border-gray-300 px-4 py-2">Timeless Spanish Homes</td>
          <td className="border border-gray-300 px-4 py-2">Modern Tropical Apartments</td>
          <td className="border border-gray-300 px-4 py-2">Greek-Themed Luxury Apartments</td>
          <td className="border border-gray-300 px-4 py-2">Luxury Homes</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">Status</td>
          <td className="border border-gray-300 px-4 py-2">Pre-Launch 2026*</td>
          <td className="border border-gray-300 px-4 py-2">Under Construction Ongoing</td>
          <td className="border border-gray-300 px-4 py-2">Under Construction</td>
          <td className="border border-gray-300 px-4 py-2">New Launch 2026</td>
          <td className="border border-gray-300 px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">Possession</td>
          <td className="border border-gray-300 px-4 py-2">2030-2031*</td>
          <td className="border border-gray-300 px-4 py-2">Dec 2026</td>
          <td className="border border-gray-300 px-4 py-2">Dec 2031</td>
          <td className="border border-gray-300 px-4 py-2">2028-2031 (Phase-wise)</td>
          <td className="border border-gray-300 px-4 py-2">May 2031</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">Units</td>
          <td className="border border-gray-300 px-4 py-2">1, 2, 3 & 4 BHK</td>
          <td className="border border-gray-300 px-4 py-2">4 BHK Row Houses</td>
          <td className="border border-gray-300 px-4 py-2">3 BHK</td>
          <td className="border border-gray-300 px-4 py-2">3 & 4 BHK</td>
          <td className="border border-gray-300 px-4 py-2">3 & 4 BHK</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">Price From</td>
          <td className="border border-gray-300 px-4 py-2">₹1.09 Cr*</td>
          <td className="border border-gray-300 px-4 py-2">₹5.25 Cr*</td>
          <td className="border border-gray-300 px-4 py-2">₹2.30 Cr*</td>
          <td className="border border-gray-300 px-4 py-2">₹2.30 Cr*</td>
          <td className="border border-gray-300 px-4 py-2">₹3.50 Cr*</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">Key Highlight</td>
          <td className="border border-gray-300 px-4 py-2">300-Acre Integrated Township</td>
          <td className="border border-gray-300 px-4 py-2">Exclusive 40 Row Houses</td>
          <td className="border border-gray-300 px-4 py-2">100+ Amenities Ecosystem</td>
          <td className="border border-gray-300 px-4 py-2">3 Clubhouses & 35+ Amenities</td>
          <td className="border border-gray-300 px-4 py-2">New Launch on Sarjapur Road</td>
        </tr>
      </tbody>
    </table>
  </div>

        </div>

      </div>
    </section>
  );
}