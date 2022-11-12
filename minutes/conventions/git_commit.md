# git Commit Convention 상세 안내

- Created at 2022-11-09
- Modified at 2099-99-99

  cf. [커밋 메시지를 여러 줄 입력하는 방법](https://ucong-9796.tistory.com/321)

```
$ git commit -m "<type>: <summary>
<줄바꿈>
<body>
<줄바꿈>
Breaks: <주요 변경 내역 요약>
<줄바꿈>
<줄바꿈>
<이슈 상태> #<이슈번호>
"
```

- 위 커밋 메시지 형식에 들어가는 내용은 다음과 같습니다.

- 커밋 메시지 헤더 (Commit Message Header) : 변화에 대한 간결한 설명을 포함

  ```
   커밋 메시지 헤더
    <type>: <summary>
    │           │
    │           └─⫸ 명령문, 현재 시제로 작성합니다. 마침표로 끝내지 않습니다.
    |                <수정된 페이지(회의록은 "minutes")/기능(또는 함수명, 작업내용 요약)>
    │
    │
    │
    └─⫸ Commit Type: feat|fix|docs|style|refactor|setting|
  <type>과 <summary> 영역은 필수입니다.
  ```

  - `<type>`에 들어갈 수 있는 항목

    |   헤더   | 내용                                                                                       |
    | :------: | ------------------------------------------------------------------------------------------ |
    |   feat   | 새로운 기능 추가                                                                           |
    |   fix    | 버그 수정                                                                                  |
    |   docs   | 주석 추가 및 삭제, README 작성                                                             |
    |  style   | 기능과 무관한 스타일 변경 (Format 수정, 들여쓰기 추가, 세미콜론 추가, 줄바꿈, CSS 변경 등) |
    | refactor | 코드 리팩토링                                                                              |
    | setting  | 개발환경 설정 및 수정, 패키지 설치, 빌드 수행 등                                           |

  - `<summary>` (요약 설명)

    - 명령문, 현재 시제로 작성

    - (영문 작성시) 첫글자는 대문자가 아닌 소문자로 작성

    - 좋은 예) change

    - 나쁜 예) ~~Change~~, ~~changed~~, ~~changes~~

    - 문장의 마지막에 마침표(.) 사용 금지

- 커밋 메시지 본문 (Commit Message Body) : 변화에 대한 간결한 설명을 포함

  - `<body>` (메시지 본문)

    - 명령문, 현재 시제로 작성

    - 해당 커밋의 내용을 알기 쉽게 목록으로 작성

    - 변경 이유와 변경 전과 후의 차이점 설명

- `<footer>` (메시지 하단)

  - 주요 변경 사항들 (Breaking Changes)

    - 모든 주요 변경 내역들은 다음과 같이 하단에 언급

    - 해결된 이슈 (Referencing Issues)

      - 해결된 이슈는 커밋 메시지 하단에 `Closes #<이슈번호>` 와 같이 기록

        ```
        Closes #234
        ```

      - 해결된 이슈가 여러 개인 경우는 다음과 같이 작성

        ```
        Closes #123, #245, #992
        ```

      ```
      Breaks: <주요 변경 내역 요약>
      <BLANK LINE>
      <선택사항: 주요 변경 내역 정리하여 작성>
      <BLANK LINE>
      <BLANK LINE>
      Fixes #<이슈번호>
      ```

* 참고 예시

  - 1번 예시

    ```
    $ git commit -m "feat: plusTime 함수 추가

    추가시간 버튼을 클릭 시 해당 버튼에 기록된 시간만큼 타이머에 시간을 추가하는 함수:
    - 버튼에 이벤트 발생시 각 버튼의 텍스트 숫자값을 ms로 변환하여 addTime 변수에 저장
    - addTime 변수를 argument로 받아 타이머의 잔여 시간에 추가

    Breaks: setTime 함수의 인자로 추가된 addTime을 제거함


    Close #123
    "
    ```

  - 2번 예시

    ```
    $ git commit -m "docs: 11월 07일 회의록

    주요 회의 내용:
    - git 컨벤션 설정
    - 페이지 구현 방안
    - 각 구현 페이지별 주 관리자 역할 분담
    - 전반적인 웹페이지 workflow 구성
    - PR 관련 규칙(생성 시기, PR용 branch 작명, PR 작성)
    - 기본 웹페이지 스타일 구성

    Breaks: README.md Skills 내용 수정 (Scss -> CSS)


    Close #2
    "
    ```

  - 3번 예시

    ```
    $ git commit -m "refactor: banana 전역 변수 제거

    banana 변수를 전역 스코프가 아닌 moreBanana 함수 블록 스코프 지역 변수로 변경:
    - banana 변수를 전역 변수로 할당하여 발생하는 신뢰성 이슈 제거
    - banana 변수가 전역 객체인 windows와 동일한 생명주기를 가져 발생하는 메모리 이슈 제거

    Breaks: $moreBanana 함수 수정

      Before:

      let banana = hitButtonTimes;

      function moreBanana() {
        return banana;
      }


      After:

      function moreBanana(hitButtonTimes) {
        let banana = hitButtonTimes;
        return banana;
      }
    "
    ```
