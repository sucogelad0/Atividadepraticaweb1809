import type { SessionCategory, SessionStatus, Prisma } from '@prisma/client';

export type SessionFilters = {
  eventId?: number;
  category?: SessionCategory;
  status?: SessionStatus;
  title?: string;
};

export type CreateRegistration = {
  attendeeId: number;
  sessionId: number;
};

export type UpdateRegistration = {
  sessionId: number;
};

export type SessionWithCount = Prisma.SessionGetPayload<{
  include: {
    _count: {
      select: {
        registrations: true;
      };
    };
  };
}>;

export type RegistrationWithSession = Prisma.RegistrationGetPayload<{
  include: {
    session: true;
  };
}>;

export type Occupancy = {
  eventId: number;
  eventName: string;
  totalSessions: number;
  totalRegistrations: number;
  totalCapacity: number;
  overallOccupancyPercentage: number;
  sessions: {
    sessionId: number;
    title: string;
    capacity: number;
    registered: number;
    available: number;
    occupancyPercentage: number;
  }[];
};
