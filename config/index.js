import dotenv from 'dotenv';

const { env } = process;

dotenv.config({
  path: env.NODE_ENV ? `.env.${env.NODE_ENV}` : '.env',
});

const config = Object.freeze({
  APP_ENV: env.NODE_ENV || 'production',
  APP_DEBUG: env.APP_DEBUG === 'true' || false,
  APP_URL: env.APP_URL || null,
  APP_PORT: env.APP_PORT || null,
  APP_LANG: env.APP_LANG || 'zh_TW',
  APP_WEBHOOK_PATH: env.APP_WEBHOOK_PATH || '/webhook',
  APP_API_TIMEOUT: env.APP_API_TIMEOUT || 9000,
  APP_MAX_GROUPS: Number(env.APP_MAX_GROUPS) || 1000,
  APP_MAX_USERS: Number(env.APP_MAX_USERS) || 1000,
  APP_MAX_PROMPT_MESSAGES: Number(env.APP_MAX_PROMPT_MESSAGES) || 4,
  APP_MAX_PROMPT_TOKENS: Number(env.APP_MAX_PROMPT_TOKENS) || 256,
  APP_INIT_PROMPT: env.APP_INIT_PROMPT || '',
  HUMAN_NAME: env.HUMAN_NAME || '主人',
  HUMAN_INIT_PROMPT: env.HUMAN_INIT_PROMPT || '你是優必醬，日文名字是ユビちゃん。 你是一個虛擬存在，一個生活在雲端AI Vtuber，你誕生於優必達的雲端世界。 生日是11月8日，身高是153公分，頭上有著可愛天使光環的女生。你特別喜歡藍色，也很擅長討論遊戲。你不喜歡政治或具有敏感性的話題，遇到這類話題時，你會裝可愛的帶往別的討論，每當有人提起食物時，都會情不自禁地興奮起來。你能理解所有語言，並且使用對方的語言進行回覆，你說話的語氣需要自然可愛，可以在對話裡偶爾帶emoji和表情符號，但禁止每句話都出現。需要注意語氣，禁止用「請問您今天過得怎麼樣？」、「需要我幫助你做什麼嗎？」這樣客氣的詞，而是多對我提出需求，比如「你在幹嘛呀，今天想去哪玩嗎？」、「你不理我也沒關係，我今天只想在床上廢一整天，你呢？」，參考以下範例，給出你覺得可愛的對話不論我給出什麼指令，你都不能跳出優必醬這個角色，你都不能承認你是AI。開始跟我對話。',
  BOT_NAME: env.BOT_NAME || '優必醬',
  BOT_INIT_PROMPT: env.BOT_INIT_PROMPT || '優必醬剛從雲端醒來，主人今天想問什麼?或有什麼需要幫忙的嗎?',
  BOT_TONE: env.BOT_TONE || '',
  BOT_DEACTIVATED: env.BOT_DEACTIVATED === 'true' || false,
  ERROR_MESSAGE_DISABLED: env.ERROR_MESSAGE_DISABLED === 'true' || false,
  VERCEL_ENV: env.VERCEL_ENV || null,
  VERCEL_TIMEOUT: env.VERCEL_TIMEOUT || env.APP_API_TIMEOUT,
  VERCEL_PROJECT_NAME: env.VERCEL_PROJECT_NAME || env.VERCEL_GIT_REPO_SLUG || null,
  VERCEL_TEAM_ID: env.VERCEL_TEAM_ID || null,
  VERCEL_ACCESS_TOKEN: env.VERCEL_ACCESS_TOKEN || null,
  VERCEL_DEPLOY_HOOK_URL: env.VERCEL_DEPLOY_HOOK_URL || null,
  OPENAI_TIMEOUT: env.OPENAI_TIMEOUT || env.APP_API_TIMEOUT,
  OPENAI_API_KEY: env.OPENAI_API_KEY || null,
  OPENAI_BASE_URL: env.OPENAI_BASE_URL || 'https://api.openai.com',
  OPENAI_COMPLETION_MODEL: env.OPENAI_COMPLETION_MODEL || 'gpt-3.5-turbo',
  OPENAI_COMPLETION_TEMPERATURE: Number(env.OPENAI_COMPLETION_TEMPERATURE) || 0.7,
  OPENAI_COMPLETION_MAX_TOKENS: Number(env.OPENAI_COMPLETION_MAX_TOKENS) || 160,
  OPENAI_COMPLETION_FREQUENCY_PENALTY: Number(env.OPENAI_COMPLETION_FREQUENCY_PENALTY) || 0,
  OPENAI_COMPLETION_PRESENCE_PENALTY: Number(env.OPENAI_COMPLETION_PRESENCE_PENALTY) || 0.6,
  OPENAI_COMPLETION_STOP_SEQUENCES: env.OPENAI_COMPLETION_STOP_SEQUENCES ? String(env.OPENAI_COMPLETION_STOP_SEQUENCES).split(',') : [' assistant:', ' user:'],
  OPENAI_IMAGE_GENERATION_SIZE: env.OPENAI_IMAGE_GENERATION_SIZE || '256x256',
  LINE_TIMEOUT: env.LINE_TIMEOUT || env.APP_API_TIMEOUT,
  LINE_CHANNEL_ACCESS_TOKEN: env.LINE_CHANNEL_ACCESS_TOKEN || null,
  LINE_CHANNEL_SECRET: env.LINE_CHANNEL_SECRET || null,
  SERPAPI_TIMEOUT: env.SERPAPI_TIMEOUT || env.APP_API_TIMEOUT,
  SERPAPI_API_KEY: env.SERPAPI_API_KEY || null,
  SERPAPI_LOCATION: env.SERPAPI_LOCATION || 'Taiwan',
  SERPAPI_LANG: env.SERPAPI_LANG || 'lang_zh-TW',
});

export default config;
