export default function NewPost() {
  return (
    <div>
      <div>📄 새 글 작성 페이지</div>
      <form>
        <input type="text" placeholder="제목을 작성하세요" />
        <textarea placeholder="내용을 작성하세요"></textarea>
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}
