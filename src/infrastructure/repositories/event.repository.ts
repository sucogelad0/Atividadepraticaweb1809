import type { Session, Event, Registration, Attendee } from '@prisma/client';
import type {
  SessionFilters,
  SessionWithCount,
  RegistrationWithSession,
  CreateRegistration,
  UpdateRegistration
} from '../../shared/types.js';
import { prisma } from '../prisma/index.js';
import { AppError } from '../../shared/errors/AppError.js';

export class EventRepository {
  async findById(id: number): Promise<Event | null> {
    // TODO: implementar operação de persistência.
    throw new AppError(501, 'NOT_IMPLEMENTED', 'Operação ainda não implementada.');
  }

  async sessionsWithCounts(eventId: number): Promise<SessionWithCount[]> {
    // TODO: implementar operação de persistência.
    throw new AppError(501, 'NOT_IMPLEMENTED', 'Operação ainda não implementada.');
  }
}
