import { DeleteButton } from "@/components/delete-button";
import { redirect } from "next/navigation";

export default async function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  async function deletePost(formData: FormData) {
    "use server";

    const postId = formData.get("postId");

    // TODO: API 서버로 삭제 요청 보내기
    console.log("글 삭제");

    redirect("/posts");
  }

  return (
    <div>
      <div>📄 글 상세 페이지 (ID: {postId})</div>
      <form action={deletePost}>
        <input hidden={true} name="postId" defaultValue={postId}></input>
        <button>삭제</button>
      </form>
      <DeleteButton postId={postId} />
    </div>
  );
}
