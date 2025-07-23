import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GovernmentVsPublic = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government vs Public</h1>
          <p className="text-lg text-gray-600">Contrasting narratives in America's nuclear story</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Era 1: 1877-1909 */}
        <div className="mb-16">
          <div className="bg-green-600 text-white p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold">1877–1909: The Age of Discovery</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-0">
            {/* Government Side */}
            <div className="bg-blue-50 border-r border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900">Government Narrative</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Scientific Investment Strategy</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Federal agencies approached radioactive materials as strategic resources for national advancement. Edison's military correspondence reflected government interest in radioactive applications for defense and industrial superiority.<sup>1</sup>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Regulatory Framework</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    The Bureau of Mines established early protocols treating radioactive materials as manageable industrial resources, emphasizing American leadership in emerging nuclear science and technology.<sup>2</sup>
                  </p>
                </div>
              </div>
            </div>

            {/* Public Side */}
            <div className="bg-green-50 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-green-900">Public Reaction</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Scientific Fascination</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    The American public embraced radioactive discoveries with enthusiasm typical of the Progressive Era's faith in scientific progress. Newspapers celebrated each breakthrough as evidence of American ingenuity and modern advancement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Minimal Health Concerns</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Public awareness of radiation health risks remained minimal. Citizens viewed radioactive materials through the lens of industrial progress, trusting government and scientific authorities to manage any potential dangers responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Era 2: 1910-1959 */}
        <div className="mb-16">
          <div className="bg-yellow-600 text-white p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold">1910–1959: Cold War Control</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-0">
            {/* Government Side */}
            <div className="bg-blue-50 border-r border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900">Government Narrative</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">National Security Imperative</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Following Hiroshima and Nagasaki, the government positioned nuclear technology as essential for American security and global leadership. Strict information control protected "atomic secrets" while promoting nuclear power for peaceful purposes.<sup>3</sup>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Controlled Public Messaging</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Eisenhower's "Atoms for Peace" initiative exemplified sophisticated government messaging that acknowledged nuclear dangers while promoting American nuclear leadership and technological superiority in the Cold War context.<sup>4</sup>
                  </p>
                </div>
              </div>
            </div>

            {/* Public Side */}
            <div className="bg-yellow-50 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-900">Public Reaction</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Patriotic Acceptance</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    Americans largely accepted government nuclear policies as necessary for national defense. Civil defense campaigns like "Survival Under Atomic Attack" fostered public compliance while maintaining confidence in government protection.<sup>5</sup>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Growing Anxiety</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    Despite official reassurances, Cold War tensions generated underlying public anxiety about nuclear warfare. Duck-and-cover drills and fallout shelter discussions revealed growing awareness of nuclear threats to civilian populations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Era 3: 1960-2016 */}
        <div className="mb-16">
          <div className="bg-red-600 text-white p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold">1960–2016: Crisis and Confrontation</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-0">
            {/* Government Side */}
            <div className="bg-blue-50 border-r border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900">Government Narrative</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Damage Control Strategy</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    After Three Mile Island, government agencies focused on crisis management and restoring public confidence. The Nuclear Regulatory Commission emphasized improved safety protocols while defending the necessity of nuclear energy for American energy independence.<sup>6</sup>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Technical Solutions Emphasis</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Government responses to nuclear waste concerns emphasized technological solutions and regulatory oversight. Yucca Mountain hearings represented attempts to demonstrate scientific expertise and long-term planning for nuclear waste management.<sup>7</sup>
                  </p>
                </div>
              </div>
            </div>

            {/* Public Side */}
            <div className="bg-red-50 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">✊</span>
                </div>
                <h3 className="text-xl font-semibold text-red-900">Public Reaction</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Grassroots Opposition</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Greenpeace's anti-nuclear campaigns mobilized public opposition to nuclear policies, demanding transparency and accountability. Citizens organized protests, legal challenges, and political campaigns questioning government nuclear decision-making.<sup>8</sup>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Environmental Activism</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Public discourse shifted toward environmental and health concerns about nuclear technology. Communities near nuclear facilities demanded studies of health impacts, while environmental groups challenged government assurances about long-term safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Comparison */}
        <div className="bg-gray-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-8">The Widening Gap</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Government Consistency</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Throughout all three eras, government messaging emphasized control, expertise, and national benefit, adapting to crises while maintaining core arguments for nuclear policy continuation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Public Evolution</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Public perception evolved from enthusiastic support, through compliant anxiety, to active opposition, reflecting growing skepticism of government nuclear expertise and transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Footnotes</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p><sup>1</sup> Edison, Thomas. Letter on Military Technology and Radiological Research, 1896. National Archives.</p>
            <p><sup>2</sup> U.S. Bureau of Mines. Annual Report on Radiological Safety in Mining Operations, 1908.</p>
            <p><sup>3</sup> Boyer, Paul. By the Bomb's Early Light: American Thought and Culture at the Dawn of the Atomic Age. University of North Carolina Press, 1994.</p>
            <p><sup>4</sup> President Dwight D. Eisenhower. Atoms for Peace Speech, United Nations, 1953.</p>
            <p><sup>5</sup> Federal Civil Defense Administration. Survival Under Atomic Attack. 1950.</p>
            <p><sup>6</sup> U.S. Nuclear Regulatory Commission. Three Mile Island Hearings Transcripts, 1979.</p>
            <p><sup>7</sup> U.S. Senate Committee on Energy. Hearings on Yucca Mountain Nuclear Waste Storage, 2005.</p>
            <p><sup>8</sup> Greenpeace. Anti-Nuclear Protest Archive, 1982.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GovernmentVsPublic;
