import { notFound } from "next/navigation";

interface PostResponse {
  id: number;
  title: string;
  description: string;
  commentCount: number;
  likeCount: number;
  createdAt: string;
}

interface PostDetailResponse {
  id: number;
  title: string;
  description: string;
  content: string;
  commentCount: number;
  likeCount: number;
  createdAt: string;
}

let dummyPosts: PostDetailResponse[] = [
  {
    id: 1,
    title: "제주도 여행 후기: 봄날의 올레길을 걷다",
    description:
      "제주 올레길 17코스를 따라 걸으며 만난 아름다운 풍경과 맛집 이야기",
    content:
      "지난 주말, 제주도의 봄기운을 느끼기 위해 올레길 17코스를 찾았습니다. 성산일출봉이 보이는 해안길을 따라 걸으며 만난 다양한 풍경들이 인상적이었습니다. 특히 중간에 들른 해녀의 집에서 먹은 성게미역국은 잊을 수 없는 맛이었죠. 그날의 일정과 추천 코스를 상세히 정리해보았습니다...",
    commentCount: 15,
    likeCount: 42,
    createdAt: "2025-03-17T08:30:00Z",
  },
  {
    id: 2,
    title: "ChatGPT로 시작하는 개발 생산성 향상기",
    description: "AI 도구를 활용한 코딩 효율성 극대화 방법 공유",
    content:
      "최근 ChatGPT를 개발 보조 도구로 활용하면서 느낀 점들을 공유합니다. 특히 반복적인 보일러플레이트 코드 작성이나 간단한 알고리즘 구현에서 많은 도움을 받았는데요. 실제 프로젝트에서 적용한 사례와 함께 주의해야 할 점들도 정리해보았습니다...",
    commentCount: 28,
    likeCount: 156,
    createdAt: "2025-03-15T14:20:00Z",
  },
  {
    id: 3,
    title: "우리 동네 숨은 맛집: 을지로 골목식당 탐방기",
    description: "을지로 3가 인쇄소 골목 사이에서 발견한 진짜 맛집들",
    content:
      "평일 점심시간, 을지로 인쇄소 골목을 걷다가 발견한 숨은 맛집들을 소개합니다. 30년 된 국수집부터 젊은 셰프가 운영하는 모던한 한식당까지, 골목 구석구석에서 발견한 진정한 맛의 정수를 담아보았습니다. 특히 추천하고 싶은 곳은 골목 안쪽의 작은 김치찌개 전문점인데요...",
    commentCount: 33,
    likeCount: 89,
    createdAt: "2025-03-16T11:45:00Z",
  },
];

export async function getPosts(): Promise<PostResponse[]> {
  // TODO: fetch()를 활용하여 백엔드 API 호출
  return dummyPosts.map((post) => {
    const { content, ...postResponse } = post;
    return postResponse;
  });
}

export async function getPost(id: number) {
  // TODO: fetch()를 활용하여 백엔드 API 호출
  const post = dummyPosts.find((post) => post.id === id);

  if (!post) {
    notFound();
  }

  return post;
}

export async function deletePost(id: number) {
  // TODO: fetch()를 활용하여 백엔드 API 호출
  dummyPosts = dummyPosts.filter((post) => post.id !== id);
}
