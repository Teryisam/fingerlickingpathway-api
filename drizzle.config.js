// import { ENV } from "./src/config/env.js";

// export default {
//     schema: "./src/db/schema.js",
//     out: "./src/db/migrations",
//     driver: "pg",
//     dialect: "postgresql",
//     dbCredentials: { connectionString: ENV.DATABASE_URL },
// };

import { config } from "dotenv";
config();

export default {
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
};

