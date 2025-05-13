
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Закрытие мобильного меню при изменении размеров экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white">
              <Icon name="Leaf" size={24} />
            </div>
            <div className="hidden md:block">
              <h1 className="font-montserrat font-bold text-xl tracking-tight text-primary">
                ЭКО<span className="text-secondary">ИННОВАЦИЯ</span>
              </h1>
              <p className="text-xs text-gray-600">Строительные материалы и оборудование</p>
            </div>
          </Link>

          {/* Основное меню - десктоп */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-800 hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="font-medium text-gray-800 hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/about" className="font-medium text-gray-800 hover:text-primary transition-colors">
              О компании
            </Link>
            <Link to="/contacts" className="font-medium text-gray-800 hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Иконки действий */}
          <div className="flex items-center space-x-4">
            {/* Поиск - десктоп */}
            <div className="hidden md:flex items-center relative">
              {isSearchOpen ? (
                <div className="absolute right-0 top-0 flex items-center">
                  <Input 
                    placeholder="Поиск товаров..." 
                    className="w-64 pr-8"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-0"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X size={18} />
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search size={20} className="text-gray-600 hover:text-primary transition-colors" />
                </Button>
              )}
            </div>

            {/* Телефон */}
            <a href="tel:+78001234567" className="hidden md:flex items-center text-gray-800 hover:text-primary transition-colors">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">8 (800) 123-45-67</span>
            </a>

            {/* Корзина */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart size={20} className="text-gray-600 hover:text-primary transition-colors" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Кнопка мобильного меню */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} className="text-gray-800" />
            </Button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-xl flex flex-col animate-fade-in">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-montserrat font-semibold text-lg">Меню</h2>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} className="text-gray-800" />
              </Button>
            </div>
            
            <div className="p-4">
              <div className="relative mb-4">
                <Input placeholder="Поиск товаров..." className="pr-10" />
                <Search size={18} className="absolute right-3 top-3 text-gray-400" />
              </div>
              
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="font-medium text-gray-800 hover:text-primary transition-colors py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Главная
                </Link>
                <Link 
                  to="/catalog" 
                  className="font-medium text-gray-800 hover:text-primary transition-colors py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Каталог
                </Link>
                <Link 
                  to="/about" 
                  className="font-medium text-gray-800 hover:text-primary transition-colors py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  О компании
                </Link>
                <Link 
                  to="/contacts" 
                  className="font-medium text-gray-800 hover:text-primary transition-colors py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Контакты
                </Link>
              </nav>
            </div>
            
            <div className="mt-auto p-4 border-t">
              <a 
                href="tel:+78001234567" 
                className="flex items-center text-gray-800 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">8 (800) 123-45-67</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
