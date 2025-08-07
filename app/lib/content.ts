import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentItem {
  slug: string;
  content: string;
  data: Record<string, unknown>;
}

export interface BlogPost extends ContentItem {
  data: {
    title: string;
    date: string;
    author: string;
    excerpt: string;
    categories: string[];
    tags?: string[];
    image?: string;
    seo_title?: string;
    seo_description?: string;
  };
}

export interface Page extends ContentItem {
  data: {
    title: string;
    description?: string;
    image?: string;
    seo_title?: string;
    seo_description?: string;
  };
}

export interface Service extends ContentItem {
  data: {
    title: string;
    short_description: string;
    icon: string;
    price?: string;
    features: string[];
    order: number;
    image?: string;
  };
}

export interface TeamMember extends ContentItem {
  data: {
    name: string;
    position: string;
    bio: string;
    photo: string;
    email?: string;
    linkedin?: string;
    order: number;
  };
}

export interface Testimonial extends ContentItem {
  data: {
    name: string;
    company: string;
    position?: string;
    testimonial: string;
    rating: number;
    photo?: string;
    featured: boolean;
  };
}

export interface SiteSettings {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface Navigation {
  menu_items?: Array<{
    label: string;
    url: string;
    external: boolean;
  }>;
  columns?: Array<{
    title: string;
    links: Array<{
      label: string;
      url: string;
    }>;
  }>;
}

async function processMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}

export async function getContentBySlug(directory: string, slug: string): Promise<ContentItem | null> {
  try {
    const fullPath = path.join(contentDirectory, directory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const processedContent = await processMarkdown(content);

    return {
      slug,
      content: processedContent,
      data,
    };
  } catch {
    return null;
  }
}

export async function getAllContent(directory: string): Promise<ContentItem[]> {
  try {
    const fullPath = path.join(contentDirectory, directory);
    const files = fs.readdirSync(fullPath);
    const content = await Promise.all(
      files
        .filter((file) => file.endsWith('.md'))
        .map(async (file) => {
          const slug = file.replace(/\.md$/, '');
          const item = await getContentBySlug(directory, slug);
          return item;
        })
    );

    return content.filter((item): item is ContentItem => item !== null);
  } catch {
    return [];
  }
}

export async function getPage(slug: string): Promise<Page | null> {
  const content = await getContentBySlug('pages', slug);
  return content as Page | null;
}

export async function getAllPages(): Promise<Page[]> {
  const content = await getAllContent('pages');
  return content as Page[];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const content = await getContentBySlug('blog', slug);
  return content as BlogPost | null;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const content = await getAllContent('blog');
  const posts = content as BlogPost[];
  return posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export async function getService(slug: string): Promise<Service | null> {
  const content = await getContentBySlug('services', slug);
  return content as Service | null;
}

export async function getAllServices(): Promise<Service[]> {
  const content = await getAllContent('services');
  const services = content as Service[];
  return services.sort((a, b) => a.data.order - b.data.order);
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const content = await getAllContent('team');
  const team = content as TeamMember[];
  return team.sort((a, b) => a.data.order - b.data.order);
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const content = await getAllContent('testimonials');
  return content as Testimonial[];
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const testimonials = await getAllTestimonials();
  return testimonials.filter((t) => t.data.featured);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const content = await getContentBySlug('settings', 'general');
    return (content?.data as unknown) as SiteSettings | null;
  } catch {
    return null;
  }
}

export async function getNavigation(type: 'header' | 'footer'): Promise<Navigation | null> {
  try {
    const content = await getContentBySlug('navigation', type);
    return (content?.data as unknown) as Navigation | null;
  } catch {
    return null;
  }
}
