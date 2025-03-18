import { DeleteButton } from "@/components/delete-button";
import { getPost } from "@/data";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await getPost(+postId);

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
      <div>{post.title}</div>
      <div>
        <Link href={`/posts/${postId}/edit`}>수정</Link>
        <form action={deletePost}>
          <input hidden={true} name="postId" defaultValue={postId}></input>
          <button>삭제</button>
        </form>
        <DeleteButton postId={postId} />
      </div>
      <div>
        <div>{post.createdAt}</div>
        <div>❤️{post.likeCount}</div>
      </div>
      <div>{post.content}</div>
    </div>
  );
}
