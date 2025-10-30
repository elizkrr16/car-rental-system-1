import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';

const Index = () => {
  const [searchClass, setSearchClass] = useState('');
  const [searchBrand, setSearchBrand] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const news = [
    {
      id: 1,
      title: 'В России вынесли первый приговор за продажу аккаунтов каршеринга',
      description: 'В конце 2020 года в России вынесли первый приговор за продажу аккаунтов каршеринга. Приморский районный суд Петербурга оштрафовал гражданина РФ Романа Амелина на 50 тыс. рублей.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
    },
    {
      id: 2,
      title: 'Программа поддержки каршеринга не заработала из-за российского телематического оборудования',
      description: '25 августа 2020 года стало известно о том, что программа поддержки каршеринга, которая была анонсирована ещё в апреле на совещании у президента РФ Владимира Путина, так и не заработала.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
    },
    {
      id: 3,
      title: 'Мошенничество с данными клиентов',
      description: 'По сообщениям на июль 2020 г каршеринг становится отличным помощником для мошенников. С помощью селфи клиентов с паспортом на людей берут кредиты в микрофинансовых компаниях.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400',
    },
    {
      id: 4,
      title: 'Столичный каршеринг обвинил Роспотребнадзор в блокировке деятельности',
      description: 'Каршеринг не может возобновить работу по докоронавирусному сценарию из-за отсутствия предписаний Роспотребнадзора. Представители сервисов обвинили ведомство в блокировке их деятельности и 9 июня направили коллективное обращение.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/files/8e185479-5717-4245-be83-11e746c8a03b.png"
                alt="Индекс Драйв"
                className="h-16 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>Индекс Драйв</h1>
                <p className="text-xs text-muted-foreground">Ваш надежный выбор</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/branches" className="text-sm font-medium hover:text-primary transition-colors">
                Филиалы
              </Link>
              <Link to="/cars" className="text-sm font-medium hover:text-primary transition-colors">
                Бронирование
              </Link>
              <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">
                <Icon name="User" size={18} className="inline mr-1" />
                Личный кабинет
              </Link>
            </nav>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>
                    Индекс Драйв
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link 
                    to="/branches" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon name="MapPin" size={20} />
                    <span className="font-medium">Филиалы</span>
                  </Link>
                  <Link 
                    to="/cars" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon name="Car" size={20} />
                    <span className="font-medium">Бронирование</span>
                  </Link>
                  <Link 
                    to="/login" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon name="User" size={20} />
                    <span className="font-medium">Личный кабинет</span>
                  </Link>
                  <div className="border-t pt-4 mt-4">
                    <Button asChild className="w-full">
                      <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                        <Icon name="UserPlus" size={18} className="mr-2" />
                        Регистрация
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Аренда автомобилей</h2>
            <p className="text-xl opacity-90">
              Более 500 довольных клиентов выбрали нас. Широкий выбор автомобилей и прозрачные условия аренды.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="Shield" size={20} />
                <span>Полное страхование</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="Clock" size={20} />
                <span>24/7 поддержка</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="Award" size={20} />
                <span>Лучшие цены</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto animate-slide-up shadow-lg border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Search" size={28} />
                Поиск автомобиля
              </CardTitle>
              <CardDescription>Найдите идеальный автомобиль для вашей поездки</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Класс автомобиля</label>
                  <Select value={searchClass} onValueChange={setSearchClass}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите класс" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Эконом</SelectItem>
                      <SelectItem value="premium">Премиум</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Марка</label>
                  <Select value={searchBrand} onValueChange={setSearchBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите марку" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="toyota">Toyota</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button asChild className="w-full">
                    <Link to="/cars">
                      <Icon name="Search" size={18} className="mr-2" />
                      Найти автомобиль
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Новости отрасли</h2>
            <p className="text-muted-foreground">Следите за актуальными событиями в мире автопроката</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
