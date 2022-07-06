CREATE USER c##1407 IDENTIFIED BY madang DEFAULT TABLESPACE users TEMPORARY TABLESPACE temp PROFILE DEFAULT;
GRANT CONNECT, RESOURCE TO c##1407;
GRANT CREATE VIEW, CREATE SYNONYM TO c##1407;
ALTER USER c##1407 DEFAULT TABLESPACE USERS QUOTA UNLIMITED ON USERS;



create table depart (
    depnum number primary key,
    NAME  varchar2(30)
);
create table gen(
    gennum number primary key,
    gender varchar2(30)

);
create table stud(
    grade number,
    class number,
    stuid number,
    name varchar(30),
    gennum number,
    depnum number,
    foreign key (gennum) references gen (gennum),
    foreign key (depnum) references depart (depnum),
    foreign key (grade,class) references stdnum (grade,class),
    primary key (stuid,grade,class)

);
create table stdnum
(
    grade number,
    class number,
    primary key(grade,class)
);
create table tea (
    grade number,
    class number,
    htea varchar(30),
    stea varchar(30),
    foreign key (grade,class) references stdnum (grade,class),
    primary key(htea,stea)
);
drop table stdnum;
drop table depart;
drop table stud;
drop table gen;
drop table tea;

INSERT INTO depart values (1,null);
INSERT INTO depart values (2,'¼ÒÇÁÆ®¿þ¾î °³¹ß°ú');
INSERT INTO depart values (3,'ÀÓº£µðµå¼ÒÇÁÆ®¿þ¾î°ú');

INSERT INTO gen values (1,'³²');
INSERT INTO gen values (2,'¿©');

INSERT INTO stdnum values (1,1);
INSERT INTO stdnum values (1,2);
INSERT INTO stdnum values (1,3);
INSERT INTO stdnum values (1,4);
INSERT INTO stdnum values (2,1);
INSERT INTO stdnum values (2,2);
INSERT INTO stdnum values (2,3);
INSERT INTO stdnum values (2,4);

INSERT INTO stud values (1,1,1,'°­*¼®',1,1);
INSERT INTO stud values (1,1,2,'±è*¹Î',1,1);
INSERT INTO stud values (1,1,3,'±è*Âù',1,1);

INSERT INTO stud values (1,2,1,'°­*Á¦',1,1);
INSERT INTO stud values (1,2,2,'°­*ÈÆ',1,1);
INSERT INTO stud values (1,2,3,'±Ç*ºó',1,1);

INSERT INTO stud values (1,3,1,'°í*¿µ',2,1);
INSERT INTO stud values (1,3,2,'±è*°Ç',1,1);
INSERT INTO stud values (1,3,3,'±è*¿ì',1,1);

INSERT INTO stud values (1,4,1,'°­*ºó',1,1);
INSERT INTO stud values (1,4,2,'±¸*ÇÏ',2,1);
INSERT INTO stud values (1,4,3,'±Ç*¿ø',1,1);

INSERT INTO stud values (2,1,1,'±è*¼­',1,2);
INSERT INTO stud values (2,1,2,'±è*¿ï',2,2);
INSERT INTO stud values (2,1,3,'¹Ú*Àº',2,2);

INSERT INTO stud values (2,2,1,'±Ç*¼­',1,2);
INSERT INTO stud values (2,2,2,'±è*¹Î',1,2);
INSERT INTO stud values (2,2,3,'±è*Çö',1,2);

INSERT INTO stud values (2,3,1,'±Ç*¿í',1,3);
INSERT INTO stud values (2,3,2,'±è*Çü',1,3);
INSERT INTO stud values (2,3,3,'±è*Çö',1,3);

INSERT INTO stud values (2,4,1,'±è*¼ö',1,3);
INSERT INTO stud values (2,4,2,'±è*Áø',2,3);
INSERT INTO stud values (2,4,3,'±è*Àº',2,3);

select s.grade ÇÐ³â,s.class ¹Ý,s2.stuid ¹øÈ£,s2.name ÀÌ¸§,g.gender ¼ºº°,d.NAME ÇÐ°ú,t.htea ´ãÀÓ,t.stea ºÎ´ãÀÓ
from stdnum s
    join stud s2 on s.grade = s2.grade and s.class = s2.class
    join depart d on d.depnum = s2.depnum
    join gen g on g.gennum = s2.gennum
    join tea t on s.grade = t.grade and s.class = t.class
