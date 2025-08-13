import { getPage, getAllServices } from '@/app/lib/content';
import HomeClient from './components/HomeClient';

export default async function Home() {
  // Fetch content from markdown files
  const [homePage, services] = await Promise.all([
    getPage('home'),
    getAllServices()
  ]);

  // Pass the content to the client component
  return <HomeClient homePage={homePage} services={services} />;
}