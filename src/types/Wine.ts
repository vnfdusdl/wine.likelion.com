//Wine의 자료형은 이래야 한다!하고 정해놓는 것이다.
// api 보면서 interface를 미리 설정해둔다.
export interface Wine {
    winery: string,
    wine: string,
    rating: {
      average: string,
      reviews: string
    },
    location: string,
    image: string,
    id: number
  }