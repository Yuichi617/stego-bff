export type StegoAppEnv = 'production' | 'local';

export const env = () => ({
  stegoAppEnv: (process.env.STEGO_APP_ENV as StegoAppEnv) || 'local',
  baseDomain: process.env.BASE_DOMAIN || 'http://localhost:8080',
  port: parseInt(process.env.PORT) || 3000,
});
