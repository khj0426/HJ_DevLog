import Link from 'next/link';
import Title from '@/Component/About/Title';
import PostLayout from '@/Component/Common/PostLayout';
import { getCategoryFilteredPosts } from '../../../../lib/api';

export default function Home({
  params,
}: {
  params: {
    categoryId: string;
  };
}) {
  const posts = getCategoryFilteredPosts(
    ['title', 'data', 'slug', 'category', 'excerpt', 'date'],
    params.categoryId
  );

  return (
    <>
      <h2>{params.categoryId}</h2>
      <main
        style={{
          minWidth: '60%',
        }}
      >
        {posts.map((post) => (
          <PostLayout key={post.title}>
            <Link href={`/category/${params.categoryId}/${post.slug}`}>
              <Title title={post.title} />
              <p>{post.category}</p>
              {post.content}
            </Link>
          </PostLayout>
        ))}
      </main>
    </>
  );
}
