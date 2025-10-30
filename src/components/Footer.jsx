import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigationLinks = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/branches', label: 'Филиалы', icon: 'MapPin' },
    { path: '/cars', label: 'Бронирование', icon: 'Car' },
    { path: '/account', label: 'Личный кабинет', icon: 'User' },
  ];

  const visibleLinks = navigationLinks.filter(link => link.path !== currentPath);

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.poehali.dev/files/8e185479-5717-4245-be83-11e746c8a03b.png"
                alt="Индекс Драйв"
                className="h-12 w-auto"
              />
              <h3 className="text-xl font-bold" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>
                Индекс Драйв
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Надежный сервис аренды автомобилей с лучшими условиями
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Icon name="Navigation" size={18} />
              Навигация
            </h4>
            <nav className="space-y-2">
              {visibleLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name={link.icon} size={16} />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Icon name="Phone" size={18} />
              Контакты
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@indexdrive.ru
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (800) 555-35-35
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                Круглосуточная поддержка
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Индекс Драйв. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
