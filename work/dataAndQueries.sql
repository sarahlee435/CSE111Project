--customer table
CREATE TABLE Customer(
    c_custkey       INT primary key,
    c_name          varchar(13) NOT NULL,
    c_address       char(13) NOT NULL,
    c_email         varchar(19) NOT NULL,
    c_phone         char(12) NOT NULL
);

--supplier table
CREATE TABLE Supplier(
    s_suppkey       INT primary key,
    s_name          varchar(13) NOT NULL,
    s_address       char(17) NOT NULL,
    s_email         varchar(19) NOT NULL,
    s_phone         char(12) NOT NULL
);

--order table
CREATE TABLE Orders(
    o_orderkey      INT primary key,
    o_custkey       INT NOT NULL,
    o_totalcost     decimal(5,2) NOT NULL,
    o_orderdate     date NOT NULL,
    o_orderstatus   char(2) NOT NULL,
    FOREIGN KEY (o_custkey) REFERENCES Orders(o_custkey)
);

--product table--
CREATE TABLE Product(
   p_prodkey        INT primary key,
   p_name           char(32) NOT NULL,
   p_type           char(32) NOT NULL,
   p_material       char(32) NOT NULL,
   p_brand          char(32) NOT NULL,
   p_rating         INT NOT NULL,
   p_retailprice    decimal(5,2) NOT NULL
);

--ProductQuantity table--
CREATE TABLE ProductQuantity(
   pq_prodkey       INT NOT NULL,
   pq_currstock     INT NOT NULL,
   pq_restockdate   date NOT NULL,
   pq_availability  char(2) NOT NULL
);

--lineitem table--
CREATE TABLE Lineitem(
    l_orderkey       INT NOT NULL,
   l_supplykey      INT NOT NULL,  
   l_prodkey        INT NOT NULL,
   l_discount       decimal(5,2) NOT NULL,
   l_tax            decimal(5,2) NOT NULL,
   l_shipcost       decimal(5,2) NOT NULL,
   l_shipdate       date NOT NULL,
   l_receiptdate    date NOT NULL
);


--store table--
CREATE TABLE Store(
   st_name         char(32) NOT NULL,
   st_product      INTEGER NOT NULL
);

--In-store table--
CREATE TABLE InStore(
    storeName       char(32) NOT NULL,
    productName     char(32) NOT NULL,
    productBrand    char(32) NOT NULL
);

--OrderDetails table--
CREATE TABLE OrderDetails(
    odSuppkey      INT NOT NULL,  
    odOrderkey     INT NOT NULL
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
      (10,"Savannah Wild","opioeihasd","swild@gmail.com","631-794-4562"),
      (11,"Latte Sweets","asdguijp[ d","lsweets@gmail.com","125-794-4652"),
      (12,"Ruby Rose","mpugkjoqw.,w","rrose@gmail.com","894-756-2315"),
      (13,"Onyx Kingston","iyuigshmb;","okingston@gmail.com","789-213-5487"),
      (14,"Lara Croft","asywu8qas","lcroft@gmail.com","879-236-4869"),
      (15,"Angel Benevolence","bnmbxzip","abenevolence@gmail.com","633-785-9999"),
      (16,"Check Gecko","asjhk9y7gk","cgeck@gmail.com","777-566-1212"),
      (17,"Avril Levy","piuoiyhb8","alevy@gmail.com","122-646-7845"),
      (18,"Amethyst Connors","jpoipoua","aconnors@gmail.com","325-5658-7777"),
      (19,"Eloise Capello","aspoiuqmn","ecapello@gmail.com","315-7894-6661"),
      (20,"Summer Anderson","tuewp921jk","sanderson@gmail.com","165-894-7785");
      

--populating suppliers
INSERT INTO Supplier(s_suppkey,s_name,s_address,s_email,s_phone)
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

--populating orders
--NOTE: ER = en route, W = warehouse, D = delivered
INSERT INTO Orders(o_orderkey,o_custkey,o_totalcost,o_orderdate,o_orderstatus)
VALUES(1,6,4550.63,"2020-07-15","ER"),
      (2,8,54989.22,"2020-11-09","W"),
      (3,4,1648.54,"2020-03-31","D"),
      (4,10,1442.35,"2020-10-02","ER"),
      (5,2,4545.11,"2020-11-01","W"),
      (6,3,69983.87,"2020-08-06","W"),
      (7,5,2165.21,"2020-03-05","D"),
      (8,9,6356.32,"2020-03-10","D"),
      (9,7,8897.15,"2020-08-01","D"),
      (10,1,21854.26,"2020-10-20","ER");

--populating Product
INSERT INTO Product(p_prodkey,p_name,p_type,p_material,p_brand,p_rating,p_retailprice)
VALUES(1,"RED ACRYLIC PAINT TUBE","PAINT","ACRYLIC","LIQUITEX","90",3.50),
      (2,"ORANGE OIL PAINT TUBE","PAINT","OIL","WILLIAMSBURG","93",9.89),
      (3,"STUDENT SERIES BRUSH SET","BRUSH","WATERCOLOR","DA VINCI","95",19.90),
      (4,"PRIMIER COLOR PENCIL 12 SET","PENCIL","COLOR","PRISMACOLOR","95",10.95),
      (5,"ART DRAWING PENCILS 12 PACK","PENCIL","GRAPHITE","STAEDTLER","97",14.37),
      (6,"CHARCOAL DRAWING SET 33 PACK","PENCIL","CHARCOAL","GENERAL PENCIL","89",30.54),
      (7,"STRATHMORE SERIES SKETCH PAD 75 PAGES","PAPER","HEAVY WEIGHT","STRATHMORE","92",20.99),
      (8,"ROUND FULL STICK 12 PIECE SET","PASTEL","OIL","VAN GOGH","76",13.87),
      (9,"LARGE RASOPLAST PENCIL ERASER 3 PACK","ERASER","PLASTIC","STAEDTLER","87",3.99),
      (10,"WATER COLOR PAINT SET","PAINT","WATERCOLOR","WINSOR & NEWTON COTMAN","76",29.99),
      (11,"CANVAS PANEL 4 PACK","CANVAS","COTTON","FREDRIX","84",17.45)
    ;

--populating ProductQuantity
INSERT INTO ProductQuantity(pq_prodkey,pq_currstock,pq_restockdate,pq_availability)
VALUES(1,10,"12-21-2020","Y"),
      (2,0,"11-05-2020","N"),
      (3,54,"12-01-2020","Y"),
      (4,35,"10-03-2020","Y"),
      (5,67,"12-12-2020","Y"),
      (6,97,"01-21-2021","Y"),
      (7,0,"12-25-2020","N"),
      (8,350,"11-01-2020","Y"),
      (9,107,"12-09-2020","Y"),
      (10,30,"10-27-2020","Y"),
      (11,53,"12-06-2020","Y")
    ;

--populating Lineitem
INSERT INTO Lineitem(l_orderkey,l_supplykey,l_prodkey,l_discount,l_tax,l_shipcost,l_shipdate,l_receiptdate)
VALUES(1,10,3,0.03,0.10,0,"2020-07-17","2020-07-25"),
      (2,5,8,0.05,0.13,1.65,"2020-11-10","2020-11-17"),
      (3,7,5,0.02,0.12,2.65,"2020-03-31","2020-04-07"),
      (4,9,9,0.75,0.06,3.75,"2020-10-03","2020-10-10"),
      (5,8,10,0.25,0.19,2.35,"2020-11-04","2020-11-11"),
      (6,2,11,0.50,0.20,1.65,"2020-08-07","2020-08-14"),
      (7,1,3,0.13,0.09,1.23,"2020-03-06","2020-03-13"),
      (8,6,1,0.40,0.05,0.08,"2020-03-13","2020-03-20"),
      (9,3,1,0.54,0.09,0.04,"2020-08-01","2020-08-07"),
      (10,4,4,0.02,0.03,0.34,"2020-10-21","2020-10-28")
;

--populating Store
INSERT INTO Store(st_name,st_product)
VALUES("HOBBY LOBBY",2),
      ("MICHAELS",1),
      ("WALMART",6),
      ("BLICK ART MATERIALS",3),
      ("JOANN FABRICS AND CRAFTS",4),
      ("TARGET",5),
      ("JERRY'S ARTARAMA",6)
;

-- --populating In-Store
-- INSERT INTO InStore(storeName,productName,productBrand)
-- VALUES();

-- --populating OrderDetails
-- INSERT INTO OrderDetails(odSuppkey,odOrderkey)
-- VALUES();


--for printing tables to see
SELECT * FROM Customer;

SELECT * FROM Supplier;

SELECT * FROM Orders;

SELECT * FROM Product;

SELECT * FROM ProductQuantity;

SELECT * FROM Lineitem;

SELECT * FROM Store;

-- SELECT * FROM InStore;

-- SELECT * FROM OrderDetails;
