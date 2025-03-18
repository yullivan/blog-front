import { DeleteButton } from "@/components/delete-button";
import { deletePost, getPost } from "@/data";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await getPost(+postId);

  async function action(formData: FormData) {
    "use server";

    const postId = formData.get("postId") as string;

    // TODO: API 서버로 삭제 요청 보내기
    console.log("글 삭제");
    await deletePost(+postId);

    redirect("/posts");
  }

  return (
    <div>
      <div>📄 글 상세 페이지 (ID: {postId})</div>
      <div>{post.title}</div>
      <div>
        <Link href={`/posts/${postId}/edit`}>수정</Link>
        <form action={action}>
          <input hidden={true} name="postId" defaultValue={postId}></input>
          <button>삭제</button>
        </form>
      </div>
      <div>
        <div>{post.createdAt}</div>
        <div>❤️{post.likeCount}</div>
      </div>
      <div>{post.content}</div>
    </div>
  );
}
