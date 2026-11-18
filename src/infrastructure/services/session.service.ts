import type { Session } from '@prisma/client';
import type { SessionFilters } from '../../shared/types.js';
import { SessionRepository } from '../repositories/session.repository.js';
import { AppError } from '../../shared/errors/AppError.js';

export class SessionService {
  private repo = new SessionRepository();

  async list(filters: SessionFilters): Promise<Session[]> {
    // TODO: implementar a funcionalidade e as regras de negócio aplicáveis.
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Funcionalidade ainda não implementada.'
    );
  }
}
