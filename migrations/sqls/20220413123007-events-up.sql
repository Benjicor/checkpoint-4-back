CREATE TABLE `events` (
    `id` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    `title` VARCHAR(255)  NOT NULL ,
    `src` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `location` VARCHAR(255) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP() NOT NULL,
    `event_date` DATETIME NOT NULL,
    `description` text NOT NULL
);