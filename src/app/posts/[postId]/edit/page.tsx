import BackwardButton from "@/components/backward-button";

export default async function EditPost({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  return (
    <div>
      <div>📄 글 수정 페이지 (ID: {postId})</div>
      <form>
        <input type="text" name="title" defaultValue={"기존 글 제목"} />
        <textarea name="content" defaultValue={"기존 글 내용"}></textarea>
        <div>
          <BackwardButton />
          <button type="submit">수정하기</button>
        </div>
      </form>
    </div>
  );
}
