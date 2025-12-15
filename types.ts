import { LucideIcon } from "lucide-react";

export type Language = 'en' | 'te';

export type LocalizedString = {
  en: string;
  te: string;
};

export interface Service {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
}

export interface PortfolioItem {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  imageUrl: string;
  client: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: LocalizedString;
  company: string;
  quote: LocalizedString;
  avatar: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: LocalizedString;
}

export interface FAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

export interface BlogPost {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  date: string;
  imageUrl?: string;
  slug: string;
}

export type ThemeColors = 'red' | 'navy' | 'black';