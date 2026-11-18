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

export class RegistrationRepository {
  async findById(id: number): Promise<RegistrationWithSession | null> {
    // TODO: implementar operação de persistência.
    throw new AppError(501, 'NOT_IMPLEMENTED', 'Operação ainda não implementada.');
  }

  async findAttendee(id: number): Promise<Attendee | null> {
    // TODO: implementar operação de persistência.
    throw new AppError(501, 'NOT_IMPLEMENTED', 'Operação ainda não implementada.');
  }

  async findDuplicate(
    attendeeId: number,
    sessionId: number,
    excludeId?: number
  ): Promise<Registration | null> {
    // TODO: implementar operação de persistência.
    throw new AppError(501, 'NOT_IMPLEMENTED', 'Operação ainda não implementada.');
  }

  async countForSession(sessionId: number): Promise<number> {
    // TODO: implementar operação de persistência.
    throw new AppError(501, 'NOT_IMPLEMENTED', 'Operação ainda não implementada.');
  }

  async findConflict(
    attendeeId: number,
    startAt: Date,
    endAt: Date,
    excludeId?: number
  ): Promise<Registration | null> {
    // TODO: implementar operação de persistência.
    throw new AppError(501, 'NOT_IMPLEMENTED', 'Operação ainda não implementada.');
  }

  async create(data: CreateRegistration): Promise<Registration> {
    // TODO: implementar operação de persistência.
    throw new AppError(501, 'NOT_IMPLEMENTED', 'Operação ainda não implementada.');
  }

  async update(id: number, data: UpdateRegistration): Promise<Registration> {
    // TODO: implementar operação de persistência.
    throw new AppError(501, 'NOT_IMPLEMENTED', 'Operação ainda não implementada.');
  }

  async delete(id: number): Promise<void> {
    // TODO: implementar operação de persistência.
    throw new AppError(501, 'NOT_IMPLEMENTED', 'Operação ainda não implementada.');
  }
}
