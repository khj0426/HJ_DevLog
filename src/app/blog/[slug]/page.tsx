import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import BlogLayOut from '@/Component/Blog/LayOut';
import { getPostBySlug } from '../../../../lib/api';

export default function Post({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = getPostBySlug(params.slug, [
    'title',
    'content',
    'excerpt',
    'date',
    'author',
  ]);

  return (
    <BlogLayOut>
      <h2>{post.title}</h2>
      <p
        style={{
          fontWeight: '700',
        }}
      >
        {post.date}
      </p>

      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <Image
              src={props.src || ''}
              alt="마크다운 이미지"
              width={700}
              height={75}
              style={{
                maxWidth: '100%',
                maxHeight: '50%',
                objectFit: 'contain',
              }}
            />
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </BlogLayOut>
  );
}
