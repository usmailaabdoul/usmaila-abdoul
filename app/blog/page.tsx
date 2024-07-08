import { BlogBody } from '@/components/blog/Blog-body';
import { Metadata } from 'next';

//TODO: Add proper metadata to the page
export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest blog posts and tutorials.',

  alternates: {
    canonical: '/blog',
  },
};

const Blog = async () => {

  return <BlogBody />
};

export default Blog;
