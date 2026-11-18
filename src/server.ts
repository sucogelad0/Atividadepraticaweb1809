import { env } from './shared/env.js';
import { app } from './infrastructure/http/app.js';
app.listen(env.port, () => console.log(`[server] up on port ${env.port}`));
