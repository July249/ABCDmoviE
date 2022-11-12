# 가나다라영화사 (ABCDmoviE)

- 멋쟁이사자처럼 프론트엔드 스쿨 3기 아쉬워 벌써12시조 토이프로젝트

## 프로젝트 소개

- 영화 OpenAPI([KMDb](https://www.kmdb.or.kr/main), [Kobis](https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do))를 이용하여 최신 영화 정보 및 관심있는 영화의 상영 정보를 쉽게 파악하는 웹 어플리케이션

---

## 프로젝트에 사용된 기술 및 정보

### 🧑‍💻 프로젝트에 사용된 기술

- HTML
- CSS
- JavaScript

### 🧑‍💻 프로젝트에 사용된 API 정보

- [KMDb OpenAPI](https://www.kmdb.or.kr/info/api/apiDetail/6)
- [Kobis OpenAPI](https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do?serviceId=searchDailyBoxOffice)

### 🔨 프로젝트에 사용된 컨벤션

#### 📝 git commit Convention<sup>[1](#footnote_1)</sup> <sup>[2](#footnote_2)</sup>

- 세부적인 작성 안내는 [여기](./minutes/conventions/git_commit.md)를 눌러주세요.

- git commit message 타입 정리

  |   헤더   | 내용                                                                                       |
  | :------: | ------------------------------------------------------------------------------------------ |
  |   feat   | 새로운 기능 추가                                                                           |
  |   fix    | 버그 수정                                                                                  |
  |   docs   | 주석 추가 및 삭제, README 작성                                                             |
  |  style   | 기능과 무관한 스타일 변경 (Format 수정, 들여쓰기 추가, 세미콜론 추가, 줄바꿈, CSS 변경 등) |
  | refactor | 코드 리팩토링                                                                              |
  | setting  | 개발환경 설정 및 수정, 패키지 설치, 빌드 수행 등                                           |

  ```
  $ git commit -m "<type>: <summary>
  <줄바꿈>
  <body>
  <줄바꿈>
  Breaks: <주요 변경 내역 요약>  <---- 선택사항
  <줄바꿈>
  <줄바꿈>
  <이슈 상태> #<이슈번호>	    <---- 선택사항
  "
  ```

#### 📝 git Pull Request 작성 포맷

```
# (커밋 메시지 헤더와 동일하게 작성)

## [⚠️ 삭제된 파일 ]

- 삭제된 파일의 경로를 적어주세요
- ex. src/js/test.js

## [✂️ 수정된 파일]

- 수정된 파일의 경로를 적어주세요
- ex. src/js/test.js

## [📝 생성된 파일]

- 생성된 파일의 경로를 적어주세요
- ex. src/js/test.js

## [📌 제안 사항]

- 모두에게 제안하고 싶은 내용을 작성하여 주세요.
- 해당 안건은 회의시간 안건으로 사용됩니다.

## [📢 Notice]

- 이번 PR에서 모두에게 알리고 싶은 핵심 사항을 작성하여 주세요.
- 해당 섹션은 알림판의 역할을 합니다.
```

<a name="footnote_1">1</a>: [AngularJS git Commit Message Conventions 참조](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)ㄴ

<a name="footnote_2">2</a>: [AngularJS git Commit Message Conventions 번역글](https://velog.io/@outstandingboy/Git-%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%8B%9C%EC%A7%80-%EA%B7%9C%EC%95%BD-%EC%A0%95%EB%A6%AC-the-AngularJS-commit-conventions)
