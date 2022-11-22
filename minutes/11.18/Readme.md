# 2022/11/18 회의내용

## 회의 안건

1. 프로젝트 방향논의
2. api 활용
3. commit & branch 시점
4. style 폴더구조
5. 트러블슈팅 작성

## :one: 프로젝트 방향논의
  - 웹 페이지의 콘텐츠의 일관성을 지키고자 웹페이지의 목적성에 대해 논의하였음
  - 학습한 기술을 구현하는데 집중 하고자 하며, 최신영화정보를 제공할 수 있는 웹을 구현하고자 함
  - 캐러셀 페이지: 캐러셀에 들어가는 영화는 최근 개봉일자를 기준으로 최신영화가 나타내도록 함
  - 메인 페이지: 캐러셀 페이지에서 노출되지 않은 최신영화 목록을 나타낼 수 있도록 구현
  - footer 크기 조절, 전체 페이지 컬러톤 은 전체 페이지 레이아웃 완료 후 논의 하기로 함

## :two: api 활용방안
  - 네이버 영화, KMDB, KOBIS 총 3가지 api 가 있으며, 각 api 마다 필요한 데이터가 따로 존재하고 있음. 작업자들이 필요한 데이터가 있는 api를 사용할 수 있도록 함
    * api 정보는 <json_server> 폴더를 통해 확인
  - 네이버 영화 api 활용은 보류(11월 20일 까지)
  
## :three: commit & branch 시점
  - 1. 1개 branch에 1개 기능구현
  - 2. 해당 기능(또는 페이지) 구현까지 다수의 commit 가능
  - 3. 1개 기능(또는 페이지) 구현 완료시 다수의 commit이 작성된 branch를 main branch에 PR 전송
  - 4. merge 후 해당 branch 삭제
  - * refactoring 진행시 -> 위의 과정 반복

  * 예시
    상황: index.html 마크업 & 스타일 작성
    - index.html 구현 branch 생성
    - commit 작성
      style: index페이지html 마크업,css 전체 레이아웃 정렬
      style: index페이지 html header 클래스 추가, css header 스타일링
      style: index페이지 html section 내 클래스 추가, css sectionn 전체 정렬
      style: index페이지 css item-list 캐러셀 정렬 및 스타일링
      style: index페이지 css header 여백 및 세부 간격 조정
      style: index페이지 css section item-list 캐러셀, button 사이즈 조정 및 세부 간격 조정
  
      해당 페이지 구현까지 commit 6개 생성 후 push, main branch PR

## :four: style 폴더 구조
  - 현재 프로젝트는 소규모로 페이지단위로 css파일 생성하여 제작하고자 함
  - /components 폴더에는 작은 단위의 공통 스타일(ex. button, border 등)요소를 담아 관리
  - /layout 폴더를 생성하여 큰 단위의 공통 스타일(ex. header, footer, layOut style 등)요소를 담아 관리

## :five: 트러블 슈팅 기록 논의
  - 문제 or 에러 이슈 발생시 기록하고자 함.