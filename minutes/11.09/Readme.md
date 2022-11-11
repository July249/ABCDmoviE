# 2022-11-09 회의 내용

## 회의 안건

1. 사용 스킬 설정

2. git 컨벤션 설정

3. 페이지 구현 방안

4. 전반적인 웹페이지 workflow 구성

5. PR 관련 규칙 제정

6. 기본 웹페이지 스타일 구성

7. 코드 변수 작명 스타일

8. 3차 스터디 진행 일정 안내 (11/11 오전 09시)

---

## 사용 스킬 설정

- HTML, CSS, JavaScript

- 추후 확장성 논의
  - Scss로 리팩토링 가능성 있음
  - JavaScript 리팩토링을 통해 모듈화 가능성 있음

## git 컨벤션 설정

- [AngularJS Git Commit Message Conventions를 기반으로 함](./11.09/git_Convention_Details.md)

## 페이지 구현 방안

- 기본 index.html를 root로 설정

  - 여기서 index.html은 캐러셀 페이지로 지정함

- [에릭마이어 reset.css](https://meyerweb.com/eric/tools/css/reset/)를 기본으로 설정하도록 함

  - 모든 html 파일에 link로 reset.css를 설정할 것

  - 전역 스타일 특성으로 가져갈 사항(ex. ir)은 요소선택자로 reset.css에 작성하여 PR할 것

- JavaScript에서의 함수는 하나의 기능만 가지도록 작성할 것

## 각 구현 페이지별 주 관리자 역할 분담

> 대엽님: 로그인 화면, 로그인 후 메인페이지로 이동 기능
>
> 지성님: 메인 페이지(main.html), 영화 상세정보 페이지
>
> 미경님: 캐러셀(index.html) 페이지, 로딩페이지, 빠른예매 - 영화선택페이지
>
> 지형님: 빠른예매 - 상영관 선택페이지, openAPI class 제작

- 캐러셀(ex. 파코테2) & 로딩페이지(2초간보여주기, setTimeout 이용 => 미경님

- 최신영화 여러개 제공 페이지 구현(ex. 파코테1) => 지성님
  ( 유입 루트 : 더보기(like `<a href="main.html">더보기</a>`) 버튼으로 유입됨 )

- 영화 상세정보 페이지(ex. 종찬님 영화페이지 구현)(1개) => 지성님
  ( 유입 루트 : 포스터 클릭으로 됨 )

- 로그인 (로컬스토리지로 사용자 정보 컨트롤 / JSON으로 FakeDB 만들기) => 대엽님

- 로그인 후, 메인페이지(ex. 파코테1)로 이동 => 대엽님

- ※ 주의 빠른 예매 구현에는 사이드바가 포함됩니다! (두명이서 논의 후 진행)
- 빠른 예매 - 상영관 선택(select요소 & option요소 이용해서 제작) => 지형님
- 빠른 예매 - 영화 선택 구현(ex. 밴딩머신 메뉴버튼) => 미경님

- api 자스 파일 작성 (export defaut class 사용) => 지형님

- 추가 진행 여지가 있는 구현 페이지

      + 회원가입(+a 회원가입시 개인정보동의) => userdb.json CRUD!!

      + 회원 개인정보 수정 페이지(설정)

## PR 관련 규칙 제정

- PR 브랜치 명은 본인의 수정사항이 간결하고 명확하게 나타날 수 있도록 작성

  - 브랜치 생성 예시 (`페이지/기능(또는 함수명)`)

    - 예시1 (회의록 작성의 경우)

      ```
      $ git checkout -b minutes/22.11.11
      ```

    - 예시2 (스타일시트 작성의 경우)

      ```
      $ git checkout -b main-page.css/main페이지
      ```

    - 예시3 (기능 추가/수정/삭제 작업의 경우)
      ```
      $ git checkout -b main.js/buttonEvent
      ```

- HTML, CSS는 모두 제작한 다음에 PR 진행

- JavaScript는 함수 하나에 대해서 기능 구현 완료시 PR 진행

- PR용 브랜치는 PR Merge후 삭제할 것

  ```
  $ git branch -D branch_name
  $ git push origin :branch_name (혹은 git push origin --delete branch_name)
  ```

## 기본 웹페이지 스타일 구성

- 기본 폰트 `pretendard`로 지정

  ```
  <link rel="stylesheet"
      as="style"
      crossorigin
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
    />
  ```

- 공통 레이아웃 작성자의 스타일을 규범으로 진행

- 캐러셀 부분(index.html)은 독립적인 스타일을 가지기 때문에 별도로 진행하여도 무관함

## 코드 변수 작명 스타일

- 추후 지정 => 우선 본인의 스타일로 작성

  - 카멜케이스 (ex. `firstName`)

  - 스네이크 케이스 (ex. `first_name`)

  - 파스칼 케이스 (ex. `FirstName`)

  - 헝가리언케이스 (ex. `strFirstName`, `$elem`, `observable$`)

## 3차 스터디 진행 일정 안내

- (11/11 오전 09시)
