type PostParams = {
    params: {
      postId: number;
    };
    searchParams: {
      searchQuery: string;
    };
  };

type AllPosts = Post[];

type Post = {
   userId: number,
   id: number,
   title: string,
   body: string      
}