-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema esportsdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `esportsdb` ;

-- -----------------------------------------------------
-- Schema esportsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `esportsdb` DEFAULT CHARACTER SET utf8 ;
USE `esportsdb` ;

-- -----------------------------------------------------
-- Table `esports_team`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `esports_team` ;

CREATE TABLE IF NOT EXISTS `esports_team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `team_name` VARCHAR(100) NULL,
  `create_date` DATETIME NULL,
  `last_update` DATETIME NULL,
  `last_game_played` DATETIME NULL,
  `disband_date` DATE NULL,
  `matches_played` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS esportscoach@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'esportscoach'@'localhost' IDENTIFIED BY 'esportscoach';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'esportscoach'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `esports_team`
-- -----------------------------------------------------
START TRANSACTION;
USE `esportsdb`;
INSERT INTO `esports_team` (`id`, `team_name`, `create_date`, `last_update`, `last_game_played`, `disband_date`, `matches_played`) VALUES (1, 'SKT T1 Telecom', NULL, NULL, '2016-06-07', '2018-01-01', 468);
INSERT INTO `esports_team` (`id`, `team_name`, `create_date`, `last_update`, `last_game_played`, `disband_date`, `matches_played`) VALUES (DEFAULT, 'TSM', NULL, NULL, '2023-10-12', '2023-11-11', 800);
INSERT INTO `esports_team` (`id`, `team_name`, `create_date`, `last_update`, `last_game_played`, `disband_date`, `matches_played`) VALUES (DEFAULT, 'C9', NULL, NULL, '2023-09-26', '2023-12-12', 648);
INSERT INTO `esports_team` (`id`, `team_name`, `create_date`, `last_update`, `last_game_played`, `disband_date`, `matches_played`) VALUES (DEFAULT, 'IMT', NULL, NULL, '2023-06-10', '2023-09-09', 543);
INSERT INTO `esports_team` (`id`, `team_name`, `create_date`, `last_update`, `last_game_played`, `disband_date`, `matches_played`) VALUES (DEFAULT, 'FLY', NULL, NULL, '2023-05-24', '2023-12-28', 632);

COMMIT;

