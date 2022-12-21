import {Pool} from 'pg';
import dotenv from 'dotenv'


dotenv.config();
 const {
     POSTGRES_USER,
     POSTGRES_PASSWORD,
     POSTGRES_HOST,
     POSTGRES_DATABASE
 } = process.env;
export const pool = new Pool ({
user:POSTGRES_USER,
password:POSTGRES_PASSWORD,
database:POSTGRES_DATABASE,
port:5431,
host:POSTGRES_HOST
})