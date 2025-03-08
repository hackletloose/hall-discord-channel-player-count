import dotenv from 'dotenv';

dotenv.config();

const config = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  UPDATE_INTERVAL_SECONDS: parseInt(process.env.UPDATE_INTERVAL_SECONDS, 10) || 300,
  API_TOKEN: process.env.API_TOKEN,
  FLAG_YELLOW: parseInt(process.env.FLAG_YELLOW, 10),
  FLAG_GREEN: parseInt(process.env.FLAG_GREEN, 10),
  RCON_DISCORD_MAPPING: new Map([
    ['http://192.168.0.100:35851', [
      { channelId: '1261757420196200549', suffix: ' -SERVER-➊' },
      { channelId: '1329553690297630720', suffix: ' -SERVER-➊' }
    ]],
    ['http://192.168.0.100:35852', [
      { channelId: '1269461335486238761', suffix: ' -SERVER-➋' },
      { channelId: '1329565108417855548', suffix: ' -SERVER-➋' }
    ]],
      ['http://192.168.0.100:35853', [
      { channelId: '1336671236889247744', suffix: ' -SERVER-➌' }
    ]],
    ['http://192.168.0.100:35854', [
      { channelId: '1336671272817660045', suffix: ' -SERVER-➍' }
    ]],
    ['http://192.168.0.100:35855', [
        { channelId: '1336671297886879836', suffix: ' -SERVER-➎' }
    ]]
  ])
};

// Validate required environment variables
const requiredEnvVars = ['DISCORD_TOKEN', 'API_TOKEN', 'FLAG_YELLOW', 'FLAG_GREEN'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export default config;
