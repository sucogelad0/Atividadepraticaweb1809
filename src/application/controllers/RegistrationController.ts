import type { Request, Response } from 'express';
import { RegistrationService } from '../../infrastructure/services/registration.service.js';

export class RegistrationController {
  private service = new RegistrationService();

  create = async (req: Request, res: Response): Promise<void> => {
    // TODO: validar entrada, chamar o service e devolver a resposta HTTP.
    res.status(501).json({
      error: 'NOT_IMPLEMENTED',
      message: 'Endpoint ainda não implementado.'
    });
  };

  update = async (req: Request, res: Response): Promise<void> => {
    // TODO: validar entrada, chamar o service e devolver a resposta HTTP.
    res.status(501).json({
      error: 'NOT_IMPLEMENTED',
      message: 'Endpoint ainda não implementado.'
    });
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    // TODO: validar entrada, chamar o service e devolver a resposta HTTP.
    res.status(501).json({
      error: 'NOT_IMPLEMENTED',
      message: 'Endpoint ainda não implementado.'
    });
  };
}
