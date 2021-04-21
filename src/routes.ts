import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

/*
 Tipos de Parâmetros
 - Routes Params => Parâmetro de rotas - localhost:3000/settings/1
 - Query Params => Filtros e buscas - localhost:3000/settings/1?search=algumacoisa
 - Body Params => {

 }
*/

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


// routes.get("/settings", settingsController.users);
// "admin_id": "6f59fb63-1e51-4c40-905b-4150750a8fb9"
export { routes };