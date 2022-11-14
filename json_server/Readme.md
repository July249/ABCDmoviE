# db 폴더 내부 json 파일 안내

## KMDB OpenAPI을 사용하는 경우

- KMDB OpenAPI는 다음의 경우에 사용합니다.

  1. 영화 줄거리, 출연배우, 감독 등의 해당 영화에 대한 상세 정보를 가져오는 경우
  2. 영화에 대한 대략적인 정보와 posters, stills 등의 이미지, 예고편 url을 가져오는 경우

### 1. search_data_kmdb.json

- "에브리 씽" 검색 결과 출력된 데이터

- [사용된 url](https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&title=%EC%97%90%EB%B8%8C%EB%A6%AC%EC%94%BD&sort=prodYear,1&ServiceKey=13D40X7L3486E0FLUY0R)

  - title 요청인자를 이용하여 데이터를 검색함 ("에브리씽"으로 검색함)
  - sort 요청인자를 이용하여 prodYear(제작연도)를 내림차순으로 열거함

### 2. one_data_kmdb.json

- "에브리 씽 에브리웨어 올 앳 원스" 하나만 검색하여 출력된 데이터

- [사용된 url](https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&movieSeq=56635&title=%EC%97%90%EB%B8%8C%EB%A6%AC%EC%94%BD&sort=prodYear,1&ServiceKey=13D40X7L3486E0FLUY0R)

  - movieSeq 요청인자를 이용하여 데이터 정보를 특정하였음

## KBIOS OpenAPI를 사용하는 경우

### 1. 일별 박스오피스

- [사용된 url](http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20221113)

  - targetDt 요청인자를 이용하여 2022년 11월 13일 기준 박스오피스 정보를 가져옴

### 2. weekly_boxoffice_data_kobis (주간/주말 박스오피스)

- [사용된 url](https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20221104&weekGb=0)

  - targetDt 요청인자를 이용하여 2022년 11월 04일이 속한 주간(월~일) 박스오피스 정보를 가져옴
