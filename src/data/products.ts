export const CATEGORIES = ["All", "Phones", "Laptops", "Tablets"];

export type Category = typeof CATEGORIES[number];

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  // Phones
  {
    id: 1,
    name: "iPhone 18 Pro Max",
    category: "Phones",
    price: 1199,
    description: "Флагманский смартфон Apple с чипом A20 Pro, подэкранным Face ID и продвинутой системой камер.",
    imageUrl: "public/iphone18promax.webp",
  },
  {
    id: 2,
    name: "Samsung Galaxy S26 Ultra",
    category: "Phones",
    price: 1299,
    description: "Топовый смартфон Samsung со встроенным стилусом S Pen, 200-мегапиксельной камерой и дисплеем Dynamic AMOLED 2X.",
    imageUrl: "public/samsungs26ultra.webp",
  },
  {
    id: 3,
    name: "Google Pixel 11 Pro XL",
    category: "Phones",
    price: 1099,
    description: "Большой флагман от Google на базе процессора Tensor G6 с передовыми ИИ-функциями и лучшей ночной съемкой.",
    imageUrl: "public/pixel11proxl.webp",
  },
  {
    id: 4,
    name: "Xiaomi 18 Pro Max",
    category: "Phones",
    price: 999,
    description: "Мощный камерофон с оптикой Leica, сверхбыстрой зарядкой и безрамочным LTPO OLED-экраном.",
    imageUrl: "public/xiaomi18promax.webp",
  },

  // Laptops
  {
    id: 5,
    name: "Apple MacBook Pro 14",
    category: "Laptops",
    price: 1999,
    description: "Профессиональный ноутбук с дисплеем Liquid Retina XDR, чипом серии M и рекордной автономностью.",
    imageUrl: "public/macbookpro14.webp",
  },
  {
    id: 6,
    name: "Lenovo Legion 9",
    category: "Laptops",
    price: 3499,
    description: "Экстремальный игровой ноутбук со встроенной системой жидкостного охлаждения и Mini-LED экраном.",
    imageUrl: "public/lenovolegion9.webp",
  },
  {
    id: 7,
    name: "Microsoft Surface Laptop Ultra",
    category: "Laptops",
    price: 1799,
    description: "Тонкий и легкий сенсорный ультрабук с глубокой интеграцией функций искусственного интеллекта Copilot+.",
    imageUrl: "public/surfacelaptopultra.webp",
  },
  {
    id: 8,
    name: "ASUS ProArt P16",
    category: "Laptops",
    price: 2299,
    description: "Мобильная рабочая станция для создателей контента с OLED-экраном 4K и контроллером ASUS DialPad.",
    imageUrl: "public/asusproartp16.webp",
  },

  // Tablets
  {
    id: 9,
    name: "Apple iPad Pro",
    category: "Tablets",
    price: 999,
    description: "Сверхтонкий планшет с тандемным OLED-дисплеем Ultra Retina XDR и поддержкой Apple Pencil Pro.",
    imageUrl: "public/ipadpro.webp",
  },
  {
    id: 10,
    name: "Samsung Galaxy Tab S12 Ultra",
    category: "Tablets",
    price: 1199,
    description: "Огромный 14.6-дюймовый планшет с защитой от воды IP68, стилусом S Pen в комплекте и режимом DeX.",
    imageUrl: "public/galaxytabs12ultra.webp",
  },
  {
    id: 11,
    name: "Huawei MatePad Pro 12.2",
    category: "Tablets",
    price: 849,
    description: "Легкий планшет с антибликовым экраном PaperMatte, идеально подходящий для рисования и работы с документами.",
    imageUrl: "public/matepadpro12.webp",
  },
  {
    id: 12,
    name: "Xiaomi Pad 8 Pro",
    category: "Tablets",
    price: 699,
    description: "Флагманский планшет с процессором Snapdragon 8 Elite, 11.2-дюймовым экраном 3.2K (144 Гц) и быстрой зарядкой 67 Вт.",
    imageUrl: "public/xiaomipad8pro.webp",
  }
];