
import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "Leaf",
    title: "Экологичность",
    description: "Мы предлагаем материалы, безопасные для здоровья и окружающей среды."
  },
  {
    icon: "BadgeCheck",
    title: "Гарантия качества",
    description: "Все товары проходят строгий контроль качества и имеют необходимые сертификаты."
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Доставляем товары в любую точку России в кратчайшие сроки."
  },
  {
    icon: "Settings",
    title: "Проектирование",
    description: "Помогаем в разработке индивидуальных проектов для ваших задач."
  },
  {
    icon: "Users",
    title: "Команда профессионалов",
    description: "Наши сотрудники имеют многолетний опыт работы в отрасли."
  },
  {
    icon: "Wallet",
    title: "Выгодные цены",
    description: "Предлагаем конкурентные цены и гибкую систему скидок."
  }
];

const FeatureSection = () => {
  const [animatedElements, setAnimatedElements] = useState<Element[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Поиск элементов для анимации
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      setAnimatedElements(Array.from(elements));
    }

    // Функция для анимации при прокрутке
    const animateOnScroll = () => {
      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          element.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Инициализация для элементов, которые уже видны при загрузке
    setTimeout(animateOnScroll, 100);

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, [animatedElements]);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ЭКОИННОВАЦИЯ — ваш надежный партнер в строительстве и ремонте с 2010 года
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 font-montserrat">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-xl p-8 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-primary mb-3 font-montserrat">
                Нужна консультация специалиста?
              </h3>
              <p className="text-gray-700">
                Наши эксперты помогут вам подобрать оптимальные материалы и оборудование для вашего проекта
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+78001234567" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary-50 transition-colors"
              >
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                8 (800) 123-45-67
              </a>
              <a 
                href="mailto:info@ecoinnovation.ru" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
              >
                <Icon name="Mail" className="mr-2 h-5 w-5" />
                Написать нам
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
