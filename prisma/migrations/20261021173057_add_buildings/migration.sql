-- CreateEnum
CREATE TYPE "Role" AS ENUM ('student', 'admin');

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "buildingId" INTEGER;

-- CreateTable
CREATE TABLE "Building" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Building_code_key" ON "Building"("code");

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE SET NULL ON UPDATE CASCADE;
