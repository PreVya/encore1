import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const userTable = pgTable("users", {
  id: integer().generatedByDefaultAsIdentity().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).unique(),
  age: integer().notNull(),
});
