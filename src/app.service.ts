import { Injectable } from '@nestjs/common';
import * as process from "process";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AppService {

  constructor(private readonly configService: ConfigService) {}


  getHello() {
    // return process.env.SECRET
    // process.env.DB_PASSWORD
    // return this.configService.get('DB_PASSWORD')
    return this.configService.get('SECRET')
  }
}
