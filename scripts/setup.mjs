import { existsSync, copyFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const run = (cmd, args) => {
  const result = spawnSync(cmd, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32' && cmd === 'npm'
  });
  if (result.error || result.status !== 0) {
    console.error(result.error ?? `Falha: ${cmd} ${args.join(' ')}`);
    process.exit(result.status ?? 1);
  }
};

if (!existsSync('.env')) {
  copyFileSync('.env.example', '.env');
}

run('docker', ['compose', 'up', '-d', '--wait']);
run('npm', ['install']);
run('npm', ['run', 'prisma:generate']);
run('npm', ['run', 'prisma:deploy']);
run('npm', ['run', 'db:seed']);
console.log('Setup concluído. Execute npm run dev.');
