-- DropIndex
DROP INDEX `Product_category_id_fkey` ON `product`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `image` VARCHAR(191) NULL DEFAULT 'url_default',
    ADD COLUMN `newField` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
