import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {

    // constructor(
    //     @InjectRepository(User)
    //     private userRepository: Repository<User>
    // ) {
    // }

    async postUsers(data: CreateUserDto) {
        // const newUser = await this.userRepository.create(data)
        // await this.userRepository.save(newUser)
        // return newUser
    }

}
