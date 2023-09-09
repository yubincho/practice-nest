import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import {ApiTags} from "@nestjs/swagger";


@ApiTags('CHANNEL')
@Controller('workspaces/:url/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}


  @Get()
  async getAllChannels() {

  }


  @Get(':name')
  async getSpecificChannel() {

  }


  @Post()
  async createChannels() {

  }


  @Get(':name/chats')
  async getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page)
    console.log(param.id, param.url)

  }


  @Post(':name/chats')
  async postChat() {

  }


  @Get(':name/members')
  async getAllMembers() {

  }


  @Post(':name/members')
  async inviteMembers() {

  }


}
