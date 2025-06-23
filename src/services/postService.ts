import axios from 'axios';
import type { Post } from '@/types/Post';

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>('http://localhost:3000/post');
  return response.data;
};