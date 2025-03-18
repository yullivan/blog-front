import BackwardButton from "@/components/backward-button";
import { editPost, getPost } from "@/data";
import { redirect } from "next/navigation";

export default async function EditPost({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await getPost(+postId);

  async function action(formData: FormData) {
    "use server";

    const postId = formData.get("postId") as string;
    const rawFormData = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      description: formData.get("description") as string,
    };

    // TODO: API 서버로 수정 요청 보내기
    console.log("글 수정: " + postId);
    editPost(+postId, rawFormData);

    redirect(`/posts/${postId}`);
  }

  return (
    <div>
      <div>📄 글 수정 페이지 (ID: {postId})</div>
      <form action={action}>
        <input hidden={true} name="postId" defaultValue={postId} />
        <input type="text" name="title" defaultValue={post.title} />
        <textarea name="content" defaultValue={post.content}></textarea>
        <textarea name="description" defaultValue={post.description}></textarea>
        <div>
          <BackwardButton />
          <button type="submit">수정하기</button>
        </div>
      </form>
    </div>
  );
}
