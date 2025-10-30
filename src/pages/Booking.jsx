import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    passportSeries: '',
    passportNumber: '',
    phone: '',
    birthDate: '',
    carClass: '',
    carBrand: '',
    carModel: '',
    startDate: '',
    endDate: '',
    branch: '',
    cardNumber: '',
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      toast({
        title: 'Требуется авторизация',
        description: 'Войдите в систему для оформления бронирования',
        variant: 'destructive',
      });
      navigate('/login');
      return;
    }
    
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const userData = JSON.parse(storedData);
      setFormData(prev => ({
        ...prev,
        lastName: userData.lastName || '',
        firstName: userData.firstName || '',
        middleName: userData.middleName || '',
        passportSeries: userData.passportSeries || '',
        passportNumber: userData.passportNumber || '',
        phone: userData.phone || '',
        birthDate: userData.birthDate || '',
      }));
    }
  }, [navigate, toast]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.carClass || !formData.carBrand || !formData.startDate || !formData.endDate || !formData.branch || !formData.cardNumber) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все обязательные поля',
        variant: 'destructive',
      });
      return;
    }
    
    const bookingData = {
      ...formData,
      date: new Date().toISOString(),
      status: 'confirmed',
    };
    
    const existingBookings = JSON.parse(localStorage.getItem('bookingHistory') || '[]');
    localStorage.setItem('bookingHistory', JSON.stringify([...existingBookings, bookingData]));
    
    toast({
      title: 'Успешно!',
      description: 'Бронирование оформлено',
    });
    navigate('/history');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/files/8e185479-5717-4245-be83-11e746c8a03b.png"
                alt="Индекс Драйв"
                className="h-12 w-auto"
              />
              <h1 className="text-xl font-bold" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>
                Индекс Драйв
              </h1>
            </Link>
            <Button variant="outline" asChild>
              <Link to="/account">
                <Icon name="User" size={18} className="mr-2" />
                Личный кабинет
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Оформление бронирования</h1>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="UserCircle" size={24} />
                Личные данные
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lastName">Фамилия *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName">Имя *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="middleName">Отчество</Label>
                  <Input
                    id="middleName"
                    value={formData.middleName}
                    onChange={(e) => handleChange('middleName', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="passportSeries">Серия паспорта *</Label>
                  <Input
                    id="passportSeries"
                    value={formData.passportSeries}
                    onChange={(e) => handleChange('passportSeries', e.target.value)}
                    maxLength={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passportNumber">Номер паспорта *</Label>
                  <Input
                    id="passportNumber"
                    value={formData.passportNumber}
                    onChange={(e) => handleChange('passportNumber', e.target.value)}
                    maxLength={6}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Дата рождения *</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => handleChange('birthDate', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Car" size={24} />
                Данные об автомобиле
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="carClass">Класс автомобиля *</Label>
                  <Select value={formData.carClass} onValueChange={(value) => handleChange('carClass', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите класс" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Эконом</SelectItem>
                      <SelectItem value="comfort">Комфорт</SelectItem>
                      <SelectItem value="premium">Премиум</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="carBrand">Марка *</Label>
                  <Select value={formData.carBrand} onValueChange={(value) => handleChange('carBrand', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите марку" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="volkswagen">Volkswagen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="carModel">Модель</Label>
                <Input
                  id="carModel"
                  value={formData.carModel}
                  onChange={(e) => handleChange('carModel', e.target.value)}
                  placeholder="Укажите модель (опционально)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="branch">Филиал *</Label>
                <Select value={formData.branch} onValueChange={(value) => handleChange('branch', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите филиал" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="central">Центральный</SelectItem>
                    <SelectItem value="north">Северный</SelectItem>
                    <SelectItem value="south">Южный</SelectItem>
                    <SelectItem value="east">Восточный</SelectItem>
                    <SelectItem value="west">Западный</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" size={24} />
                Период аренды
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Дата начала *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleChange('startDate', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">Дата окончания *</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleChange('endDate', e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="CreditCard" size={24} />
                Способ оплаты
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Номер карты *</Label>
                <Input
                  id="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => handleChange('cardNumber', e.target.value)}
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  required
                />
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Icon name="Lock" size={16} />
                Ваши платежные данные защищены
              </p>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" size="lg" className="flex-1">
              <Icon name="CheckCircle" size={20} className="mr-2" />
              Оформить бронирование
            </Button>
            <Button type="button" variant="outline" size="lg" asChild>
              <Link to="/cars">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Link>
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
