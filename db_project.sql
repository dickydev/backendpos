-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 04, 2024 at 03:36 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `kodeCust` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `uuid`, `kodeCust`, `nama`, `createdAt`, `updatedAt`) VALUES
(9, 'd8c33243-ddd7-4af3-8923-ac2e07e18443', 'CS001', 'Dicky', '2024-03-07 03:07:53', '2024-03-07 03:07:53');

-- --------------------------------------------------------

--
-- Table structure for table `detailinvoice`
--

CREATE TABLE `detailinvoice` (
  `detailInvoice_id` int(11) NOT NULL,
  `invoice_id` int(11) DEFAULT NULL,
  `kodeProduct` varchar(255) DEFAULT NULL,
  `jumlah` int(11) DEFAULT NULL,
  `harga` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detailinvoice`
--

INSERT INTO `detailinvoice` (`detailInvoice_id`, `invoice_id`, `kodeProduct`, `jumlah`, `harga`) VALUES
(1, 1, 'KD001', 12, 120.12);

-- --------------------------------------------------------

--
-- Table structure for table `detailorders`
--

CREATE TABLE `detailorders` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `idOrder` int(11) NOT NULL,
  `kodeProduct` varchar(255) NOT NULL,
  `namaProduct` varchar(255) NOT NULL,
  `jumlahProduct` int(11) NOT NULL,
  `hargaSatuan` float NOT NULL,
  `totalHarga` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detailorders`
--

INSERT INTO `detailorders` (`uuid`, `idOrder`, `kodeProduct`, `namaProduct`, `jumlahProduct`, `hargaSatuan`, `totalHarga`, `createdAt`, `updatedAt`) VALUES
('39fbb865-6e8d-41a2-9680-72559a4d370c', 12, 'KD001', 'Baju', 12, 12, 12, '2024-05-18 11:32:36', '2024-05-18 11:32:36'),
('9cd0c8af-f035-40be-9212-efe89f1321f5', 11, 'KD001', 'Baju', 12, 12, 12, '2024-05-06 11:51:54', '2024-05-06 11:51:54'),
('bd526b1c-b002-4864-bbd5-952e9a370fc8', 12, 'KD002', 'Celana', 12, 12, 12, '2024-05-18 11:32:36', '2024-05-18 11:32:36');

-- --------------------------------------------------------

--
-- Table structure for table `detailsuratjalans`
--

CREATE TABLE `detailsuratjalans` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `idSuratJalan` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `kodeProduct` varchar(255) NOT NULL,
  `namaProduct` varchar(255) NOT NULL,
  `jumlahProduct` int(11) NOT NULL,
  `hargaSatuan` decimal(10,2) NOT NULL,
  `totalHarga` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detailsuratjalans`
--

INSERT INTO `detailsuratjalans` (`uuid`, `idSuratJalan`, `kodeProduct`, `namaProduct`, `jumlahProduct`, `hargaSatuan`, `totalHarga`, `createdAt`, `updatedAt`) VALUES
('6c08da5c-5a79-4bc5-be65-27736b1895d3', '90702750-74a7-4ba8-964c-43d6d027c02f', 'KD001', 'Baju', 1212, 1212.00, 1468944, '2024-04-28 13:51:28', '2024-04-28 13:51:28'),
('834e6ac5-d5aa-444f-a7be-91df7532bd53', '92fbcbb4-473d-4dbb-81f1-e0092fe072a7', 'KD002', 'Celana', 10, 200.00, 2000, '2024-04-30 03:30:36', '2024-04-30 03:30:36'),
('86f2d1cf-6a33-4e04-9148-ddad442e8f23', '92fbcbb4-473d-4dbb-81f1-e0092fe072a7', 'KD001', 'Baju', 12, 100.00, 1200, '2024-04-30 03:30:36', '2024-04-30 03:30:36');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `namaCust` varchar(255) NOT NULL,
  `noInvoice` varchar(255) NOT NULL,
  `tglInvoice` datetime NOT NULL,
  `noSJ` varchar(255) NOT NULL,
  `noKTP` varchar(255) NOT NULL,
  `tglSJ` varchar(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `suratjalan_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `uuid`, `namaCust`, `noInvoice`, `tglInvoice`, `noSJ`, `noKTP`, `tglSJ`, `keterangan`, `createdAt`, `updatedAt`, `orderId`, `suratjalan_id`) VALUES
(1, 'eaff4f1d-ed34-4f55-aa7e-fe59a0bfdccb', 'Dicky', 'IN001', '2023-12-11 17:00:00', 'SJ001', '1212121212121', '2024-03-13', 'Good', '2024-03-05 04:06:23', '2024-03-13 01:29:03', NULL, NULL),
(2, '710d58f4-5c20-4886-b92f-43c3f775a99e', 'DUDU', 'IN002', '2024-03-06 00:00:00', 'SJ003', '1123123', '2024-03-06', 'AKLSDLA', '2024-03-05 18:52:25', '2024-03-05 18:52:25', NULL, NULL),
(3, '1d79f642-6f80-44ea-89c6-6e0cdf7fedac', 'Dicky', 'INV003', '2024-03-08 00:00:00', 'SJ001', '12131231', '2024-03-08', 'oke', '2024-03-08 15:40:44', '2024-03-08 15:40:44', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `tglOrder` datetime NOT NULL,
  `noOrder` varchar(255) NOT NULL,
  `kodeAgen` varchar(255) NOT NULL,
  `namaAgen` varchar(255) NOT NULL,
  `tglKirim` datetime NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `pembayaran` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `uuid`, `tglOrder`, `noOrder`, `kodeAgen`, `namaAgen`, `tglKirim`, `keterangan`, `pembayaran`, `createdAt`, `updatedAt`, `customerId`) VALUES
(1, '31a8154d-33fa-46de-a15d-2bb23ed86adb', '2024-05-04 00:00:00', 'ORD001', 'CS001', 'Dicky', '2024-05-31 00:00:00', 'OKE', 'cash', '2024-05-04 14:47:17', '2024-05-04 14:47:17', NULL),
(2, '2eb84deb-fa98-4c62-84fb-2f0002fa5ab9', '2024-05-04 00:00:00', 'ORD002', 'CS001', 'Dicky', '2024-05-04 00:00:00', 'OKEOKEOKE', 'cash', '2024-05-04 14:48:22', '2024-05-04 14:48:22', NULL),
(3, '7ec25fe1-a986-49f0-b329-744ef731af5b', '2024-05-04 00:00:00', 'ORD003', 'CS001', 'Dicky', '2024-05-29 00:00:00', 'OKEOKEOKE', 'cash', '2024-05-04 14:48:55', '2024-05-04 14:48:55', NULL),
(4, 'a88ad01f-ca5e-4181-abf9-5059eedad81c', '2024-05-06 00:00:00', 'ORD004', 'CS001', 'Dicky', '2024-05-06 00:00:00', 'okeoke', 'cash', '2024-05-06 01:45:24', '2024-05-06 01:45:24', NULL),
(5, 'c87cc8b1-6cdd-4e90-8355-11507723921a', '2024-05-06 00:00:00', 'ORD005', 'CS001', 'Dicky', '2024-05-06 00:00:00', 'okeoke', 'cash', '2024-05-06 01:47:30', '2024-05-06 01:47:30', NULL),
(7, 'b150c8e6-12cb-4732-b388-3583a4288ef4', '2024-05-06 00:00:00', 'ORD007', 'CS001', 'Dicky', '2024-05-07 00:00:00', 'okeoke', 'cash', '2024-05-06 04:03:47', '2024-05-06 04:03:47', NULL),
(8, '88cc72be-e88f-46c0-87c6-b46a1677fafe', '2024-05-06 00:00:00', 'ORD008', 'CS001', 'Dicky', '2024-05-07 00:00:00', 'okeoke', 'cash', '2024-05-06 04:08:13', '2024-05-06 04:08:13', NULL),
(9, 'a660edf8-c2d0-4260-9328-264b9d6c73eb', '2024-05-06 00:00:00', 'ORD009', 'CS001', 'Dicky', '2024-05-07 00:00:00', 'okeoke', 'cash', '2024-05-06 04:15:54', '2024-05-06 04:15:54', NULL),
(10, '2aef59dd-d145-4f68-84fd-29a064476dcc', '2024-05-06 00:00:00', 'ORD010', 'CS001', 'Dicky', '2024-05-07 00:00:00', 'okeoke', 'cash', '2024-05-06 04:17:17', '2024-05-06 04:17:17', NULL),
(11, 'fdef77d5-661c-4166-8072-0e377e1128cd', '2024-05-06 00:00:00', 'ORD011', 'CS001', 'Dicky', '2024-05-06 00:00:00', 'OKEOKE\n', 'cash', '2024-05-06 11:51:54', '2024-05-06 11:51:54', NULL),
(12, 'bff3bfd5-3b79-4576-8e72-cd164a4bf6c3', '2024-05-18 00:00:00', 'ORD012', 'CS001', 'Dicky', '2024-06-08 00:00:00', 'GOOD BANGET', 'cash', '2024-05-18 11:32:36', '2024-05-18 11:32:36', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `kodeProduct` varchar(255) NOT NULL,
  `namaProduct` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `uuid`, `kodeProduct`, `namaProduct`, `harga`, `jumlah`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '94888f53-c373-4f93-a9c2-413954b50466', 'KD001', 'Baju', 12, 12, 4, '2024-04-02 05:19:11', '2024-04-02 05:19:11'),
(2, '37e120ac-88ae-4408-8bc8-797ed86b19d7', 'KD002', 'Celana', 122, 122, 4, '2024-04-02 05:22:50', '2024-04-02 05:22:50');

-- --------------------------------------------------------

--
-- Table structure for table `Sessions`
--

CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Sessions`
--

INSERT INTO `Sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('1JYRMPQofQK7OURvS3iTWHa20bTN2jl1', '2024-08-05 01:24:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-08-04 01:24:55', '2024-08-04 01:24:55'),
('2yyuaVxwqegZGOstpyIZRJv3aCRtqbv2', '2024-08-05 01:26:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-08-04 01:26:16', '2024-08-04 01:26:16'),
('3lN1gzB-GiSNr0KCEP5byexHV-0oc7Gg', '2024-08-05 01:24:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-08-04 01:24:05', '2024-08-04 01:24:05'),
('asauOAjHODMn0ti9qNDhKLD7o_VWWFZe', '2024-08-05 01:23:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-08-04 01:23:51', '2024-08-04 01:23:51'),
('CQC_9k-3I0vzZh9IX-Cl4oEUKVVcDCHE', '2024-08-05 01:26:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"53e8d18a-d6d8-485e-ba08-94c1b52d28cd\"}', '2024-08-04 01:24:55', '2024-08-04 01:26:36'),
('eugafvcJ7-hN9MgL6t-FRADYzpyb0mpP', '2024-08-05 01:24:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-08-04 01:24:14', '2024-08-04 01:24:14'),
('itZRIjh_Ovh-m2SezA3knMwLRlcOG7gR', '2024-08-05 01:22:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-08-04 01:22:10', '2024-08-04 01:22:10'),
('ow8ZzZVW8z7FwIZeu5EzEPGo5xb9q8Eo', '2024-05-23 03:10:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"0a6e8bbe-1711-45ec-9693-a3208c508d8c\"}', '2024-05-20 09:12:53', '2024-05-22 03:10:01'),
('pZuCDH1oL8GssCW4m2bbok0qmLNEEdwA', '2024-08-05 01:24:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-08-04 01:22:10', '2024-08-04 01:24:30'),
('V-o99-otUkBnPj2QYYxFAcymhnxwHLyt', '2024-08-05 01:24:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-08-04 01:24:29', '2024-08-04 01:24:29'),
('vXCQW2YaILcN-va3dVAXOddtF0zgLwZ_', '2024-08-05 01:23:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-08-04 01:23:46', '2024-08-04 01:23:46');

-- --------------------------------------------------------

--
-- Table structure for table `suratjalans`
--

CREATE TABLE `suratjalans` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tanggal` datetime NOT NULL,
  `noSuratJalan` varchar(255) NOT NULL,
  `noMobil` varchar(255) NOT NULL,
  `namaSopir` varchar(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `orderId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `suratjalans`
--

INSERT INTO `suratjalans` (`uuid`, `tanggal`, `noSuratJalan`, `noMobil`, `namaSopir`, `keterangan`, `createdAt`, `updatedAt`, `orderId`) VALUES
('90702750-74a7-4ba8-964c-43d6d027c02f', '2024-04-28 00:00:00', 'SJ001', 'OKEOKE', 'OKEOKE', 'EOKEOKE', '2024-04-28 13:51:28', '2024-04-28 13:51:28', 1),
('92fbcbb4-473d-4dbb-81f1-e0092fe072a7', '2024-04-30 00:00:00', 'SJ002', '12AKA12', 'Dicky', 'Good', '2024-04-30 03:30:36', '2024-04-30 03:30:36', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '53e8d18a-d6d8-485e-ba08-94c1b52d28cd', 'dicky', 'dicky@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$6VoTtyiAEEoa/xwgRful/w$pZYQyPyO3OhU6tD509clm6LQha47K4sXI6jqTs5IE6s', 'admin', '2024-02-25 02:25:21', '2024-02-25 02:25:21'),
(2, '2a287913-4b59-4063-a6de-ccfd2bae64a4', 'fernando', 'fernando@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$rDTMYmof4Z9QrCQ2hmH5ig$7v5Rnvd8mpz8waGioeYh6hN/sEvDF1Isb9LANlA5UAQ', 'user', '2024-02-25 02:35:24', '2024-02-25 02:35:24'),
(3, '0a6e8bbe-1711-45ec-9693-a3208c508d8c', 'nasya', 'nasya@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$2adVpnR+KhaCD9X7Oi1qwg$5Jo9i+LP79j4yQfkROesD/ZRfMYGYofHcVIxtqTjocw', 'marketing', '2024-02-29 00:49:22', '2024-02-29 00:49:22'),
(4, 'be78178f-e2ba-4d4b-a39c-a2c8a5ddfbec', 'zahra', 'zahra@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$/JrVHFyy64y/p8X5WqD5iw$CoNDe7gojUQaG9Q/lPuZ5i0/Wr8fzkRecxx10riRolU', 'produksi', '2024-02-29 00:49:44', '2024-02-29 00:49:44'),
(5, 'e650a727-cfcf-43e8-9619-df58100931b0', 'ucup', 'ucup@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$PBAwlirJhaT+xiu1n3HPRw$UzefpWfTIshEsm2wUaEkyyXGwOJX6WAfVSzjHiIYE9Q', 'master', '2024-02-29 00:50:11', '2024-02-29 00:50:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detailinvoice`
--
ALTER TABLE `detailinvoice`
  ADD PRIMARY KEY (`detailInvoice_id`),
  ADD KEY `invoice_id` (`invoice_id`);

--
-- Indexes for table `detailorders`
--
ALTER TABLE `detailorders`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `idOrder` (`idOrder`);

--
-- Indexes for table `detailsuratjalans`
--
ALTER TABLE `detailsuratjalans`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `idSuratJalan` (`idSuratJalan`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `fk_suratjalan_id` (`suratjalan_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerId` (`customerId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Sessions`
--
ALTER TABLE `Sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `suratjalans`
--
ALTER TABLE `suratjalans`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `orderId` (`orderId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `detailinvoice`
--
ALTER TABLE `detailinvoice`
  MODIFY `detailInvoice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detailinvoice`
--
ALTER TABLE `detailinvoice`
  ADD CONSTRAINT `detailinvoice_ibfk_1` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`);

--
-- Constraints for table `detailorders`
--
ALTER TABLE `detailorders`
  ADD CONSTRAINT `detailorders_ibfk_1` FOREIGN KEY (`idOrder`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detailsuratjalans`
--
ALTER TABLE `detailsuratjalans`
  ADD CONSTRAINT `detailsuratjalans_ibfk_1` FOREIGN KEY (`idSuratJalan`) REFERENCES `suratjalans` (`uuid`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `fk_suratjalan_id` FOREIGN KEY (`suratjalan_id`) REFERENCES `suratjalans` (`uuid`),
  ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `suratjalans`
--
ALTER TABLE `suratjalans`
  ADD CONSTRAINT `suratjalans_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
