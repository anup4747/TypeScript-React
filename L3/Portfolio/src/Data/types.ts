export interface PostCardProps {
  title: string;
  date: string;
  categories: string;
  description: string;
}

export interface WorkCardProps {
  image: string;
  title: string;
  year: string;
  category: string;
  description: string;
  route: string;
}

export interface SocialIconProps {
  src: string;
  alt: string;
  link: string;
}

// Define a type for the certificate
export interface Certificate {
  id: number;
  title: string;
  img: string;
}
