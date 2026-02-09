/*
  Warnings:

  - Added the required column `social_media` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "social_media" TEXT NOT NULL;
