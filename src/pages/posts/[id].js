import { getAllPostIds, getPostData } from '../../lib/posts';
import styled from 'styled-components';

const PostWrapper = styled.article`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const PostContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
`;

export default function Post({ postData }) {
  return (
    <PostWrapper>
      <h1>{postData.title}</h1>
      <small>{postData.date}</small>
      <hr />
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