import type { Request, Response } from 'express';
import { SessionService } from '../../infrastructure/services/session.service.js';

export class SessionController {
  private service = new SessionService();

  list = async (req: Request, res: Response): Promise<void> => {
    // TODO: validar entrada, chamar o service e devolver a resposta HTTP.
    res.status(501).json({
      error: 'NOT_IMPLEMENTED',
      message: 'Endpoint ainda não implementado.'
    });
  };
}
