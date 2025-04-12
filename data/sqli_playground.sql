/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `songs`;
CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `artist` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_key` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `songs` (`id`, `title`, `artist`) VALUES
(1, 'everything u are', 'Hindia');
INSERT INTO `songs` (`id`, `title`, `artist`) VALUES
(2, 'VITAMIN U', 'Paul Partohap');
INSERT INTO `songs` (`id`, `title`, `artist`) VALUES
(3, 'Car\'s Outside', 'James Arthur');
INSERT INTO `songs` (`id`, `title`, `artist`) VALUES
(4, 'End of All', 'Aimer'),
(5, 'Bunga Maaf', 'The Lantis'),
(6, 'It Was A Good Day', 'Ice Cube'),
(7, 'Sentimental Crisis', 'Halca'),
(8, 'Nina', '.Feast'),
(9, 'Mata ke Hati', 'HIVI!'),
(10, 'Sparkle', 'Radwimps');

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin#123');
INSERT INTO `users` (`id`, `username`, `password`) VALUES
(2, 'daffainfo', 'mentorrr');
INSERT INTO `users` (`id`, `username`, `password`) VALUES
(3, 'mirai', 'lovelysialovelove');
INSERT INTO `users` (`id`, `username`, `password`) VALUES
(4, 'rootkids', 'gwjagoweb'),
(5, 'hygge', 'icantdocryptochallenges'),
(6, 'pujoganteng', 'foren>>beken'),
(7, 'kiseki', 'gwwebgod'),
(8, 'jjcho', 'kos0ngjrreal');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;