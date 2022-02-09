import usePosts from "../../core/hooks/usePosts";
import {
  Card,
  Error,
  Spinner,
} from "../../core/components";

function Posts() {
  const { posts, isError, isLoading } = usePosts();

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <div className="p-4 flex flex-row flex-wrap gap-2 justify-center">
      {posts.map((post) => <Card title={post.title} body={post.body}/>)}
    </div>
  )
}

export default Posts;
