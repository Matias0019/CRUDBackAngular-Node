import Server from "./models/server";
import dotenv from 'dotenv';

//Configuramos las variables de ambientes
dotenv.config();

const server = new Server();