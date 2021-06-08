CREATE DATABASE /*!32312 IF NOT EXISTS*/ `challenge` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `challenge`;

DROP TABLE IF EXISTS `managers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `managers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `salt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- CREATE TABLE `managers` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `email` varchar(255) NOT NULL,
--   `name` varchar(255) NOT NULL,
--   `password` varchar(255) NOT NULL,
--   `salt` varchar(255) DEFAULT NULL,
--   `createdAt` datetime NOT NULL,
--   `updatedAt` datetime NOT NULL,
--   `storeId` int(11) DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `email` (`email`),
--   KEY `storeId` (`storeId`),
--   CONSTRAINT `managers_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `stores` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managers`
--

LOCK TABLES `managers` WRITE;
/*!40000 ALTER TABLE `managers` DISABLE KEYS */;
-- INSERT INTO `managers` VALUES (4,'manager@admin.com','Manager Nro 1','30025921f4f1fe66cd742c35a7db30b21f4d474f','2571c24ad430f843c6fe635f1d236a44fd35543c'),(7,'manager@negocio3.com','Nombre en serio','19adf3409411a0578b7c3a4a2f36ce5450d82ea0','daba1cf9259f2625310e629967245c9caa48bb5f','2021-04-01 17:54:37','2021-04-02 12:36:51',4),(8,'manu@mail.com','Manu 23','4dfa186528a7afd8e4daaddfaae260e8037641ab','9b803cecef182750b95e1d51227a7d1324d77e3d','2021-04-02 12:37:42','2021-05-19 20:16:05',5),(16,'pepe@destroyer.com','Pepe el destructor','9b1196886e4a1e8abaafeaa84193307f0d1f4ce1','9b7474613d9061ef50b3f69b7931a3eff4545a0a','2021-04-02 13:29:43','2021-04-02 14:56:10',5),(19,'manuel4gmz@gmail.com','a este no','afc1deb5a2f097bc1cba8eceb89b47c676279173','9c688d138a19f5a416151f28210109bb60d75f45','2021-04-02 14:50:54','2021-04-02 14:50:54',NULL),(21,'manager@manager.com','Manager ejemplo','8a0d898845f6b0322b7275b317f6b22ea0179347','a349c0ed14a99921c7183f6b033c637f4124edfb','2021-04-02 15:05:32','2021-04-02 15:05:32',1),(29,'manager@random.com','Manager random','3dcb22055b6a0f8a42af99f84369b0c7df694bf2','295c140d49ef577699f0571359813a873cb282ab','2021-04-06 15:41:30','2021-04-06 15:41:30',NULL),(30,'manager1@manager.com','Manager 1','c8c860746665359ae7d9423a9259f35ca416fd3e','7f7c1b654eee3f7e02d155e99161a51154bcad65','2021-04-06 18:13:28','2021-04-06 18:19:06',12),(33,'ejemplo24@mail.com','Ejemplo Edu','51e794f4d9709b0ee4eb4061f6c183a536c36a80','2e6a31ee95ebc191e9f02849f338edd4205c9d68','2021-04-06 19:25:01','2021-04-06 19:26:28',13);
INSERT INTO `managers` VALUES (4,'manager@admin.com','Manager Nro 1','30025921f4f1fe66cd742c35a7db30b21f4d474f','2571c24ad430f843c6fe635f1d236a44fd35543c'),(7,'manager@negocio3.com','Nombre en serio','19adf3409411a0578b7c3a4a2f36ce5450d82ea0','daba1cf9259f2625310e629967245c9caa48bb5f'),(8,'manu@mail.com','Rodri 23','4dfa186528a7afd8e4daaddfaae260e8037641ab','9b803cecef182750b95e1d51227a7d1324d77e3d'),(16,'pepe@destroyer.com','Pepe el destructor','9b1196886e4a1e8abaafeaa84193307f0d1f4ce1','9b7474613d9061ef50b3f69b7931a3eff4545a0a'),(19,'manuel4gmz@gmail.com','a este no','afc1deb5a2f097bc1cba8eceb89b47c676279173','9c688d138a19f5a416151f28210109bb60d75f45'),(21,'manager@manager.com','Manager ejemplo','8a0d898845f6b0322b7275b317f6b22ea0179347','a349c0ed14a99921c7183f6b033c637f4124edfb'),(29,'manager@random.com','Manager random','3dcb22055b6a0f8a42af99f84369b0c7df694bf2','295c140d49ef577699f0571359813a873cb282ab'),(30,'manager1@manager.com','Manager 1','c8c860746665359ae7d9423a9259f35ca416fd3e','7f7c1b654eee3f7e02d155e99161a51154bcad65'),(33,'ejemplo24@mail.com','Ejemplo Edu','51e794f4d9709b0ee4eb4061f6c183a536c36a80','2e6a31ee95ebc191e9f02849f338edd4205c9d68');
/*!40000 ALTER TABLE `managers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `users` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `email` varchar(255) NOT NULL,
--   `name` varchar(255) NOT NULL,
--   `createdAt` datetime NOT NULL,
--   `updatedAt` datetime NOT NULL,
--   `bookingId` int(11) DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `email` (`email`),
--   KEY `bookingId` (`bookingId`),
--   CONSTRAINT `users_ibfk_1` FOREIGN KEY (`bookingId`) REFERENCES `bookings` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;