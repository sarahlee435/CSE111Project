CREATE TABLE Customer(
    c_custkey INT primary key,
    c_name varchar(13) NOT NULL,
    c_address char(13) NOT NULL,
    c_email varchar(19) NOT NULL,
    c_phone char(12) NULL
);

INSERT INTO Customer(c_custkey,c_name,c_address,c_email,c_phone)
VALUES(1,"Joe Cool","kjasdlkjsal","jcool@gmail.com","209-154-2692"),
(2,"John Doe","ljljoisadas","jdoe@gmail.com","123-456-8243"),
(3,"Jack Quick","asldjasdpi","jquick@gmail.com","954-642-8677"),
(4,"Sally May","asdjpaosd","smay@gmail.com","561-259-6623"),
(5,"Abby Apples","asjdasdjj","aapples@gmail.com","153-456-2615"),
(6,"Lyrik Note","ijonasdlp","lnote@gmail.com","485-562-5623"),
(7,"Bob Builder","Jashldjk","bbuilder@gmail.com","544-621-4796"),
(8,"Daisy Fields","askdjhuc","dfields@gmail.com","515-261-7899"),
(9,"Loch Lake","aslidkjlk","llake@gmail.com","565-563-7456"),
(10,"Savannah Wild","opioeihasd","swild@gmail.com","631-794-4562");
