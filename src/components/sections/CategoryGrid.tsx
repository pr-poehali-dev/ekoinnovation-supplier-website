
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface Category {
  id: number;
  name: string;
  icon: string;
  image: string;
  count: number;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Строительные материалы",
    icon: "Construction",
    image: "https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    count: 245,
    link: "/catalog/construction-materials",
  },
  {
    id: 2,
    name: "Отделочные материалы",
    icon: "Paintbrush",
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    count: 183,
    link: "/catalog/finishing-materials",
  },
  {
    id: 3,
    name: "Электроинструменты",
    icon: "Hammer",
    image: "https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    count: 127,
    link: "/catalog/power-tools",
  },
  {
    id: 4,
    name: "Ручной инструмент",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    count: 152,
    link: "/catalog/hand-tools",
  },
  {
    id: 5,
    name: "Спецодежда и СИЗ",
    icon: "HardHat",
    image: "https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    count: 86,
    link: "/catalog/workwear",
  },
  {
    id: 6,
    name: "Сантехника",
    icon: "Shower",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    count: 109,
    link: "/catalog/plumbing",
  },
];

const CategoryGrid = () => {
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
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Популярные категории
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Более 1,500 товаров для строительства, ремонта и обустройства дома и промышленных объектов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className={`group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white rounded-full p-2 z-20">
                <Icon name={category.icon} className="text-primary h-6 w-6" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary-100 transition-colors font-montserrat">
                  {category.name}
                </h3>
                <span className="text-sm text-gray-200">{category.count} товаров</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
