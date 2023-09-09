import {Controller, Get, Param, Post, Query} from '@nestjs/common';
import {ApiParam, ApiQuery, ApiTags} from "@nestjs/swagger";


@ApiTags('DM')
@Controller('workspaces/:url/dms')
export class DmsController {

  @ApiParam({
    name: 'url',
    required: true,
    description: '워크스페이스 url',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 아이디',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 개수',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지',
  })
  @Get(':id/chats')
  // async getChat(@Query() query) { // 쿼리 통째로 가져옴
  //   async getChat(@Query() query, @Param() param) {
  async getChat(@Query() query, @Param('id') id, @Param('url') url ) {
  // async getChat(@Query('query') perPage, @Query('page') page) { // 쿼리 일부 변수만 가져옴
    // console.log(perPage, page)
    console.log(query.perPage, query.page)
    // console.log(query.perPage, param.url)
    console.log(id, url)
  }


  @Post(':id/chats')
  async postChat() {

  }

}
