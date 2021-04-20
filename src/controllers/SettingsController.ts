import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {
  async create(req: Request, res: Response){
    const { chat, username} = req.body;
    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
      chat,
      username,
    });

    await settingsRepository.save(settings);

    return res.json(settings);
  };

  async users(res: Response){
    const settingsRepository = getCustomRepository(SettingsRepository);
    const all = await settingsRepository.find()
    console.log(all);
    // return res.json(all);
  };
};

export { SettingsController }