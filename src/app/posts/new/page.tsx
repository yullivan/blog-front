import BackwardButton from "@/components/backward-button";
import { createPost } from "@/data";
import { redirect } from "next/navigation";

export default function NewPost() {
  async function action(formData: FormData) {
    "use server";

    const rawFormData = {
      title: formData.get("title") as string, // 검증하게 되면 as string은 제거
      description: formData.get("description") as string,
      content: formData.get("content") as string, // 검증하게 되면 as string은 제거
    };
    /* rawFormData는 아래와 같은 JavaScript 오브젝트가 됨
      {
        title: '사용자가 입력한 제목',
        content: '사용자가 입력한 내용'
      }
    */

    // TODO: zod 활용하여 rawFormData 검증

    // TODO: API 서버로 요청을 보내어 새 글 저장
    const postId = await createPost(rawFormData);

    redirect(`/posts/${postId}`);
  }

  return (
    <div>
      <div>📄 새 글 작성 페이지</div>
      <form action={action}>
        <input type="text" placeholder="제목을 작성하세요" name="title" />
        <textarea placeholder="내용을 작성하세요" name="content"></textarea>
        <textarea
          name="description"
          placeholder="글을 짧게 소개해 보세요"
        ></textarea>
        <div>
          <button type="submit">작성하기</button>
          <BackwardButton />
        </div>
      </form>
    </div>
  );
}
