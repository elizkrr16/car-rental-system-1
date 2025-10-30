import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex items-center justify-center flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Упс! Страница не найдена</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Вернуться на главную
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
