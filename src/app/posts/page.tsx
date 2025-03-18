import { getPosts } from "@/data";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div>
      <div>📄 글 목록 페이지</div>
      <Link href="/">홈 페이지로 이동</Link>
      {/* 새 글 작성 버튼을 위해 <button> 태그를 사용하면
          클릭 이벤트 리스너를 사용해야 하고
          그럼 브라우저에서만 동작 가능하기 때문에
          클라이언트 컴포넌트여야 함 */}
      <Link href="/posts/new">새 글 작성</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div>{post.title}</div>
              <div>{post.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
