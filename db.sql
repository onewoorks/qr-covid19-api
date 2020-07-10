

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table attendance
# ------------------------------------------------------------

DROP TABLE IF EXISTS `attendance`;

CREATE TABLE `attendance` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `datetime` datetime DEFAULT NULL,
  `attendee_payloads` json DEFAULT NULL,
  `cawangan` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table premise
# ------------------------------------------------------------

DROP TABLE IF EXISTS `premise`;

CREATE TABLE `premise` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `nama_cawangan` varchar(100) DEFAULT NULL,
  `alamat` text,
  `no_telefon` varchar(50) DEFAULT NULL,
  `uuid` varchar(100) DEFAULT NULL,
  `image` text,
  `cawangan_induk` varchar(100) DEFAULT '',
  `maklumat_tambahan` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `premise` (`id`, `datetime`, `nama_cawangan`, `alamat`, `no_telefon`, `uuid`, `image`, `cawangan_induk`, `maklumat_tambahan`)
VALUES
	(1, '2020-05-31 04:02:51', 'TUKANG EMAS', 'TukangemaS™\n349 G, Jalan Temenggung,\nBandar Kota Bharu,\n15000 Kota Bharu,\nKelantan', '013 900 0000', 'ff1afb43-c1e7-42e2-b215-9ac3806ba5c1', 'https://tukangemas.my/image/catalog/_store/logo.png', 'TukangEmas', NULL);




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
