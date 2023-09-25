/*
  Warnings:

  - You are about to drop the column `userId` on the `fighter` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "fighter" DROP CONSTRAINT "fighter_userId_fkey";

-- AlterTable
ALTER TABLE "fighter" DROP COLUMN "userId";

-- DropTable
DROP TABLE "user";
