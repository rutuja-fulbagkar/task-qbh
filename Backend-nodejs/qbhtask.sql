-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2024 at 08:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qbhtask`
--

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `phnno` varchar(20) NOT NULL,
  `address` varchar(225) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `name`, `email`, `phnno`, `address`, `createdAt`, `updatedAt`) VALUES
(2, 'rani uble', 'rani@gmail.com', '1234567892', 'pune', '2024-05-28 17:40:06', '2024-05-28 17:40:06'),
(3, 'John Doe', 'john.doe@example.com', '1234567890', '123 Main St', '2024-05-28 17:40:06', '2024-05-28 17:40:06'),
(12, 'vidya', 'v@gmail.com', '7387303890', 'pune-nagar', '2024-05-28 17:40:06', '2024-05-28 17:51:20'),
(13, 'testingpdf', 'pdf@gmail.com', '2147483647', 'pune', '2024-05-28 17:40:06', '2024-05-28 17:40:06'),
(14, 'rutuja fulbagkar', 'r@gmail.com', '2147483647', 'punesd', '2024-05-28 17:40:06', '2024-05-28 17:40:06'),
(17, 'ujjwala', 'u@gmail.com', '2147483647', 'xyz', '2024-05-28 17:41:51', '2024-05-28 17:41:51'),
(18, 'test', 'test@gmail.com', '2345678787', 'pune', '2024-05-28 17:50:03', '2024-05-28 17:50:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
