import BackwardButton from "@/components/backward-button";
import { redirect } from "next/navigation";

export default async function EditPost({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  async function editPost(formData: FormData) {
    "use server";

    const postId = formData.get("postId");
    const rawFormData = {
      title: formData.get("title"),
      content: formData.get("content"),
    };

    // TODO: API 서버로 수정 요청 보내기
    console.log("글 수정: " + postId);

    redirect(`/posts/${postId}`);
  }

  return (
    <div>
      <div>📄 글 수정 페이지 (ID: {postId})</div>
      <form action={editPost}>
        <input hidden={true} name="postId" defaultValue={postId} />
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
