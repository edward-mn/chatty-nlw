import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();
const settingsController = new SettingsController();

/*
 Tipos de Parâmetros
 - Routes Params => Parâmetro de rotas - localhost:3000/settings/1
 - Query Params => Filtros e buscas - localhost:3000/settings/1?search=algumacoisa
 - Body Params => {

 }
*/

routes.post("/settings", settingsController.create);

routes.get("/settings", settingsController.users);

export { routes };