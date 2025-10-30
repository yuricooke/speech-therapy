import { use } from 'react';
import { notFound } from 'next/navigation';
import { siteContent } from '@/utils/content';
import ClientPage from './ClientPage';

// Generate static params for static export
export async function generateStaticParams() {
  const slugs = [
    'bilingual-multilingual-therapy',
    'assessment', 
    'counseling',
    'workshops'
  ];
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function DynamicPage({ params }: PageProps) {
  const { slug } = use(params);
  
  // Check if the slug exists for any language
  const pageExists = ['en', 'pt', 'de'].some(lang => 
    siteContent[lang as keyof typeof siteContent]?.pageContent?.[slug]
  );
  
  if (!pageExists) {
    notFound();
  }

  return <ClientPage slug={slug} />;
} 