import type { Registration, Session } from '@prisma/client';
import type { CreateRegistration, UpdateRegistration } from '../../shared/types.js';
import { RegistrationRepository } from '../repositories/registration.repository.js';
import { SessionRepository } from '../repositories/session.repository.js';
import { AppError } from '../../shared/errors/AppError.js';

export class RegistrationService {
  private repo = new RegistrationRepository();

  async create(data: CreateRegistration): Promise<Registration> {
    // TODO: implementar a funcionalidade e as regras de negócio aplicáveis.
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Funcionalidade ainda não implementada.'
    );
  }

  async update(id: number, data: UpdateRegistration): Promise<Registration> {
    // TODO: implementar a funcionalidade e as regras de negócio aplicáveis.
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Funcionalidade ainda não implementada.'
    );
  }

  async delete(id: number): Promise<void> {
    // TODO: implementar a funcionalidade e as regras de negócio aplicáveis.
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Funcionalidade ainda não implementada.'
    );
  }
}
