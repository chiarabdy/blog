// src/components/Blog/BlogList.jsx
'use client'; // This is now a dedicated Client Component.

import Link from 'next/link';
import styled from 'styled-components';

// All of our styled-components now live here.
const HomePageWrapper = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #e0e0e0;
  border-bottom: 2px solid #00d1cd;
  padding-bottom: 10px;
  margin-bottom: 40px;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostListItem = styled.li`
  margin-bottom: 30px;
`;

const PostTitle = styled.h2`
  font-size: 1.75rem;
  margin: 0;
  a {
    text-decoration: none;
    color: #00d1cd;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostDate = styled.small`
  color: #a0a0a0;
  margin-bottom: 10px;
  display: block;
`;

const PostExcerpt = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
`;

// This component receives the post data as a prop.
export default function BlogList({ allPostsData }) {
  return (
    <HomePageWrapper>
      <PageTitle>Blog</PageTitle>
      <PostList>
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <PostListItem key={id}>
            <PostTitle>
              <Link href={`/posts/${id}`}>{title}</Link>
            </PostTitle>
            <PostDate>{date}</PostDate>
            <PostExcerpt>{excerpt}</PostExcerpt>
          </PostListItem>
        ))}
      </PostList>
    </HomePageWrapper>
  );
}