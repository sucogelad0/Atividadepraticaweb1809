CREATE TYPE "SessionCategory" AS ENUM ('TALK', 'WORKSHOP', 'PANEL');

CREATE TYPE "SessionStatus" AS ENUM ('SCHEDULED', 'CANCELLED', 'FINISHED');

CREATE TABLE "Event" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  "startDate" TIMESTAMP(3) NOT NULL,
  "endDate" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Session" (
  "id" SERIAL NOT NULL,
  "title" TEXT NOT NULL,
  "category" "SessionCategory" NOT NULL,
  "status" "SessionStatus" NOT NULL DEFAULT 'SCHEDULED',
  "capacity" INTEGER,
  "startAt" TIMESTAMP(3) NOT NULL,
  "endAt" TIMESTAMP(3) NOT NULL,
  "eventId" INTEGER NOT NULL,
  CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Attendee" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  CONSTRAINT "Attendee_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Registration" (
  "id" SERIAL NOT NULL,
  "attendeeId" INTEGER NOT NULL,
  "sessionId" INTEGER NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Attendee_email_key" ON "Attendee"("email");

CREATE INDEX "Session_eventId_idx" ON "Session"("eventId");

CREATE INDEX "Registration_sessionId_idx" ON "Registration"("sessionId");

ALTER TABLE "Session"
  ADD CONSTRAINT "Session_eventId_fkey"
  FOREIGN KEY ("eventId")
  REFERENCES "Event"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Registration"
  ADD CONSTRAINT "Registration_attendeeId_fkey"
  FOREIGN KEY ("attendeeId")
  REFERENCES "Attendee"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Registration"
  ADD CONSTRAINT "Registration_sessionId_fkey"
  FOREIGN KEY ("sessionId")
  REFERENCES "Session"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;
