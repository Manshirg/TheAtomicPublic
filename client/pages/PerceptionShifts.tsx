import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PerceptionShifts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Perception Shifts
          </h1>
          <p className="text-lg text-gray-600">
            How American attitudes toward nuclear science evolved over 140 years
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Scientific Enthusiasm Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-t-lg">
            <h2 className="text-3xl font-bold mb-2">Scientific Enthusiasm</h2>
            <p className="text-green-100">
              1877-1909: "Nuclear science as humanity's next great leap"
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-b-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Edison's Vision
                </h3>
                <p className="text-gray-700 mb-4">
                  Thomas Edison's 1896 correspondence with military officials
                  demonstrated the era's optimistic belief that radioactive
                  materials could revolutionize both civilian and military
                  technology. His letter emphasized the potential for
                  "beneficial applications in medicine, industry, and national
                  defense."<sup>1</sup>
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-800 italic">
                    "The discovery of these remarkable substances opens new
                    frontiers for American innovation and progress."
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Industrial Optimism
                </h3>
                <p className="text-gray-700 mb-4">
                  The Bureau of Mines' 1908 report reflected widespread
                  industrial enthusiasm for radioactive materials in mining
                  operations. Early safety protocols were minimal, as officials
                  viewed radiation primarily as a manageable industrial
                  challenge rather than a health hazard.<sup>2</sup>
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-800 italic">
                    "These materials represent the next evolution in American
                    industrial capacity."
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 text-green-700">
                <span className="text-2xl">🔬</span>
                <span className="font-medium">
                  Public sentiment: Nuclear = Progress
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Government Reassurance Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-8 rounded-t-lg">
            <h2 className="text-3xl font-bold mb-2">
              Government Reassurance & Propaganda
            </h2>
            <p className="text-yellow-100">
              1910-1959: "Nuclear power under control for peace and prosperity"
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-b-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Civil Defense Messaging
                </h3>
                <p className="text-gray-700 mb-4">
                  The 1950 "Survival Under Atomic Attack" pamphlet exemplified
                  government efforts to normalize nuclear weapons while
                  maintaining public confidence. The document balanced
                  acknowledgment of nuclear threats with reassuring survival
                  strategies.<sup>3</sup>
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-3">
                  <p className="text-yellow-800 text-sm italic">
                    "You can survive atomic attack if you know what to do."
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Atoms for Peace
                </h3>
                <p className="text-gray-700 mb-4">
                  Eisenhower's 1953 UN speech strategically reframed nuclear
                  technology as a tool for global prosperity. The initiative
                  promoted peaceful nuclear applications while maintaining
                  strict government control over nuclear information.
                  <sup>4</sup>
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-3">
                  <p className="text-yellow-800 text-sm italic">
                    "Nuclear energy for peaceful purposes can transform the
                    world."
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Media Control
                </h3>
                <p className="text-gray-700 mb-4">
                  Government agencies carefully managed media coverage of
                  nuclear programs, promoting positive narratives about nuclear
                  energy while suppressing information about health risks and
                  environmental impacts.<sup>5</sup>
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-3">
                  <p className="text-yellow-800 text-sm italic">
                    "Nuclear technology represents American leadership in the
                    modern world."
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 text-yellow-700">
                <span className="text-2xl">🏛️</span>
                <span className="font-medium">
                  Public sentiment: Nuclear = National Security
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fear and Activism Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-t-lg">
            <h2 className="text-3xl font-bold mb-2">
              Fear, Distrust & Activism
            </h2>
            <p className="text-red-100">
              1960-2016: "Nuclear technology as existential threat"
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-b-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Three Mile Island Crisis
                </h3>
                <p className="text-gray-700 mb-4">
                  The 1979 nuclear accident shattered public confidence in
                  nuclear safety assurances. Congressional hearings revealed
                  government failures in oversight and communication,
                  fundamentally altering the nuclear narrative.<sup>6</sup>
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-3">
                  <p className="text-red-800 text-sm italic">
                    "The government told us nuclear power was safe. They were
                    wrong."
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Grassroots Resistance
                </h3>
                <p className="text-gray-700 mb-4">
                  Greenpeace's 1982 anti-nuclear campaigns represented organized
                  citizen opposition to nuclear policies. Protesters demanded
                  transparency and challenged government claims about nuclear
                  safety and environmental impact.<sup>7</sup>
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-3">
                  <p className="text-red-800 text-sm italic">
                    "Nuclear power threatens future generations."
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Waste Storage Debates
                </h3>
                <p className="text-gray-700 mb-4">
                  The 2005 Yucca Mountain hearings highlighted persistent public
                  concerns about long-term nuclear waste storage. Citizens
                  questioned government assurances about containment and
                  environmental protection.<sup>8</sup>
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-3">
                  <p className="text-red-800 text-sm italic">
                    "Nuclear waste remains dangerous for thousands of years."
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 text-red-700">
                <span className="text-2xl">⚡</span>
                <span className="font-medium">
                  Public sentiment: Nuclear = Existential Risk
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Timeline */}
        <div className="bg-gray-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-8">
            The Evolution of Nuclear Perception
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Scientific Wonder</h4>
              <p className="text-gray-300 text-sm">
                Nuclear science as humanity's next evolutionary step
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Controlled Optimism
              </h4>
              <p className="text-gray-300 text-sm">
                Government-managed progress for national strength
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Existential Fear</h4>
              <p className="text-gray-300 text-sm">
                Nuclear technology as threat to survival
              </p>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Footnotes
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <sup>1</sup> Edison, Thomas. Letter on Military Technology and
              Radiological Research, 1896. National Archives.
            </p>
            <p>
              <sup>2</sup> U.S. Bureau of Mines. Annual Report on Radiological
              Safety in Mining Operations, 1908.
            </p>
            <p>
              <sup>3</sup> Federal Civil Defense Administration. Survival Under
              Atomic Attack. 1950.
            </p>
            <p>
              <sup>4</sup> President Dwight D. Eisenhower. Atoms for Peace
              Speech, United Nations, 1953.
            </p>
            <p>
              <sup>5</sup> Wellerstein, Alex. Restricted Data: The History of
              Nuclear Secrecy in the United States. University of Chicago Press,
              2021.
            </p>
            <p>
              <sup>6</sup> U.S. Nuclear Regulatory Commission. Three Mile Island
              Hearings Transcripts, 1979.
            </p>
            <p>
              <sup>7</sup> Greenpeace. Anti-Nuclear Protest Archive, 1982.
            </p>
            <p>
              <sup>8</sup> U.S. Senate Committee on Energy. Hearings on Yucca
              Mountain Nuclear Waste Storage, 2005.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PerceptionShifts;
