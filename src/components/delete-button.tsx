"use client";

import { useRouter } from "next/navigation";

export function DeleteButton({ postId }: { postId: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        // TODO: API 서버로 삭제 요청 보내기
        console.log("삭제 요청: " + postId);
        router.push("/posts");
      }}
    >
      삭제(클라이언트)
    </button>
  );
}
