-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Lug 30, 2022 alle 20:34
-- Versione del server: 10.1.38-MariaDB
-- Versione PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elogbooktest`
--
CREATE DATABASE IF NOT EXISTS `elogbooktest` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
USE `elogbooktest`;

-- --------------------------------------------------------

--
-- Struttura della tabella `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `job_id` int(11) NOT NULL,
  `summary` varchar(150) COLLATE utf8mb4_bin DEFAULT NULL,
  `description` varchar(500) COLLATE utf8mb4_bin DEFAULT NULL,
  `status` enum('open','in progress','completed','cancelled') COLLATE utf8mb4_bin NOT NULL DEFAULT 'open',
  `property` int(11) NOT NULL,
  `raised_by` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dump dei dati per la tabella `jobs`
--

INSERT INTO `jobs` (`job_id`, `summary`, `description`, `status`, `property`, `raised_by`) VALUES
(22, 'Drain Sprinkler System', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in nulla tincidunt purus tristique vulputate sed et massa. Quisque mauris justo, congue ultrices elementum ut, rutrum id dolor.', 'cancelled', 19, 'Joshua'),
(23, 'Inspect drains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in nulla tincidunt purus tristique vulputate sed et massa. Quisque mauris justo, congue ultrices elementum ut, rutrum id dolor.', 'open', 11, 'Joshua'),
(24, 'Monthly Residential Cleaning', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in nulla tincidunt purus tristique vulputate sed et massa.', 'completed', 15, 'Joshua'),
(25, 'Inspect drains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in nulla tincidunt purus tristique vulputate sed et massa. Quisque mauris justo, congue ultrices elementum ut, rutrum id dolor.', 'cancelled', 18, 'Joshua');

-- --------------------------------------------------------

--
-- Struttura della tabella `properties`
--

DROP TABLE IF EXISTS `properties`;
CREATE TABLE `properties` (
  `property_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dump dei dati per la tabella `properties`
--

INSERT INTO `properties` (`property_id`, `name`) VALUES
(8, 'Bristol'),
(11, 'Oxford'),
(14, 'Liverpool'),
(15, 'Portsmouth\r\n'),
(18, 'Wells\r\n'),
(19, 'Nottingham');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`job_id`),
  ADD KEY `property` (`property`);

--
-- Indici per le tabelle `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`property_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `jobs`
--
ALTER TABLE `jobs`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT per la tabella `properties`
--
ALTER TABLE `properties`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`property`) REFERENCES `properties` (`property_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
