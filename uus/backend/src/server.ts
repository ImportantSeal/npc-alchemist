import app from './app';
import { config } from './config/env';

if (process.env.NODE_ENV !== 'test') {
  const PORT: number = config.PORT;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
