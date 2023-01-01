import dotenv from 'dotenv';
import Admin from './classes/adminClass';
import Server from './models/server';
dotenv.config();

require('./models/associations');

const server = new Server();
server.listen();

const admin = new Admin('Chicala', 'Alejandro', "ale@ale.com", "123");
admin.save();