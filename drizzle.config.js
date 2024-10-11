/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:IdbEUzW1vS8q@ep-lively-wave-a520x6k4.us-east-2.aws.neon.tech/neondb?sslmode=require',

    }
  };
  
