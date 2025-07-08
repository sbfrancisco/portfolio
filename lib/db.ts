import "reflect-metadata";
import { DataSource } from "typeorm";
import { Contact } from "@/models/Contact";

let AppDataSource: DataSource;

export async function getDataSource() {
  if (AppDataSource && AppDataSource.isInitialized) {
    return AppDataSource;
  }

  AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Contact],
    synchronize: true,
  });

  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  return AppDataSource;
}
