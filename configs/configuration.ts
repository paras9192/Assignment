import path from "path";

import * as dotenv from "dotenv";

// https://stackoverflow.com/questions/9874382/whats-the-difference-between-process-cwd-vs-dirname
// process.cwd() -> <some-path>/lokal-marketplace-app
// __dirname -> <some-path>/lokal-marketplace-app/dist/configs/
// .env files are not available in dist folder. Hence using process.cwd()
dotenv.config({
  path: path.resolve(process.cwd(), `./configs/.${process.env.NODE_ENV}.env`),
});

export default {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 3000,
    EMAIL_PROVIDER: {
    USERNAME: process.env.EMAIL_PROVIDER_USERNAME,
    PASSWORD: process.env.EMAIL_PROVIDER_PASSWORD,
  },
};
