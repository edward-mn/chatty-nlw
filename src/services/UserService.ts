import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
  private usersRepository: Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string){
    // Verificar se o user existe
    const userExists = await this.usersRepository.findOne({ email });

    if(userExists) {
      return userExists
    }

    // Caso não exista salvar
    const user = this.usersRepository.create({ email });

    await this.usersRepository.save(user);

    // Caso exista retornar user
    return user;
  }
}

export { UsersService };