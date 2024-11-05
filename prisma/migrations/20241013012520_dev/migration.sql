/*
  Warnings:

  - Added the required column `valueLabel` to the `Habit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueLabelPlr` to the `Habit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `HabitEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "valueLabel" TEXT NOT NULL,
ADD COLUMN     "valueLabelPlr" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "HabitEntry" ADD COLUMN     "notes" TEXT NOT NULL;
