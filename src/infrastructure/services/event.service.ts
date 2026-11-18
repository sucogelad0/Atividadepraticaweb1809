import type { Occupancy } from '../../shared/types.js';
import { EventRepository } from '../repositories/event.repository.js';
import { AppError } from '../../shared/errors/AppError.js';

export class EventService {
  private repo = new EventRepository();

  async occupancy(eventId: number): Promise<Occupancy> {
    // TODO: implementar a funcionalidade e as regras de negócio aplicáveis.
    throw new AppError(
      501,
      'NOT_IMPLEMENTED',
      'Funcionalidade ainda não implementada.'
    );
  }
}
