export default async function EditPost({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  return (
    <div>
      <div>📄 글 수정 페이지 (ID: {postId})</div>
    </div>
  );
}
