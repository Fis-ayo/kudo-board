/*
  Warnings:

  - Added the required column `GIF_URL` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "GIF_URL" TEXT NOT NULL;
