import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/perception-shifts', label: 'Perception Shifts' },
    { path: '/government-vs-public', label: 'Government vs Public' },
    { path: '/bibliography', label: 'Bibliography' },
  ];

  return (
    <nav className="bg-white border-b-2 border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            The Nuclear Narrative
          </Link>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-blue-600",
                  location.pathname === item.path
                    ? "text-blue-600 border-b-2 border-blue-600 pb-4"
                    : "text-gray-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
