export default async function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  return (
    <div>
      <div>📄 글 상세 페이지 (ID: {postId})</div>
    </div>
  );
}
