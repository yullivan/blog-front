"use client";

import { useRouter } from "next/navigation";

export default function BackwardButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()}>
      🔙나가기
    </button>
  );
}
