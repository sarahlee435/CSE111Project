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
   p_status         char(2) NOT NULL,
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
   l_supplykey      INT NOT NULL,  
   l_orderkey       INT NOT NULL,
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
   st_product      char(32) NOT NULL,
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
      (10,"Savannah Wild","opioeihasd","swild@gmail.com","631-794-4562");

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
VALUES(1,6,4550.63,"07-15-2020","ER"),
      (2,8,54989.22,"11-9-2020","W"),
      (3,4,1648.54,"03-31-2020","D"),
      (4,10,1442.35,"10-2-2020","ER"),
      (5,2,4545.11,"11-1-2020","W"),
      (6,3,69983.87,"08-6-2020","W"),
      (7,5,2165.21,"03-5-2020","D"),
      (8,9,6356.32,"03-10-2020","D"),
      (9,7,8897.15,"08-1-2020","D"),
      (10,1,21854.26,"10-20-2020","ER");

--populating Product
INSERT INTO Product(p_prodkey, p_name, p_type, p_material, p_brand, p_rating, p_status, p_retailprice)
VALUES();

--populating ProductQuantity
INSERT INTO ProductQuantity(pq_prodkey, pq_currstore, pq_restockdate, pq_availability)
VALUES();

--populating Lineitem
INSERT INTO Lineitem(l_supplykey, l_orderkey, l_prodkey, l_discount, l_tax, l_shipcost, l_shipdate, l_receiptdate)
VALUES();

--populating Store
INSERT INTO Store(st_name, st_product)
VALUES();

--populating In-Store
INSERT INTO InStore(storeName, productName, productBrand)
VALUES();

--populating OrderDetails
INSERT INTO OrderDetails(odSuppkey, odOrderkey)
VALUES();


--for printing tables to see
SELECT * FROM Customer;

SELECT * FROM Supplier;

SELECT * FROM Orders;

-- SELECT * FROM Product;

-- SELECT * FROM ProductQuantity;

-- SELECT * FROM Lineitem;

-- SELECT * FROM Store;

-- SELECT * FROM InStore;

-- SELECT * FROM OrderDetails;
