interface Icon {
  src: string;
  alt: string;
}

interface WorkCard {
  image: string;
  title: string;
  year: string;
  category: string;
  description: string;
}

export const posts = [
  {
    title: "The Versatile Full Stack Developer",
    date: "12 Feb 2022",
    categories: "Web Development",
    description:
      "Full Stack Developers bridge the gap between front-end and back-end, creating seamless web applications. They work with various technologies, from React to Node.js, ensuring robust and scalable solutions. Continuous learning is key to staying ahead in this dynamic field.",
  },
  {
    title: "Building Resilient APIs",
    date: "30 Jan 2020",
    categories: "API Development",
    description:
      "Building resilient APIs ensures reliability and performance under varying loads. Techniques like rate limiting, caching, and proper error handling are crucial. Staying ahead with best practices and monitoring tools helps maintain robust and scalable APIs.",
  },
];
export const works: WorkCard[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c20d8cbe058d138a577a7ccb149a0cfb9daf826d94326773d7c61cc080b3acda?placeholderIfAbsent=true&apiKey=802d917660ae4455b4ba5187ede45b83",
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboard",
    description:
      "This project involved creating intuitive and visually appealing dashboards. The goal was to provide users with a seamless experience, enabling them to quickly access and analyze data. The design focused on clean layouts, effective data visualization, and user-friendly navigation.",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b17b86b8225766b1399b81a2a6307a3fdd25ae066e4ba443d97b514e116057ad?placeholderIfAbsent=true&apiKey=802d917660ae4455b4ba5187ede45b83",
    title: "Vibrant Portraits of 2020",
    year: "2020",
    category: "Illustration",
    description:
      "Vibrant Portraits of 2020 is a collection of dynamic and colorful illustrations that capture the essence of that year. Each portrait is designed to evoke emotions and tell a story through bold colors and intricate details.",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6e7a367d8e18bb2f354039177838b46195d062c59e5e6bb43995b37064d0cb91?placeholderIfAbsent=true&apiKey=802d917660ae4455b4ba5187ede45b83",
    title: "36 Days of Malayalam Type",
    year: "2020",
    category: "Typography",
    description:
      "This project celebrates the beauty of Malayalam typography. Over 36 days, unique and creative type designs were crafted, showcasing the versatility and richness of the Malayalam script. The work highlights both traditional and contemporary styles, aiming to inspire and promote cultural appreciation.",
  },
];
export const socialIcons: Icon[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/067330deed33eabafef593734c871c83dafce4ba82f75fdaff80de606efc8138?placeholderIfAbsent=true&apiKey=802d917660ae4455b4ba5187ede45b83",
    alt: "Facebook",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4bab6ee0b091fffa43f065bea63ed0f8f43a5ae07dd00079de42fe058d4a4?placeholderIfAbsent=true&apiKey=802d917660ae4455b4ba5187ede45b83",
    alt: "Instagram",  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c65b17ffe1d5d4ff1a341fa08b93867bc6b5f3d81dc031800fa602a3ca99375f?placeholderIfAbsent=true&apiKey=802d917660ae4455b4ba5187ede45b83",
    alt: "Twitter",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d101d20b1c5d5e2ce5dee28df7059a13d11a6bc10ee851284fa393c667620e6c?placeholderIfAbsent=true&apiKey=802d917660ae4455b4ba5187ede45b83",
    alt: "LinkedIn",
  },
];

export interface iconProps {
  icons: Icon[];
}

export interface WorkProps {
  works: WorkCard[];
}