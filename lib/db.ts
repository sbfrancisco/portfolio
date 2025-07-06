import { DataSource } from 'typeorm'
import { Contact } from '@/models/Contact'

// Evitar conexiones duplicadas en desarrollo
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // Solo para desarrollo
  logging: false,
  entities: [User],
})
