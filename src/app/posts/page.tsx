import { getPosts } from "@/data";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div>
      <div>📄 글 목록 페이지</div>
      <Link href="/">홈 페이지로 이동</Link>
    </div>
  );
}
