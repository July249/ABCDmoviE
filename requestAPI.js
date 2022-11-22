import request from 'request';
import fs from 'fs';

export default async function createDB(queryObj, id, key) {
  try {
    await request.get(
      {
        url: 'https://openapi.naver.com/v1/search/movie',
        qs: queryObj, // 요청인자가 담긴 Object
        headers: {
          'X-Naver-Client-Id': id, // NAVER_CLIENT_ID
          'X-Naver-Client-Secret': key, // NAVER_CLIENT_SECRET
        },
      },
      function (err, res, body) {
        if (!err && res.statusCode === 200) {
          try {
            if (!fs.existsSync('../../db/naverDB.json')) {
              fs.writeFileSync('../../db/naverDB.json', body);
            } else {
              fs.unlink('../../db/naverDB.json', () => {
                console.log('naverDB.json 파일이 업데이트 되었습니다.');
                fs.writeFileSync('../../db/naverDB.json', body);
              });
            }
            console.log('Successfully, create Naver DB file');
          } catch (err) {
            console.error(err);
          }
        } else {
          console.error(err);
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
}

/* 
요청인자

파라미터    타입            필수여부    설명
query       String(필수)      Y        검색어. UTF-8로 인코딩되어야함
display     Integer           N        한 번에 표시할 검색 결과 개수 (기본값: 10, 최댓값: 100)
start       Integer           N        검색 시작 위치 (기본값: 1, 최대값: 1000)
genre       String            N        1: 드라마, 2: 판타지, 3: 서부, 4: 공포, 5: 로맨스, 6: 모험, 7: 스릴러, 8: 느와르, 9: 컬트, 10: 다큐멘터리, 11: 코미디, 12: 가족, 13: 미스터리, 14: 전쟁, 15: 애니메이션, 16: 범죄, 17: 뮤지컬, 18: SF, 19: 액션, 20: 무협, 21: 에로, 22: 서스펜스, 23: 서사, 24: 블랙코미디, 25: 실험, 26: 영화카툰, 27: 영화음악, 28: 영화패러디포스터
country     String            N        국가코드(대문자만 사용가능) FR: 프랑스, GB: 영국, HK: 홍콩, JP: 일본, KR: 한국, US: 미국, ETC: 기타
yearfrom    Integer           N        제작 연도 검색 시작 연도 (yyyy 형식) (Note: yearto 인자와 함께 사용되어야 함)
yearto      Integer           N        제작 연도 검색 종료 연도 (yyyy 형식) (Note: yearfrom 인자와 함께 사용되어야 함)
*/

/* 
응답

요소      	                타입          설명
rss	                        -	            RSS 컨테이너. RSS 리더기를 사용해 검색 결과를 확인할 수 있습니다.
rss/channel	                -	            검색 결과를 포함하는 컨테이너. channel 요소의 하위 요소인 title, link, description은 RSS에서 사용하는 정보이며, 검색 결과와는 상관이 없습니다.
rss/channel/lastBuildDate	  dateTime      검색 결과를 생성한 시간
rss/channel/total	          Integer	      총 검색 결과 개수
rss/channel/start	          Integer	      검색 시작 위치
rss/channel/display	        Integer	      한 번에 표시할 검색 결과 개수
rss/channel/item	          -	            개별 검색 결과. JSON 형식의 결괏값에서는 items 속성의 JSON 배열로 개별 검색 결과를 반환합니다.
rss/channel/item/title	    String	      영화 제목. 제목에서 검색어와 일치하는 부분은 <b> 태그로 감싸져 있습니다.
rss/channel/item/link	      String	      네이버 영화 정보 URL
rss/channel/item/image	    String	      섬네일 이미지의 URL
rss/channel/item/subtitle	  String	      영어 제목 또는 원제
rss/channel/item/pubDate	  Date        	제작 연도(yyyy 형식)
rss/channel/item/director	  String	      감독
rss/channel/item/actor	    String	      출연 배우
rss/channel/item/userRating	Integer	      평점

*/
