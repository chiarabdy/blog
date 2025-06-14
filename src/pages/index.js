import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
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
    &:hover { text-decoration: underline; }
  }
`;

const PostDate = styled.small`
  color: #a0a0a0;
  margin-bottom: 10px;
  display: block;
`;

const PostExcerpt = styled.p`
  line-height: 1.6;
`;

export default function Home({ allPostsData }) {
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}