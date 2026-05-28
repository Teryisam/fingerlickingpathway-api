// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Pool } = pkg;
import { ENV } from "./env.js";
import * as schema from "../db/schema.js";

// const sql = neon(ENV.DATABASE_URL);
// export const db = drizzle(sql, { schema });

const pool = new Pool({
  connectionString: ENV.DATABASE_URL, // Must be a postgres:// URL
  ssl: {
    rejectUnauthorized: false, // if your Aiven DB requires SSL
  },
});

export const db = drizzle(pool, { schema });