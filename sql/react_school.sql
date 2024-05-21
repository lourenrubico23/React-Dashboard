-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2024 at 08:45 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_school`
--

-- --------------------------------------------------------

--
-- Table structure for table `react_school_staff`
--

CREATE TABLE `react_school_staff` (
  `staff_aid` int(11) NOT NULL,
  `staff_name` varchar(50) NOT NULL,
  `staff_age` int(11) NOT NULL,
  `staff_class` varchar(30) NOT NULL,
  `staff_is_active` tinyint(1) NOT NULL,
  `staff_gender` varchar(20) NOT NULL,
  `staff_email` varchar(60) NOT NULL,
  `staff_created` varchar(20) NOT NULL,
  `staff_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `react_school_staff`
--

INSERT INTO `react_school_staff` (`staff_aid`, `staff_name`, `staff_age`, `staff_class`, `staff_is_active`, `staff_gender`, `staff_email`, `staff_created`, `staff_datetime`) VALUES
(2, 'Louren', 23, 'English', 1, 'Female', 'louren@gmail.com', '2024-05-03 13:57:36', '2024-05-09 08:19:39'),
(4, 'Pashin', 22, 'Admin', 1, 'Female', 'pashin@gmail.com', '2024-05-06 07:39:00', '2024-05-06 07:39:00'),
(5, 'Nekols', 22, 'Sa puso ni Min', 1, 'Female', 'nekols@gmail.com', '2024-05-06 07:40:03', '2024-05-06 07:40:03'),
(6, 'Kitzie', 23, 'Finance', 1, '', 'kitzie@gmail.com', '2024-05-09 08:29:01', '2024-05-09 08:29:01');

-- --------------------------------------------------------

--
-- Table structure for table `react_school_student`
--

CREATE TABLE `react_school_student` (
  `student_aid` int(11) NOT NULL,
  `student_name` varchar(50) NOT NULL,
  `student_age` int(11) NOT NULL,
  `student_class` varchar(30) NOT NULL,
  `student_gender` varchar(20) NOT NULL,
  `student_email` varchar(60) NOT NULL,
  `student_is_active` tinyint(1) NOT NULL,
  `student_created` varchar(20) NOT NULL,
  `student_datetime` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `about` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `react_school_student`
--

INSERT INTO `react_school_student` (`student_aid`, `student_name`, `student_age`, `student_class`, `student_gender`, `student_email`, `student_is_active`, `student_created`, `student_datetime`, `address`, `about`) VALUES
(2, 'Luke', 7, 'math', 'Male', 'luke@gmail.com', 1, '2024-05-03 12:37:35', '2024-05-09 15:02:43', 'Brgy. Bulakin 1 Dolores,', 'Elementary Student'),
(11, 'sdsd', 10, 'math', 'Male', 'louren18@gmail.com', 1, '2024-05-09 07:01:29', '2024-05-09 14:58:43', '', ''),
(12, 'Isobel', 12, 'sdsd', 'Male', 'lourenisobel18@gmail.com', 1, '2024-05-09 07:07:02', '2024-05-09 11:03:06', '', ''),
(13, 'Ana', 26, 'Science', 'Female', 'ana@gmail.com', 1, '2024-05-09 07:50:39', '2024-05-09 11:02:56', '', ''),
(14, 'safddsf', 345, 'sdfdsfsdf', 'Female', 'dgdfg@dd', 1, '2024-05-09 10:41:55', '2024-05-09 15:07:28', '', ''),
(15, 'ghfgh', 34, 'fghfgh', 'Male', 'sdfsdfsd@df', 1, '2024-05-09 10:42:22', '2024-05-09 11:03:27', '', ''),
(16, 'sdsfsd', 23432, '324', 'Female', 'sfdgs@f', 1, '2024-05-09 10:42:58', '2024-05-09 11:03:33', '', ''),
(17, 'srtsr', 57, 'sdfdsdf', 'Male', 'ajhgj@gt', 1, '2024-05-09 10:43:08', '2024-05-09 11:03:38', '', ''),
(18, 'hgfhfg', 56, 'fhfgh', 'Female', 'sgfsdgdf@FGF', 1, '2024-05-09 10:43:25', '2024-05-09 11:03:44', '', ''),
(19, 'fgdfgd', 4567, 'dfgdfg', 'Male', 'jhjkhjk@h', 1, '2024-05-09 10:43:38', '2024-05-09 11:03:50', '', ''),
(20, 'sdfgg', 45, 'gdfgdfg89', 'Male', 'sdg@ki', 1, '2024-05-09 10:43:48', '2024-05-09 11:03:58', '', ''),
(21, 'dfgdfg', 565, 'dfgdfg', 'Female', 'dfgbgfc@fgh', 1, '2024-05-09 10:44:01', '2024-05-09 11:04:03', '', ''),
(22, 'sdsda', 34, 'sadasd', 'Male', 'sdgfsdg@ghgg', 1, '2024-05-09 10:53:37', '2024-05-09 11:04:08', '', ''),
(23, 'bebe', 45, 'sds', 'Male', 'sedfsdf@gfhg', 1, '2024-05-09 10:54:06', '2024-05-10 07:01:47', '', ''),
(24, 'momo', 34, 'sdsd', 'Female', 'sadfds@fgdfg', 0, '2024-05-09 10:55:43', '2024-05-09 15:30:58', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `react_school_teacher`
--

CREATE TABLE `react_school_teacher` (
  `teacher_aid` int(11) NOT NULL,
  `teacher_name` varchar(50) NOT NULL,
  `teacher_age` int(11) NOT NULL,
  `teacher_class` varchar(30) NOT NULL,
  `teacher_gender` varchar(20) NOT NULL,
  `teacher_email` varchar(60) NOT NULL,
  `teacher_is_active` tinyint(1) NOT NULL,
  `teacher_created` varchar(20) NOT NULL,
  `teacher_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `react_school_teacher`
--

INSERT INTO `react_school_teacher` (`teacher_aid`, `teacher_name`, `teacher_age`, `teacher_class`, `teacher_gender`, `teacher_email`, `teacher_is_active`, `teacher_created`, `teacher_datetime`) VALUES
(2, 'Malou', 45, 'Math', 'Female', 'malou@gmail.com', 0, '2024-05-03 13:46:34', '2024-05-06 07:09:38'),
(3, 'Jenny', 30, 'Math', 'Female', 'jenny@gmail.com', 1, '2024-05-03 15:17:20', '2024-05-09 07:58:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `react_school_staff`
--
ALTER TABLE `react_school_staff`
  ADD PRIMARY KEY (`staff_aid`);

--
-- Indexes for table `react_school_student`
--
ALTER TABLE `react_school_student`
  ADD PRIMARY KEY (`student_aid`);

--
-- Indexes for table `react_school_teacher`
--
ALTER TABLE `react_school_teacher`
  ADD PRIMARY KEY (`teacher_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `react_school_staff`
--
ALTER TABLE `react_school_staff`
  MODIFY `staff_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `react_school_student`
--
ALTER TABLE `react_school_student`
  MODIFY `student_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `react_school_teacher`
--
ALTER TABLE `react_school_teacher`
  MODIFY `teacher_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
