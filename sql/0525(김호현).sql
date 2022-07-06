
CREATE TABLE Salesperson
(
    nameS  varchar2(40) primary key,
    age    number,
    salary number
);

CREATE TABLE Customer
(
    nameC        varchar2(40) primary key,
    city         varchar2(20),
    industrytype varchar2(40)
);
CREATE TABLE orderf
(
    numbers     number,
    custname    varchar(40),
    salesperson varchar(40),
    amount      number,
    foreign key (custname) references Customer (nameC),
    foreign key (Salesperson) references Salesperson (nameS)
);


drop table Salesperson;
drop table Customer;
drop table orderf;



--1¹ø
Insert into Salesperson
values ('°­¿õºó', 25, 84000);
Insert into Salesperson
values ('±¸À±ÇÏ', 23, 75000);
Insert into Salesperson
values ('±Ç¼¼¿ø', 46, 10000);
Insert into Salesperson
values ('±è³ªÇö', 35, 31000);
Insert into Salesperson
values ('±è¹Î¼®', 17, 35000);
Insert into Salesperson
values ('±è¹ÎÁØ', 48, 55000);
Insert into Salesperson
values ('TOM', 21, 33000);

Insert into Customer
values ('¹®¼­ºó', 'Áö»ç', '³óºÎ');
Insert into Customer
values ('¹Ú¿ìºó', '±èÇØs', '¹é¼ö');
Insert into Customer
values ('¹ÚÇöÁØ', '±èÇØs', '¾Ë¹Ù»ý');
Insert into Customer
values ('ÀÌÃ¢º¸', 'ºÎ»ê', '±â°Ë»ç');
INSERT into CUSTOMER
values ('ÀÌÇÏ¸°', 'LA', '¾Ö»õ³¢');

Insert into Orderf
values (1, '¹®¼­ºó', '±Ç¼¼¿ø', 3);
Insert into Orderf
values (2, '¹Ú¿ìºó', '±è³ªÇö', 7);
Insert into Orderf
values (3, 'ÀÌÃ¢º¸', '°­¿õºó', 100);
Insert into Orderf
values (4, '¹Ú¿ìºó', '±è¹Î¼®', 92);
Insert into Orderf
values (5, '¹®¼­ºó', '±Ç¼¼¿ø', 72);
Insert into Orderf
values (5, 'ÀÌÇÏ¸°', 'TOM', 72);

-- 2¹ø
select nameS, salary
from Salesperson;
-- 3¹ø
select nameS
from Salesperson
where age < 30;
-- 4¹ø
select nameC
from Customer
where city like '%s';
-- 5¹ø
select count(distinct custname)
from orderf;
-- 6¹ø
select salesperson, count(*)
from orderf
group by salesperson;
-- 7¹ø
select nameS, age
from Salesperson
where nameS like (select salesperson from orderf where custname like (select nameC from Customer where city like 'LA'));
-- 8¹ø
select S.nameS, S.age
from Salesperson S
         join orderf o on S.nameS = o.salesperson
         join Customer C on O.custname = C.nameC
where C.city like 'LA';
-- 9¹ø
select salesperson
from orderf
group by salesperson
having count(*) >= 2;
-- 10¹ø
update Salesperson
set salary = 45000
where nameS like 'TOM';

select *
from Salesperson;







