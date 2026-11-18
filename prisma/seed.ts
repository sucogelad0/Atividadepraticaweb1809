import 'dotenv/config';
import { PrismaClient, SessionCategory, SessionStatus } from '@prisma/client';

const prisma = new PrismaClient();

// Calendário local de Recife (UTC-03), sem depender do fuso da máquina.
const day = (offset: number) => {
  const local = new Date(Date.now() - 3 * 3600000);
  local.setUTCDate(local.getUTCDate() + offset);
  return local.toISOString().slice(0, 10);
};

const at = (offset: number, hour: number, minute = 0): Date => {
  const date = day(offset);
  const hours = String(hour).padStart(2, '0');
  const minutes = String(minute).padStart(2, '0');

  return new Date(`${date}T${hours}:${minutes}:00-03:00`);
};

async function main() {
  // Exclusivo para banco local de treinamento. Apaga dados anteriores.
  await prisma.$executeRawUnsafe(
    'TRUNCATE TABLE "Registration", "Session", "Attendee", "Event" ' +
      'RESTART IDENTITY CASCADE'
  );
  for (const [name, from, to] of [
    ['Tech Experience', -2, 3],
    ['Dev Summit', 1, 4],
    ['Evento sem sessões', 1, 2]
  ] as const) {
    await prisma.event.create({
      data: {
        name,
        startDate: at(from, 8),
        endDate: at(to, 22)
      }
    });
  }

  const names = [
    'Ana',
    'Bruno',
    'Carla',
    'Diego',
    'Elisa',
    'Felipe',
    'Gabriela',
    'Hugo',
    'Isabel',
    'João',
    'Karen',
    'Lucas',
    'Marina',
    'Nina',
    'Otávio'
  ];
  for (let i = 0; i < names.length; i++) {
    await prisma.attendee.create({
      data: {
        name: names[i],
        email: `aluno${i + 1}@example.test`
      }
    });
  }

  const sessions: [
    string,
    number,
    SessionCategory,
    SessionStatus,
    number,
    number,
    number,
    number
  ][] = [
    ['APIs REST', 1, 'WORKSHOP', 'SCHEDULED', 20, 1, 9, 11],
    ['IA Generativa', 1, 'TALK', 'SCHEDULED', 2, 1, 10, 12],
    ['Testes de API', 1, 'WORKSHOP', 'SCHEDULED', 10, 1, 11, 13],
    ['Segurança Web', 1, 'PANEL', 'CANCELLED', 30, 1, 14, 15],
    ['História da Web', 1, 'TALK', 'FINISHED', 25, -1, 9, 10],
    ['TypeScript', 1, 'WORKSHOP', 'SCHEDULED', 12, 1, 14, 16],
    ['Dados abertos', 1, 'TALK', 'SCHEDULED', 10, 2, 9, 10],
    ['Design de APIs', 2, 'TALK', 'SCHEDULED', 15, 1, 9, 10],
    ['Observabilidade', 2, 'WORKSHOP', 'SCHEDULED', 15, 2, 10, 12],
    ['Arquitetura', 2, 'PANEL', 'SCHEDULED', 20, 2, 14, 15],
    ['Node.js', 2, 'WORKSHOP', 'SCHEDULED', 15, 3, 9, 11],
    ['Prisma', 2, 'TALK', 'SCHEDULED', 20, 3, 13, 14],
  ];
  for (const [title, eventId, category, status, capacity, d, a, b] of sessions) {
    await prisma.session.create({
      data: {
        title,
        eventId,
        category,
        status,
        capacity,
        startAt: at(d, a),
        endAt: at(d, b)
      }
    });
  }

  const pairs: [number, number][] = [
    [1, 1],
    [2, 2],
    [3, 2],
    [4, 1],
    [5, 5],
    [6, 5],
    [7, 6],
    [8, 6],
    [9, 6],
    [10, 6],
    [11, 6],
    [12, 6],
    [13, 6],
    [14, 6],
    [15, 6],
    [5, 3],
    [3, 6],
    [4, 7],
    [5, 7],
    [6, 7],
    [7, 8],
    [8, 8],
    [9, 9],
    [10, 9],
    [11, 10],
    [12, 10],
    [13, 11],
    [14, 11],
    [15, 12]
  ];
  for (const [attendeeId, sessionId] of pairs) {
    await prisma.registration.create({
      data: {
        attendeeId,
        sessionId
      }
    });
  }

  console.log(
    `Seed complete. Dia principal: ${day(1)}. ` +
      'Inscrição #1: participante 1 / sessão 1; sessão 2 lotada; ' +
      'sessão 4 cancelada; sessão 5 encerrada.'
  );
}

main()
  .catch(e => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
