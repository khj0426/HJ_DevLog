import { useState, useEffect } from 'react';
import { get } from '@/utils/axiosClient';
import { AxiosResponse } from 'axios';

type Item = {
  [key: string]: string;
};

export default function usePostQuery([start, end]: [string, string]) {
  const [posts, setPosts] = useState<Item[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const allPostsRes = await get<Item[]>(
          `/api/posts?start=${start}&end=${end}`
        );
        setPosts(allPostsRes.data);
      } catch (e) {}
    };
    getPosts();
  }, [start, end]);

  return {
    posts,
  };
}
