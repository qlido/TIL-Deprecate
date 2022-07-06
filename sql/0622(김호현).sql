SELECT
    /**** 인자는 a b c d 순임******/
    ABS(-15) abs, --절댓값
    CEIL(-15.7) ceil, --올림
    POWER(3,2) power, --a의 b승
    ROUND(15.7) round, --반올림
    CONCAT('HAPPY','Birthday') concat,--문자열 붙이기
    LPAD('Page 1',15,'*.') lpad,--b번쨰 자리까지 출력 빈곳은 C로채움
    LTRIM('Page 1','ag') Ltrim, --왼쪽부터 B중 하나로 비교해서 같으면 삭제 다르면 바로스탑
    RPAD('Page 1',15,'*.') rpad, --b번쨰 자리까지 출력 빈곳을 오른쪽 부터 c로 채움
    RTRIM('Page 1','ag') rtrim, --오른쪾부터 b중 하나로 비교해서 같으면 삭제 다르면 바로 스탑
    substr('ABCDEFG',3,4) substr, -- a의 b번쨰 이후 c자리 출력
    ascii('a') ascii, --a의 아스키 코드값 출력
    instr('CORPORATE FLOOR','OR',3,2) instr, --a의 c번째 자리부터 b를 찾아 d번쨰 나오는 것의 자리
    sysdate, --시스템 시간
    Nullif(123,345) nullif, -- 같으면 NULL
    nvl(null,123) nvl-- 널이면 B출력 아님 그대로
from dual;

/****
  뷰테이블
  읽기전용인 가상의 테이블
  수정 x  기존테이블 한글이라면 얘는 pdf
  내가 보여주고 싶은 정보만 추출해 고유가능 -> 보안성 good

  create view 뷰이름(개가 보여주고 싶은 영ㄹ이름)
  as select 문
 ****/

 --문제 1
create view socs
as select *
from book
where bookname like '%축구%';

select * from socs;

--문제2
create view q2
    as select *
from CUSTOMER
where ADDRESS like '%대한민국%';

select *
from q2;

--문제3
select * from CUSTOMER;
insert into CUSTOMER values (6,'이이경','대한미국부산',null);

create view q3
    as select custid,concat(concat(substr(name,1,1),'*'),substr(name,3,4)) name,address,phone
    from CUSTOMER;

select * from q3;

drop view q3
