/************
    alter 속성 추가 기본 형식
    alter table 테이블이름 add 속성이름 자료형;
    alter 속성 변경 기본 형식
    alter table 테이블이름 modify 속성이름 바꾸고자하는타입;;
    alter 속성 삭제 기본 형식
    alter table 테이블이름 drop column 속성이름; 
*************/
drop table newbook;
drop table newcustomer;
drop table neworder;

create table newbook
    bookid number,
    bookname varchar2(20),
    publisher varchar2(20),
    price number
);

select * from newbook;
alter table newbook add isbn varchar2(13); --1번 문제 isbn 추가하는거임
alter table newbook modify isbn number; --2번 문제 isbn 타입을 넘버로 
alter table newbook drop column isbn; --3번물제 isbn 삭제
alter table newbook modify bookid number not null; --4번문제 bookid에 not null제약 조건 추가
alter table newbook add primary key(bookid); --5번 문제 bookid 프라이마리 키

/*************************
    insert 무 기본 형식
    insert into 테이블 이름(속성명1,속성명2,3,4,... 전체 속성명이 다 필요하면 생략가능);
    values (값들 적기 위에 적은 속성 순서랑 같아야함);
    
*************************/
select * from book;
select * from imported_book;
insert into book  values(11,'스포츠 의학','한솥의학서적',90000); --1번문제 
insert into book (bookid,bookname,publisher) values(12,'스포츠 의학','한솥의학서적'); -- 2번문제 가격이 미정,테이블이랑 순서 같지 않아도 댐 ㅇㅇ
insert into book select bookid, bookname, publisher, price from imported_book; --3번물제 셀렉으로 insert into 하는 방법/ 자료형이 모두 일치 해야함

/**********************
    update 문 기본형식 
    이미 삽입 되어 있는 데이타 값 변경 할 때 사용 
    update 테이블이름 
    set 속성이름='속성값' 
    where 조건
**********************/
select * from customer;
update customer
set address = '대한민국 부산'
where custid = 5; --1번문제 커스터머아이디가 5인 사람 주소 바꾸기

update customer
    set address = (select address from customer where name = '김연아')
where name like '박세리'; --2번문제 

/********************
    DELETE 문 기본형식
    delete from 테이블 이름 where 조건절
    
    업뎃 딜리트 인설트 
    수행후 최종 반영 x 커밋 하면 반영 O
    커밋전 rollback 데이터 되돌리기 가능 but after commit 안됨
*******************/

delete from customer where custid = 5; --문1 박세리 지우기
delete from customer; --문2 고객 다지우기

commit; --적용

rollback;

    
