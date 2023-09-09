import {Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, UseInterceptors} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserDto} from "./dto/user.dto";
import {User} from "../common/decorators/user.decorator";
import {UndefinedToNullInterceptor} from "../common/interceptoers/undefinedToNull.interceptor";

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('USER')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserDto
  })
  @ApiResponse({
    status: 500,
    description: '서버에러',
  })
  @ApiOperation({ summary: '내 정보 조회'} )
  @Get()
  // async getUsers(@Req() req) { -> return req.user :
  // @Req/@Res -> 왠만하면 안쓰는 게 좋음. 타입추론 불가, 특정 플랫폼에 종속되어 변경하기 어려움, 테스트 어려움.
  // res.locals.jwt -> 이렇게 쓰면 안좋아서 decorator를 따로 만들어서 쓴다.
  async getUsers(@User() user) { // -> @User : decorator 사용함
    return user;
  }

  @ApiOperation({ summary: '회원가입'} )
  @Post('')
  async postUsers(@Body() data: CreateUserDto) {
    await this.usersService.postUsers(data)
  }


  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserDto
  })
  @ApiOperation({ summary: '로그인'} )
  @Post('login')
  // async logIn(@Req() req) {
  async logIn(@User() user) {  // // -> @User : decorator 사용함
    return user
  }


  @ApiOperation({ summary: '로그아웃'} )
  @Post('logout')
  async logOut(@Req() req, @Res() res) {
    await req.logOut()
    res.clearCookie('connenct.sid', { httpOnly: true })
    res.send('ok')
  }


}
