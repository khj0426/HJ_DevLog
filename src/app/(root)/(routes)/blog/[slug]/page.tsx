import { Metadata } from 'next';

import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

import rehypeRaw from 'rehype-raw';

import CodeBlock from '@/Component/Blog/CodeBlock';
import PostExtract from '@/Component/Blog/Extract';
import BlogLayout from '@/Component/Blog/Layout';
import Comments from '@/Component/Giscus/Gitcus';
import TOC from '@/Component/TOC';
import { getPostBySlug } from '~/lib/api';
import makeTableOfContent from '~/lib/makeTableOfContent';
export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug, [
    'title',
    'content',
    'excerpt',
    'date',
    'author',
    'image',
  ]);

  const dynamicMetaTag: Metadata = {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [
        {
          url: `${post.image}`,
          width: 800,
          height: 600,
          alt: '블로그 대표 이미지',
        },
      ],
      type: 'website',
      siteName: `${post.title}`,
      locale: 'ko-KR',
    },
    keywords: post.title,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    verification: {
      google: 'g3Daim29whdK1ZzL1CE6pvkYyvSgM5-6C898-TVjiz0',
    },
  };
  return dynamicMetaTag;
}

export default function Post({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = getPostBySlug(decodeURIComponent(params.slug), [
    'title',
    'content',
    'excerpt',
    'date',
    'author',
    'image',
  ]);

  const tableOfContent = useMemo(() => {
    return makeTableOfContent({ children: post.content }) || [];
  }, [post.content]);

  return (
    <>
      <BlogLayout>
        <h1>{post.title}</h1>
        <PostExtract extract={post.excerpt} />
        <p
          style={{
            fontWeight: '700',
            fontSize: '16px',
          }}
        >
          {post.date}
        </p>

        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ node, ...props }) => (
              <img
                src={props.src}
                alt={props?.alt || '마크다운 이미지'}
                style={{
                  maxWidth: '100%',
                  objectFit: 'cover',
                  height: 'auto',
                }}
                sizes="(max-width: 560px) 360px, (max-width: 1023px) 700px, (max-width: 1260px) 1024px, (min-width: 1261px) 1260px"
              />
            ),
            code: ({ children }) => <CodeBlock>{children as string}</CodeBlock>,
            h2: ({ children }) => {
              return (
                <h2
                  id={children as string}
                  style={{
                    paddingTop: '10px',
                    fontSize: '1.3rem',
                  }}
                >
                  {children}
                </h2>
              );
            },
            h3: ({ children }) => {
              return (
                <h3
                  id={children as string}
                  style={{
                    fontSize: '1.2rem',
                    paddingTop: '10px',
                  }}
                >
                  {children}
                </h3>
              );
            },
            p: ({ children }) => {
              return (
                <p
                  style={{
                    fontSize: '1rem',
                  }}
                >
                  {children}
                </p>
              );
            },
            li: ({ children }) => {
              return (
                <li
                  style={{
                    fontSize: '1rem',
                  }}
                >
                  {children}
                </li>
              );
            },
            pre: ({ children }) => (
              <code
                style={{
                  fontSize: '1rem',
                }}
              >
                {children}
              </code>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>

        <Comments />
      </BlogLayout>
      <TOC toc={tableOfContent}></TOC>
    </>
  );
}
