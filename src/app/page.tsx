import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>📄 홈 페이지</div>
      <Link href="/posts">글 목록으로 이동</Link>
    </div>
  );
}
