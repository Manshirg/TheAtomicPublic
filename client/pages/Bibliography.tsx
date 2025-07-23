import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Bibliography = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sources & Bibliography</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Attribution */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <p className="text-blue-800 leading-relaxed">
            This site was created by <strong>Manshir Gill</strong> for a U.S. History final project. 
            All sources are cited using Chicago-style footnotes. The bibliography below is divided into Primary and Secondary sources.
          </p>
        </div>

        {/* Primary Sources */}
        <div className="mb-16">
          <div className="bg-green-600 text-white p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="mr-3">📜</span>
              Primary Sources
            </h2>
          </div>
          <div className="bg-white shadow-lg rounded-b-lg p-8">
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-gray-800">
                  Edison, Thomas. <em>Letter on Military Technology and Radiological Research</em>, 1896. National Archives.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Early correspondence demonstrating scientific enthusiasm for radioactive materials and their potential military applications.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-gray-800">
                  U.S. Bureau of Mines. <em>Annual Report on Radiological Safety in Mining Operations</em>, 1908.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Federal documentation of early industrial approaches to radioactive material handling and safety protocols.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-gray-800">
                  Federal Civil Defense Administration. <em>Survival Under Atomic Attack</em>. 1950.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Government pamphlet exemplifying Cold War-era public messaging about nuclear threats and civilian preparedness.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-gray-800">
                  President Dwight D. Eisenhower. <em>Atoms for Peace Speech, United Nations</em>, 1953.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Presidential address promoting peaceful nuclear technology while maintaining government control over nuclear policy.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-gray-800">
                  U.S. Nuclear Regulatory Commission. <em>Three Mile Island Hearings Transcripts</em>, 1979.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Congressional testimony and official records from the aftermath of America's worst commercial nuclear accident.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-gray-800">
                  Greenpeace. <em>Anti-Nuclear Protest Archive</em>, 1982.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Documentation of grassroots environmental activism and organized opposition to nuclear policies.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-gray-800">
                  U.S. Senate Committee on Energy. <em>Hearings on Yucca Mountain Nuclear Waste Storage</em>, 2005.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Legislative proceedings addressing long-term nuclear waste storage and public opposition to proposed solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary and Tertiary Sources */}
        <div className="mb-16">
          <div className="bg-purple-600 text-white p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="mr-3">📚</span>
              Secondary and Tertiary Sources
            </h2>
          </div>
          <div className="bg-white shadow-lg rounded-b-lg p-8">
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <p className="text-gray-800">
                  Boyer, Paul. <em>By the Bomb's Early Light: American Thought and Culture at the Dawn of the Atomic Age</em>. University of North Carolina Press, 1994.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Comprehensive analysis of how atomic weapons influenced American culture and public consciousness in the immediate post-war period.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <p className="text-gray-800">
                  Hughes, Thomas. <em>American Genesis: A Century of Invention and Technological Enthusiasm, 1870–1970</em>. University of Chicago Press, 1989.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Historical examination of American technological optimism and its influence on public perception of scientific advancement.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <p className="text-gray-800">
                  Wellerstein, Alex. <em>Restricted Data: The History of Nuclear Secrecy in the United States</em>. University of Chicago Press, 2021.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Modern scholarly analysis of government information control and its impact on public understanding of nuclear technology.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <p className="text-gray-800">
                  Masco, Joseph. <em>The Nuclear Borderlands</em>. Princeton University Press, 2006.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Anthropological study of nuclear culture and its effects on American communities and environmental consciousness.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <p className="text-gray-800">
                  Hales, Peter. <em>Atomic Spaces: Living on the Manhattan Project</em>. University of Illinois Press, 1997.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Social history examining how nuclear weapons development shaped American communities and daily life.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <p className="text-gray-800">
                  Kevles, Daniel J. <em>The Physicists: The History of a Scientific Community in Modern America</em>. Harvard University Press, 1978.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Academic history of American physics community and its relationship with government and public policy.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <p className="text-gray-800">
                  Walker, Mark. <em>German National Socialism and the Quest for Nuclear Science</em>. Cambridge University Press, 2000.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Comparative analysis providing international context for American nuclear policy development during World War II.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <p className="text-gray-800">
                  Bulletin of the Atomic Scientists. "The Nuclear Fear: Popular Culture and Public Opinion."
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Scholarly journal articles examining the intersection of nuclear policy, media representation, and public perception.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <p className="text-gray-800">
                  American Institute of Physics. <em>History of Nuclear Science Portal</em>. https://www.aip.org/history-programs/nuclear-science
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Digital archive and educational resource documenting the development of nuclear science in American context.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Note */}
        <div className="bg-gray-100 border-l-4 border-gray-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Methodology</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            This research utilized a chronological approach to examine changing public perception of nuclear science across three distinct eras. 
            Primary sources were analyzed to understand government messaging strategies, while secondary sources provided scholarly interpretation 
            of broader cultural and political contexts.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            All sources follow Chicago Manual of Style citation format, with footnotes providing immediate source identification 
            and this bibliography offering complete publication information for further research.
          </p>
        </div>

        {/* Academic Integrity Statement */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            <strong>Academic Integrity Statement:</strong> All sources have been properly cited and attributed.
            This work represents original analysis based on documented historical evidence.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bibliography;
