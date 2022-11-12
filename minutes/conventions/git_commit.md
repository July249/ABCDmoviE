# git Commit Convention 상세 안내

- Created at 2022-11-09
- Modified at 2099-99-99

  cf. [커밋 메시지를 여러 줄 입력하는 방법](https://ucong-9796.tistory.com/321)

  ```
  <type>(<scope>): <short summary>
  <BLANK LINE>
  <body>
  <BLANK LINE>
  <footer>
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
      BREAKING CHANGE: <주요 변경 내역 요약>
      <BLANK LINE>
      <주요 변경 내역 정리하여 작성>
      <BLANK LINE>
      <BLANK LINE>
      Fixes #<이슈번호>
      ```

      ```
      BREAKING CHANGE: isolate scope bindings definition has changed and
        the inject option for the directive controller injection was removed.

        To migrate the code follow the example below:

        Before:

        scope: {
          myAttr: 'attribute',
          myBind: 'bind',
          myExpression: 'expression',
          myEval: 'evaluate',
          myAccessor: 'accessor'
        }

        After:

        scope: {
          myAttr: '@',
          myBind: '@',
          myExpression: '&',
          // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
          myAccessor: '=' // in directive's template change myAccessor() to myAccessor
        }

        The removed `inject` wasn't generaly useful for directives so there should be no code using it.
      ```
