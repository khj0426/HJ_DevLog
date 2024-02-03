import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '@/utils/axiosClient';

type Post = {
  title: string;
  date: string;
  slug: string;
  category: string;
  excerpt: string;
  image: string;
};

type PostsResponse = {
  posts: Post[];
  page: number;
};

const getPosts = async ({ pageParams }: { pageParams: number }) => {
  const start = pageParams * 6;
  const end = start + 6;
  return (await get<PostsResponse>(`/api/posts?start=${start}&end=${end}`))
    .data;
};

export default function usePostQuery() {
  return useInfiniteQuery({
    queryKey: ['getPosts'],
    queryFn: ({ pageParam = 1 }) => getPosts({ pageParams: pageParam }),
    getNextPageParam: (lastPage) => {
      const nextPage = Math.floor(lastPage.page);
      if (lastPage.posts.length === 0) {
        return null;
      }
      return nextPage + 1;
    },
  });
}
