import type { Item } from '@/@types/postItem';

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
export const getSearchQueryPostList = async (searchQuery: string) => {
  return (await get<Item[]>(`/api/slugs/${searchQuery}`)).data;
};

export const getPosts = async ({ pageParams }: { pageParams: number }) => {
  const start = pageParams * 3;
  const end = start + 3;
  return (await get<PostsResponse>(`/api/posts?start=${start}&end=${end}`))
    .data;
};
