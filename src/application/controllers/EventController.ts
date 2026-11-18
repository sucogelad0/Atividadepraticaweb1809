import type { Request, Response } from 'express';
import { EventService } from '../../infrastructure/services/event.service.js';

export class EventController {
  private service = new EventService();

  occupancy = async (req: Request, res: Response): Promise<void> => {
    // TODO: validar entrada, chamar o service e devolver a resposta HTTP.
    res.status(501).json({
      error: 'NOT_IMPLEMENTED',
      message: 'Endpoint ainda não implementado.'
    });
  };
}
