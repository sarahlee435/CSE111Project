--customer table
CREATE TABLE Customer(
    c_custkey INT primary key,
    c_name varchar(13) NOT NULL,
    c_address char(13) NOT NULL,
    c_email varchar(19) NOT NULL,
    c_phone char(12) NULL
);
--supplier table
CREATE TABLE Supplier(
    s_custkey INT primary key,
    s_name varchar(13) NOT NULL,
    s_address char(17) NOT NULL,
    s_email varchar(19) NOT NULL,
    s_phone char(12) NULL
);
--populating customers
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
--populating suppliers
INSERT INTO Supplier(s_custkey,s_name,s_address,s_email,s_phone)
VALUES(1,"Kate Spade","askjdjlasd;aks","kspade@gmail.com","546-514-1521"),
      (2,"Veronica Heart",";alksnpius","vheart@gmail.com","551-132-4561"),
      (3,"Petunia Club","askhckousyay","pclub@gmail.com","246-113-4984"),
      (4,"Arnold Joker","oipmjoas","ajoker@gmail.com","413-561-5697"),
      (5,"Terry Ace","piwyqekjbja.sajh","tace@gmail.com","125-123-4562"),
      (6,"King Maze","cliouscaolj,","kmaze@gmail.com","111-111-1110"),
      (7,"Queen Jewel","uasoidu","qjewel@gmail.com","455-487-1645"),
      (8,"Honii Clover","asicoup","hclover@gmail.com","894-526-8997"),
      (9,"Asta Bulls","qowihdhfj","abulls@gmail.com","789-123-7077"),
      (10,"Star Nebula","Psdlkv qowiu","snebula@gmail.com","545-445-7899");


        