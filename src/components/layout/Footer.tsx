
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Каталог",
    links: [
      { title: "Строительные материалы", href: "/catalog/construction-materials" },
      { title: "Отделочные материалы", href: "/catalog/finishing-materials" },
      { title: "Электроинструменты", href: "/catalog/power-tools" },
      { title: "Ручной инструмент", href: "/catalog/hand-tools" },
      { title: "Спецодежда и СИЗ", href: "/catalog/workwear" },
    ],
  },
  {
    title: "Компания",
    links: [
      { title: "О компании", href: "/about" },
      { title: "Наши проекты", href: "/projects" },
      { title: "Сертификаты", href: "/certificates" },
      { title: "Вакансии", href: "/careers" },
      { title: "Контакты", href: "/contacts" },
    ],
  },
  {
    title: "Информация",
    links: [
      { title: "Доставка и оплата", href: "/delivery" },
      { title: "Возврат товара", href: "/returns" },
      { title: "Гарантии", href: "/warranty" },
      { title: "Политика конфиденциальности", href: "/privacy" },
      { title: "Оптовым покупателям", href: "/wholesale" },
    ],
  },
];

const socialLinks = [
  { icon: "Facebook", href: "https://facebook.com", label: "Facebook" },
  { icon: "Instagram", href: "https://instagram.com", label: "Instagram" },
  { icon: "Youtube", href: "https://youtube.com", label: "YouTube" },
  { icon: "Telegram", href: "https://t.me/ecoinnovation", label: "Telegram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Верхняя часть футера */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Информация о компании */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white">
                <Icon name="Leaf" size={24} />
              </div>
              <div>
                <h2 className="font-montserrat font-bold text-xl tracking-tight text-white">
                  ЭКО<span className="text-secondary-400">ИННОВАЦИЯ</span>
                </h2>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Поставка профессионального оборудования, экологичных строительных и отделочных материалов, 
              а также инструментов для любых проектов с 2010 года.
            </p>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={link.label}
                >
                  <Icon name={link.icon} className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
            <div className="mb-6">
              <p className="text-gray-300 mb-2">Свяжитесь с нами:</p>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <Icon name="Phone" className="h-4 w-4" />
                <a href="tel:+78001234567" className="hover:text-primary-300 transition-colors">
                  8 (800) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Icon name="Mail" className="h-4 w-4" />
                <a href="mailto:info@ecoinnovation.ru" className="hover:text-primary-300 transition-colors">
                  info@ecoinnovation.ru
                </a>
              </div>
            </div>
          </div>

          {/* Секции ссылок */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-montserrat font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary-300 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Нижняя часть футера с копирайтом */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} ЭКОИННОВАЦИЯ. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
