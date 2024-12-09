/*
  Warnings:

  - You are about to drop the `Stuff` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ParticipantType" AS ENUM ('TOOK', 'TAKING');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Default Name',
ALTER COLUMN "role" DROP DEFAULT;

-- DropTable
DROP TABLE "Stuff";

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "sessionName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "applicableClass" TEXT NOT NULL,
    "sessionHostId" INTEGER NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "participantType" "ParticipantType" NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_sessionHostId_fkey" FOREIGN KEY ("sessionHostId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
