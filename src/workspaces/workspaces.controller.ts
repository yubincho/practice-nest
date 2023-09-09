import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import {ApiTags} from "@nestjs/swagger";


@ApiTags('WORKSPACE')
@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}


  @Get()
  async getMyWorkspaces() {

  }


  @Post()
  async createWorkspace() {

  }


  @Get(':url/members')
  async getAllMembersFromWorkspace() {

  }


  @Post(':url/members')
  async inviteMembersToWorkspace() {

  }


  @Delete(':url/members/:id')
  async kickMemberFromWorkspace() {

  }


  @Get(':url/members/:id')
  async getMemberInfoInWorkspace() {

  }


}
