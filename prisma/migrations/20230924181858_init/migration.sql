/*
  Warnings:

  - You are about to drop the `moveset` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `movelist` to the `fighter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "moveset" DROP CONSTRAINT "moveset_fighterId_fkey";

-- AlterTable
ALTER TABLE "fighter" ADD COLUMN     "movelist" TEXT NOT NULL;

-- DropTable
DROP TABLE "moveset";
