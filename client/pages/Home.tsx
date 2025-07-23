import Navigation from '@/components/Navigation';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            The Nuclear Narrative
          </h1>
          <h2 className="text-2xl text-gray-600 mb-8">
            How Public Perception of Nuclear Science Changed America (1877–2016)
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Thesis */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Thesis Statement</h3>
          <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-6">
            "The United States' political leadership, media framing, and social anxieties from 1877 to 2016 shaped both the pace of nuclear science advancement and the public's alternating perception of it as a force for progress or existential danger."
          </blockquote>
        </div>

        {/* Era Previews */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">1877–1909</h4>
              <p className="text-sm text-gray-500 mb-4">The Age of Discovery</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Scientific enthusiasm and minimal public concern characterized this era. Edison's explorations and early mining reports reflected an optimistic view of radioactive materials as tools for progress and innovation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">1910–1959</h4>
              <p className="text-sm text-gray-500 mb-4">Government Control</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Rise of Cold War nuclear secrecy and domestic propaganda. From Hiroshima to "Atoms for Peace," the government carefully managed public perception through controlled messaging and civil defense campaigns.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">1960–2016</h4>
              <p className="text-sm text-gray-500 mb-4">Public Backlash</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Public backlash and grassroots activism emerged. Three Mile Island, Greenpeace protests, and debates over Yucca Mountain revealed growing distrust and demands for transparency in nuclear policy.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            Created by Manshir Gill for U.S. History Final Project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
