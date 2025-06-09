import { getAllPostIds, getPostData } from '../../lib/posts';
import styled from 'styled-components';

const PostWrapper = styled.article`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #e0e0e0;
`;

const PostHeader = styled.header`
  margin-bottom: 30px;
  border-bottom: 2px solid #2a2a4e;
  padding-bottom: 20px;
`;

const PostTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin: 0;
`;

const PostDate = styled.div`
  color: #a0a0a0;
  margin-top: 10px;
`;

const PostContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;

  h2,
  h3 {
    color: #00d1cd;
    border-bottom: 1px solid #2a2a4e;
    padding-bottom: 5px;
    margin-top: 40px;
  }

  p,
  ul,
  ol {
    margin-bottom: 20px;
  }

  code {
    background-color: #2a2a4e;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }
`;

export default function Post({ postData }) {
  return (
    <PostWrapper>
      <PostHeader>
        <PostTitle>{postData.title}</PostTitle>
        <PostDate>{postData.date}</PostDate>
      </PostHeader>
      <PostContent dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </PostWrapper>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}