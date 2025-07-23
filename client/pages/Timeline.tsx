import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Timeline = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Timeline</h1>
          <p className="text-lg text-gray-600">Key events that shaped America's nuclear narrative</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Period 1: 1877-1909 */}
        <div className="mb-16">
          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-2">1877–1909: Scientific Enthusiasm</h2>
            <p className="text-green-700">An era of discovery and optimism about radioactive materials</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">1896</h3>
                  <p className="text-sm text-gray-500">Edison's Revolutionary Letter</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Thomas Edison's letter to the War Department outlined potential military applications of newly discovered radioactive materials, reflecting early scientific optimism about nuclear technology's beneficial uses.<sup>1</sup>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">⛏️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">1908</h3>
                  <p className="text-sm text-gray-500">Mining Safety Report</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                The U.S. Bureau of Mines published its first comprehensive report on radiological safety in mining operations, establishing early protocols for handling radioactive materials in industrial settings.<sup>2</sup>
              </p>
            </div>
          </div>
        </div>

        {/* Period 2: 1910-1959 */}
        <div className="mb-16">
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">1910–1959: Government Control & Propaganda</h2>
            <p className="text-yellow-700">The rise of nuclear secrecy and controlled public messaging</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💥</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">1945</h3>
                  <p className="text-sm text-gray-500">Hiroshima & Nagasaki</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                The atomic bombings marked the beginning of the nuclear age and fundamentally changed how Americans perceived nuclear technology—from scientific curiosity to weapon of mass destruction.<sup>3</sup>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">1950</h3>
                  <p className="text-sm text-gray-500">Civil Defense Campaign</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                The Federal Civil Defense Administration released "Survival Under Atomic Attack," a pamphlet designed to reassure citizens while preparing them for nuclear warfare during the Cold War.<sup>4</sup>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">☮️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">1953</h3>
                  <p className="text-sm text-gray-500">Atoms for Peace</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                President Eisenhower's "Atoms for Peace" speech at the United Nations promoted peaceful nuclear technology while maintaining government control over nuclear information and policy.<sup>5</sup>
              </p>
            </div>
          </div>
        </div>

        {/* Period 3: 1960-2016 */}
        <div className="mb-16">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <h2 className="text-2xl font-bold text-red-800 mb-2">1960–2016: Public Backlash & Activism</h2>
            <p className="text-red-700">Growing distrust and grassroots opposition to nuclear policies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">☢️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">1979</h3>
                  <p className="text-sm text-gray-500">Three Mile Island</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                The partial nuclear meltdown at Three Mile Island marked a turning point in public trust, leading to extensive congressional hearings and increased scrutiny of nuclear safety protocols.<sup>6</sup>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🏴</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">1982</h3>
                  <p className="text-sm text-gray-500">Greenpeace Protests</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Greenpeace's organized anti-nuclear protests represented the height of grassroots activism, challenging government nuclear policies through direct action and public awareness campaigns.<sup>7</sup>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🏔️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">2005</h3>
                  <p className="text-sm text-gray-500">Yucca Mountain Hearings</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Senate hearings on the Yucca Mountain nuclear waste storage facility highlighted ongoing public opposition to nuclear waste disposal and long-term environmental concerns.<sup>8</sup>
              </p>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Footnotes</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p><sup>1</sup> Edison, Thomas. Letter on Military Technology and Radiological Research, 1896. National Archives.</p>
            <p><sup>2</sup> U.S. Bureau of Mines. Annual Report on Radiological Safety in Mining Operations, 1908.</p>
            <p><sup>3</sup> Boyer, Paul. By the Bomb's Early Light: American Thought and Culture at the Dawn of the Atomic Age. University of North Carolina Press, 1994.</p>
            <p><sup>4</sup> Federal Civil Defense Administration. Survival Under Atomic Attack. 1950.</p>
            <p><sup>5</sup> President Dwight D. Eisenhower. Atoms for Peace Speech, United Nations, 1953.</p>
            <p><sup>6</sup> U.S. Nuclear Regulatory Commission. Three Mile Island Hearings Transcripts, 1979.</p>
            <p><sup>7</sup> Greenpeace. Anti-Nuclear Protest Archive, 1982.</p>
            <p><sup>8</sup> U.S. Senate Committee on Energy. Hearings on Yucca Mountain Nuclear Waste Storage, 2005.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
