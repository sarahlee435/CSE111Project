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
   st_name         char(50) NOT NULL,
   st_product      INT NOT NULL
);

--In-store table--
CREATE TABLE InStore(
    storeName       char(40) NOT NULL,
    productName     char(40) NOT NULL,
    productBrand    char(40) NOT NULL
);

--OrderDetails table--
CREATE TABLE OrderDetails(
    odSuppkey      INT primary key,  
    odOrderkey     INT NOT NULL,
    FOREIGN KEY (odOrderkey) REFERENCES OrderDetails(odOrderkey)
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
      (10,"Star Nebula","Psdlkv qowiu","snebula@gmail.com","545-445-7899"),
      (11,"Vittorio Capello","mnbzxz;.uio","vcapello@gmail.com","416-469-4877"),
      (12,"Mahina Capello","sadlijkca","mcapello@gmail.com","416-113-1565"),
      (13,"Preston Russell","allknl[[po","prussell@gmail.com","789-899-1236"),
      (14,"Felicity Bonhomme","foiapshkla","fbonhomme@gmail.com","789-132-1846"),
      (15,"Juliette Salazar","tybjkhc asi","jsalazar@gmail.com","127-664-8942"),
      (16,"Luna Charming","nmnbzxt xz","lcharming@gmail.com","333-7874-1567"),
      (17,"Leon Aros","mnpijpqqq","laros@gmail.com","656-455-5555"),
      (18,"Arlo Drago","asjpduiugg","adrago@gmail.com","879-998-1261"),
      (19,"Arturo Aros","bbozxoia","aaros@gmail.com","125-561-7789"),
      (20,"Crest Lunalla","jlioiu74w","clunalla@gmail.com","132-789-4456");

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
      (10,1,21854.26,"2020-10-20","ER"),
      (11,20,98435.54,"2020-11-12","W"),
      (12,15,1365.01,"2020-05-02","D"),
      (13,19,22136.36,"2020-06-18","D"),
      (14,13,1598.22,"2020-11-26","ER"),
      (15,12,9766.65,"2020-10-09","ER"),
      (16,14,4569.23,"2020-11-11","W"),
      (17,18,1333.01,"2020-01-01","D"),
      (18,11,6523.98,"2020-04-21","D"),
      (19,17,7451.23,"2020-08-16","ER"),
      (20,16,1266.87,"2020-07-18","D");

--populating Product
INSERT INTO Product(p_prodkey,p_name,p_type,p_material,p_brand,p_rating,p_retailprice)
VALUES(1,"RED ACRYLIC PAINT TUBE","PAINT","ACRYLIC","LIQUITEX",90,3.50),
      (2,"ORANGE OIL PAINT TUBE","PAINT","OIL","WILLIAMSBURG",93,9.89),
      (3,"STUDENT SERIES BRUSH SET","BRUSH","WATERCOLOR","DA VINCI",95,19.90),
      (4,"PRIMIER COLOR PENCIL 12 SET","PENCIL","COLOR","PRISMACOLOR",95,10.95),
      (5,"ART DRAWING PENCILS 12 PACK","PENCIL","GRAPHITE","STAEDTLER",97,14.37),
      (6,"CHARCOAL DRAWING SET 33 PACK","PENCIL","CHARCOAL","GENERAL PENCIL",89,30.54),
      (7,"STRATHMORE SERIES SKETCH PAD 75 PAGES","PAPER","MIXED MEDIA","STRATHMORE",92,20.99),
      (8,"ROUND FULL STICK 12 PIECE SET","PASTEL","OIL","VAN GOGH",76,13.87),
      (9,"LARGE RASOPLAST PENCIL ERASER 3 PACK","ERASER","PLASTIC","STAEDTLER",87,3.99),
      (10,"WATER COLOR PAINT SET","PAINT","WATERCOLOR","WINSOR & NEWTON COTMAN",76,29.99),
      (11,"CANVAS PANEL 4 PACK","CANVAS","COTTON","FREDRIX",84,17.45),
      (12,"STRATHMORE SERIES 400 WATER COLOR PAD","PAPER","WATERCOLOR PAPER","STRATHMORE",85,9.97),
      (13,"STRATHMORE SERIES 300 CHARCOL COLOR PAD","PAPER","CHARCOL PAPER","STRATHMORE",80,10.10),
      (14,"GIOCONDA SOFT PASTEL PENCIL SET 12 PIECE SET","PASTEL","COLOR","KOH-I-NOOR",73,22.74),
      (15,"HALF PASTEL BOXED SET 40","PASTEL","PIGMENT","SENNELIER",77,56.71),
      (16,"NUPASTEL 24 COUNT","PASTEL","PIGMENT","PRISMACOLOR",82,24.23),
      (17,"WATER COLOR PENCILS 12 COUNT","PENCIL","WATERCOLOR COLOR","DERWENT",82,19.23),
      (18,"WATER COLOR PAINT SKETCHERS' POCKET BOX","PAINT","WATERCOLOR","WINSOR & NEWTON COTMAN",82,17.59),
      (19,"GALERIA ARCYLIC PAINT 10 TUBE SET","PAINT","ARCYLIC","WINSOR & NEWTON COTMAN",85,27.26),
      (20,"ARTIST OIL COLORS INTRODUCTORY","PAINT","OIL","GAMBLIN",85,69.60);

--populating ProductQuantity
INSERT INTO ProductQuantity(pq_prodkey,pq_currstock,pq_restockdate,pq_availability)
VALUES(1,10,"2020-12-21","Y"),
      (2,0,"2020-11-05","N"),
      (3,54,"2020-12-01","Y"),
      (4,35,"2020-10-03","Y"),
      (5,67,"2020-12-12","Y"),
      (6,97,"2021-01-21","Y"),
      (7,0,"2020-12-25","N"),
      (8,350,"2020-11-01","Y"),
      (9,107,"2020-12-09","Y"),
      (10,30,"2020-10-27","Y"),
      (11,53,"2020-12-06","Y"),
      (12,400,"2020-10-31","Y"),
      (13,100,"2020-11-24","Y"),
      (14,30,"2020-10-04","Y"),
      (15,0,"2020-12-02","N"),
      (16,5,"2020-11-16","Y"),
      (17,0,"2020-12-15","N"),
      (18,250,"2021-01-05","Y"),
      (19,85,"2020-12-20","Y"),
      (20,70,"2020-10-13","Y");

--populating Lineitem
INSERT INTO Lineitem(l_orderkey,l_supplykey,l_prodkey,l_discount,l_tax,l_shipcost,l_shipdate,l_receiptdate)
VALUES(1,10,3,0.03,0.10,0,"2020-07-17","2020-07-25"),
      (2,5,8,0.05,0.13,1.65,"2020-11-10","2020-11-17"),
      (3,7,5,0.02,0.12,2.65,"2020-03-31","2020-04-07"),
      (4,9,9,0.75,0.06,3.75,"2020-10-03","2020-10-10"),
      (5,8,10,0.25,0.19,2.35,"2020-11-04","2020-11-11"),
      (6,2,11,0.50,0.20,1.65,"2020-08-07","2020-08-14"),
      (7,1,3,0.13,0.09,1.23,"2020-03-06","2020-03-13"),
      (8,1,6,0.40,0.05,0.08,"2020-03-13","2020-03-20"),
      (9,3,1,0.54,0.09,0.04,"2020-08-01","2020-08-07"),
      (10,4,4,0.02,0.03,0.34,"2020-10-21","2020-10-28"),
      (11,20,2,0.50,5.99,3.00,"2020-08-15","2020-08-20"),
      (12,6,15,0.75,6.99,4.99,"2020-10-10","2020-10-16"),
      (13,11,14,0.30,3.50,1.50,"2020-11-20","2020-11-25"),
      (14,15,17,0.05,2.50,3.50,"2020-11-12","2020-11-20"),
      (15,17,19,0.10,0.00,4.50,"2020-03-20","2020-03-25"),
      (16,17,12,0.20,3.10,8.99,"2020-12-01","2020-12-10"),
      (17,18,18,0.25,4.99,4.50,"2020-12-13","2020-12-17"),
      (18,19,16,0.65,4.00,7.50,"2020-12-21","2020-12-27"),
      (19,20,20,0.15,3.80,2.50,"2020-10-31","2020-11-05"),
      (20,14,13,0.12,1.50,3.20,"2020-11-30","2020-12-03");

--populating Store
INSERT INTO Store(st_name,st_product)
VALUES("HOBBY LOBBY",2),
      ("HOBBY LOBBY",9),
      ("HOBBY LOBBY",17),
      ("HOBBY LOBBY",15),
      ("MICHAELS",1),
      ("MICHAELS",4),
      ("MICHAELS",5),
      ("WALMART",6),
      ("BLICK ART MATERIALS",3),
      ("BLICK ART MATERIALS",8),
      ("JOANN FABRICS AND CRAFTS",4),
      ("JOANN FABRICS AND CRAFTS",10),
      ("TARGET",5),
      ("TARGET",13),
      ("JERRY'S ARTARAMA",19),
      ("AMAZON",11),
      ("AMAZON",20),
      ("AMAZON",16),
      ("ETSY",12),
      ("ETSY",18);

-- --populating In-Store
INSERT INTO InStore(storeName,productName,productBrand)
VALUES("HOBBY LOBBY","ORANGE OIL PAINT TUBE","WILLIAMSBURG"),
      ("HOBBY LOBBY","LARGE RASOPLAST PENCIL ERASER 3 PACK","STAEDTLER"),
      ("HOBBY LOBBY","WATER COLOR PENCILS 12 COUNT","DERWENT"),
      ("HOBBY LOBBY","HALF PASTEL BOXED SET 40","SENNELIER"),
      ("MICHAELS","RED ACRYLIC PAINT TUBE","LIQUITEX"),
      ("MICHAELS","PRIMIER COLOR PENCIL 12 SET","PRISMACOLOR"),
      ("MICHAELS","ART DRAWING PENCILS 12 PACK","STAEDTLER"),
      ("WALMART","CHARCOAL DRAWING SET 33 PACK","GENERAL PENCIL"),
      ("BLICK ART MATERIALS","STUDENT SERIES BRUSH SET","DA VINCI"),
      ("BLICK ART MATERIALS","ROUND FULL STICK 12 PIECE SET","VAN GOGH"),
      ("JOANN FABRICS AND CRAFTS","PRIMIER COLOR PENCIL 12 SET","PRISMACOLOR"),
      ("JOANN FABRICS AND CRAFTS","WATER COLOR PAINT SET","WINSOR & NEWTON COTMAN"),
      ("TARGET","ART DRAWING PENCILS 12 PACK","STAEDTLER"),
      ("TARGET","STRATHMORE SERIES 300 CHARCOL COLOR PAD","STRATHMORE"),
      ("JERRY'S ARTARAMA","CHARCOAL DRAWING SET 33 PACK","GENERAL PENCIL"),
      ("AMAZON","CANVAS PANEL 4 PACK","FREDRIX"),
      ("AMAZON","ARTIST OIL COLORS INTRODUCTORY","GAMBLIN"),
      ("AMAZON","NUPASTEL 24 COUNT","PRISMACOLOR"),
      ("ETSY","STRATHMORE SERIES 400 WATER COLOR PAD","STRATHMORE"),
      ("ETSY","WATER COLOR PAINT SKETCHERS' POCKET BOX","WINSOR & NEWTON COTMAN");

-- --populating OrderDetails
INSERT INTO OrderDetails(odOrderkey, odSuppkey)
VALUES(1,10),
      (2,5),
      (3,7),
      (4,9),
      (5,8),
      (6,2),
      (7,1),
      (8,12),
      (9,3),
      (10,4),
      (11,20),
      (12,16),
      (13,11),
      (14,13),
      (15,17),
      (16,15),
      (17,6),
      (18,19),
      (19,14),
      (20,18);


--PRINTING TABLES--

SELECT * FROM Customer;

SELECT * FROM Supplier;

SELECT * FROM Orders;

SELECT * FROM Product;

SELECT * FROM ProductQuantity;

SELECT * FROM Lineitem;

SELECT * FROM Store;

SELECT * FROM InStore;

SELECT * FROM OrderDetails;

--QUERIES--

--1. Find the products that cost less than or equal to $20 and are pencils--
SELECT p_name 
    FROM Product 
    WHERE p_retailprice <= 20
        AND p_type = "PENCIL"
;

--2. Add a few new products that were released by Prismacolor.--
INSERT INTO Product 
VALUES(31,"PRIMIER COLOR PENCIL 24 SET","PENCIL","COLOR","PRISMACOLOR","82",24.95),
      (32,"PRIMIER RUBBER ERASER","ERASER","RUBBER","PRISMACOLOR","68",2.99)
;

--3. A user wants to see the list of in-stock paints with a price less than $40 in descending order of ratings.--
SELECT p_name, p_type, p_material, p_retailprice, p_rating
    FROM Product, ProductQuantity
    WHERE p_retailprice < 40
        AND p_prodkey = pq_prodkey
        AND pq_availability = "Y"
        AND p_type = "PAINT"
    GROUP BY p_rating
    ORDER BY p_rating DESC
;

--4. Find how many customers purchased pencils in the year 2020 and have already been delivered.--
SELECT COUNT(c_custkey)
    FROM Customer, Orders, Product, Lineitem
    WHERE l_orderkey = o_orderkey
        AND o_custkey = c_custkey
        AND p_prodkey = l_prodkey
        AND p_type = "PENCIL"
        AND o_orderdate LIKE '%2020%'
        AND o_orderstatus = 'D'
;

--5. Fredrix canvases are being recalled temporarily so they need to be deleted from the product list--
DELETE FROM Product
    WHERE p_brand = "FREDRIX"
    AND p_type = "CANVAS"
;

--6. The price of all paper increased by $0.25--
UPDATE Product
    SET p_retailprice = p_retailprice + 0.25
    WHERE p_type = 'PAPER'
;

--7. A user wants to find all the stores that have available Van Gogh brand goods with a price of at least $5. Also list the product name and retail price.--
SELECT st_name, p_name, p_retailprice
    FROM Store, Product, ProductQuantity
    WHERE st_product = p_prodkey
        AND pq_prodkey = p_prodkey
        AND pq_availability = 'Y'
        AND p_brand = 'VAN GOGH'
        AND p_retailprice >= 5
    GROUP BY st_name
;

--8. What is the average price of all mixed media paper sketchbooks?--
SELECT AVG(p_retailprice) AS mycount
    FROM Product
    WHERE p_type = 'PAPER'
    AND p_material = "MIXED MEDIA"
;

--9. All orders in October 2020 are now delivered.--
UPDATE Orders
    SET o_orderstatus = 'D'
    WHERE o_orderdate LIKE '%2020-10%'
;

--10. List the names of the current available stock of paints next to their brands and quantity--
SELECT p_name, p_brand, pq_currstock
    FROM Product, ProductQuantity
    WHERE pq_availability = 'Y'
        AND p_prodkey = pq_prodkey
        AND p_type = 'PAINT'
;

--11. List the average ratings of all products.--
SELECT P1.p_brand, AVG(P1.p_rating)
    FROM Product P1, Product P2
    WHERE P1.p_brand = P2.p_brand
    GROUP BY P1.p_brand
;

--12. A user wants to see all oil paints and cotton canvas options listed with their ratings and price, but in ascending order of price--
SELECT p_name, p_rating, p_retailprice
    FROM Product
    WHERE (p_type = 'PAINT'
        AND p_material = 'OIL'
        OR p_type = 'CANVAS'
        AND p_material = 'COTTON'
        )
    GROUP BY p_name
    ORDER BY p_retailprice ASC
;

--13. Find the list of stores with at least 3 different products listed.--
SELECT st_name 
    FROM Store, InStore
    WHERE st_name = storeName
    GROUP BY st_name
    HAVING COUNT(st_name) > 2
;

--14. A user from Hobby Lobby wants to see their current inventory including out of stock goods.--
SELECT DISTINCT st_name, p_name, p_brand, pq_currstock
    FROM Store, InStore, Product, ProductQuantity
    WHERE st_name = storeName
        AND st_product = p_prodkey
        AND p_prodkey = pq_prodkey
        AND st_name = "HOBBY LOBBY"
;

--15. A user wants to see all products that are still in the warehouse.--
SELECT p_name 
    FROM Product, Lineitem, Orders
    WHERE o_orderstatus = 'W'
        AND o_orderkey = l_orderkey
        AND l_prodkey = p_prodkey
;

--16. List the max current stock of each product by type.--
SELECT p_type, MAX(pq_currstock)
    FROM Product, ProductQuantity
    WHERE p_prodkey = pq_prodkey
    GROUP BY p_type
;


--17. How many customers had purchased the same product?--
SELECT COUNT(DISTINCT C1.c_custkey)
    FROM (SELECT DISTINCT c_custkey
        FROM (
            SELECT l_prodkey
            FROM Lineitem, Orders, Customer
            WHERE l_orderkey = o_orderkey
            AND o_custkey = c_custkey
        ) L1, Orders, Customer, Lineitem L2
        WHERE L2.l_orderkey = o_orderkey
            AND o_custkey = c_custkey
            AND L1.l_prodkey = L2.l_prodkey
        GROUP BY c_custkey
        HAVING COUNT(L2.l_prodkey) > 1
    ) C1
;

--18. What is the minimum cost of each product by type?--
SELECT P1.p_type, MIN(P1.p_retailprice)
    FROM Product P1, Product P2
    WHERE P1.p_type = P2.p_type
    GROUP BY P1.p_type
;

--19. Which stores are Staedtler products being sold in?--
SELECT st_name
    FROM Store, Product
    WHERE st_product = p_prodkey
        AND p_brand = 'STAEDTLER'
;

--20. A user wants to see the top ten products in ratings.--
SELECT P1.p_name
FROM (SELECT p_name, p_rating
    FROM Product
)P1
ORDER BY P1.p_rating DESC
LIMIT 10
;

--21. Which customers had a less than 10% discount in their purchases?--
SELECT c_name
    FROM Customer, Orders, Lineitem
    WHERE c_custkey = o_custkey
    AND o_orderkey = l_orderkey
    AND l_discount < .10
;
--22. A user wants a list of all products needed to produce watercolor art.--
SELECT p_name
    FROM Product
    WHERE p_material LIKE '%WATERCOLOR%'
;

--23. Find the names of all the suppliers whose orders they're in charge of are currently en-route--
SELECT s_name
    FROM Supplier, OrderDetails, Orders
    WHERE o_orderkey = odOrderkey
    AND s_suppkey = odSuppkey
    AND o_orderstatus = "ER"
;