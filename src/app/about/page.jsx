// src/app/page.js

// 1. Notice we have REMOVED 'use client' and all styled-components from this file.
// This is now a Server Component.

import { getSortedPostsData } from '../lib/posts';
import BlogList from '@/src/components/Blog/BlogList';

export default function Home() {
  // 2. This function runs on the server, so it can safely read files.
  const allPostsData = getSortedPostsData();

  // 3. We pass the data we fetched on the server as a prop to our client component.
  return <BlogList allPostsData={allPostsData} />;
}