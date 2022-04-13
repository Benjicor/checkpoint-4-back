CREATE TABLE `news` (
    `id` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    `title` VARCHAR(255)  NOT NULL ,
    `src` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP() NOT NULL,
    `description` text NOT NULL
);