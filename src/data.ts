interface PostResponse {
  id: number;
  title: string;
  description: string;
  commentCount: number;
  likeCount: number;
  createdAt: string;
}

export async function getPosts() {
  // TODO: fetch()를 활용하여 백엔드 API 호출
  const dummyPosts: PostResponse[] = [
    {
      id: 1,
      title: "2024 개발자 로드맵 공유",
      description:
        "프론트엔드 개발자가 되기 위한 학습 경로를 정리해보았습니다. React, TypeScript, 그리고 최신 웹 개발 트렌드까지 다룹니다.",
      commentCount: 23,
      likeCount: 156,
      createdAt: "2025-03-17T15:30:00Z",
    },
    {
      id: 2,
      title: "리액트 성능 최적화 팁",
      description:
        "리액트 애플리케이션의 성능을 향상시키기 위한 실용적인 팁들을 공유합니다. useMemo, useCallback의 올바른 사용법과 렌더링 최적화 방법을 알아봅시다.",
      commentCount: 45,
      likeCount: 234,
      createdAt: "2025-03-16T09:20:00Z",
    },
    {
      id: 3,
      title: "TypeScript 타입 시스템 완벽 가이드",
      description:
        "타입스크립트의 고급 기능들을 자세히 살펴봅니다. 제네릭, 유틸리티 타입, 그리고 타입 추론에 대해 심도있게 다룹니다.",
      commentCount: 67,
      likeCount: 342,
      createdAt: "2025-03-15T18:45:00Z",
    },
    {
      id: 4,
      title: "Next.js 13 새로운 기능 소개",
      description:
        "Next.js 13의 주요 변경사항과 새로운 기능들을 상세히 설명합니다. App Router, Server Components, 그리고 개선된 개발자 경험에 대해 알아보세요.",
      commentCount: 89,
      likeCount: 421,
      createdAt: "2025-03-14T11:15:00Z",
    },
    {
      id: 5,
      title: "웹 접근성 향상을 위한 실천 방법",
      description:
        "모두가 사용할 수 있는 웹사이트를 만들기 위한 접근성 가이드라인과 실제 구현 방법을 공유합니다. ARIA 속성의 올바른 사용법도 포함되어 있습니다.",
      commentCount: 34,
      likeCount: 178,
      createdAt: "2025-03-13T14:25:00Z",
    },
  ];
  return dummyPosts;
}
