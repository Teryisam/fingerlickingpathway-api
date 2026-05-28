// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Pool } = pkg;
import { ENV } from "./env.js";
import * as schema from "../db/schema.js";

// const sql = neon(ENV.DATABASE_URL);
// export const db = drizzle(sql, { schema });

const pool = new Pool({
  connectionString: ENV.DATABASE_URL, // Must be a postgres:// URL
  ssl: true,
  // ssl: {
  //   rejectUnauthorized: false, // if your Aiven DB requires SSL
  // },
});

// TEST CONNECTION
pool.connect()
  .then((client) => {
    console.log("PostgreSQL connected successfully");
    client.release();
  })
  .catch((err) => {
    console.error("PostgreSQL connection error:", err);
  });

export const db = drizzle(pool, { schema });