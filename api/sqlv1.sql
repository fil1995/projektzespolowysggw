-- phpMyAdmin SQL Dump
-- version 3.5.5
-- http://www.phpmyadmin.net
--
-- Host: serwer1642850.home.pl
-- Czas wygenerowania: 15 Mar 2017, 21:23
-- Wersja serwera: 5.5.54-38.6-log
-- Wersja PHP: 5.3.28

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Baza danych: `20303841_sggw1`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE IF NOT EXISTS `uzytkownicy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nick` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `haslo` char(64) NOT NULL,
  `stan_konta` float NOT NULL DEFAULT '0',
  `ostatnie_logowanie` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `aktywny` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nick` (`nick`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
