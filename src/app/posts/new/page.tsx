import BackwardButton from "@/components/backward-button";

export default function NewPost() {
  async function createPost(formData: FormData) {
    "use server";

    const rawFormData = {
      title: formData.get("title"),
      content: formData.get("content"),
    };
    /* rawFormData는 아래와 같은 JavaScript 오브젝트가 됨
      {
        title: '사용자가 입력한 제목',
        content: '사용자가 입력한 내용'
      }
    */

    // TODO: API 서버로 요청을 보내어 새 글 저장
  }

  return (
    <div>
      <div>📄 새 글 작성 페이지</div>
      <form action={createPost}>
        <input type="text" placeholder="제목을 작성하세요" name="title" />
        <textarea placeholder="내용을 작성하세요" name="content"></textarea>
        <div>
          <button type="submit">작성하기</button>
          <BackwardButton />
        </div>
      </form>
    </div>
  );
}
