import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronDown, Linkedin, Instagram, Twitter, Facebook, BookOpen, Code, ArrowRight } from 'lucide-react';
import Program1 from './components/Program1';

const programs = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Program ${i + 1}${i === 4 ? 'A' : i === 5 ? 'B' : ''}`,
  href: `#program-${i + 1}`,
  description: `Learn and implement ${i === 4 ? 'Array Operations' : i === 5 ? 'Linked List Operations' : 'Data Structure Operations'}`
}));

const studyMaterials = [
  { id: 1, title: 'Arrays & Strings', description: 'Master array manipulation and string algorithms' },
  { id: 2, title: 'Linked Lists', description: 'Understanding linear data structures' },
  { id: 3, title: 'Trees & Graphs', description: 'Explore hierarchical and network structures' },
  { id: 4, title: 'Sorting & Searching', description: 'Learn efficient sorting and searching techniques' },
  { id: 5, title: 'Dynamic Programming', description: 'Master problem-solving with DP' },
  { id: 6, title: 'Advanced Algorithms', description: 'Deep dive into complex algorithms' },
];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currentProgram, setCurrentProgram] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (currentProgram === 1) {
    return <Program1 />;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gray-50'}`}>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/10 dark:bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-orange-500">DSA Learning Hub</h1>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 transition">
                  Home
                </a>
                <a href="#notes" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 transition">
                  Study Notes
                </a>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 transition"
                  >
                    Programs & Outputs
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu">
                        {programs.map((program) => (
                          <a
                            key={program.id}
                            href={program.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            role="menuitem"
                          >
                            {program.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
            Master Data Structures & Algorithms
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Explore comprehensive study materials and coding programs to ace DSA.
          </p>
          <button
            onClick={() => setShowMenu(true)}
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Menu Overlay */}
      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Choose Your Learning Path</h3>
                <button
                  onClick={() => setShowMenu(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Study Materials Section */}
              <div className="mb-8">
                <h4 className="flex items-center text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Study Materials
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studyMaterials.map((material) => (
                    <div
                      key={material.id}
                      className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors cursor-pointer group"
                    >
                      <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-orange-500">
                        {material.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">{material.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programs Section */}
              <div>
                <h4 className="flex items-center text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  <Code className="w-5 h-5 mr-2" />
                  Practice Programs
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {programs.map((program) => (
                    <div
                      key={program.id}
                      onClick={() => {
                        setShowMenu(false);
                        setCurrentProgram(program.id);
                      }}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors cursor-pointer group"
                    >
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-500">
                          {program.name}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{program.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white/10 dark:bg-gray-900/80 backdrop-blur-lg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            &copy; 2025 DSA Learning Hub
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            {[
              { Icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
              { Icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
              { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              { Icon: Facebook, href: 'https://www.facebook.com', label: 'Facebook' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition transform hover:scale-110"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;