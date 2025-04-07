import axios from "axios";

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].body);
});

interface Post {
  id: number;
  title: string;
}
