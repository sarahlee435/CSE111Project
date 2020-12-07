
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
