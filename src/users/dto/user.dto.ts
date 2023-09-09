import {ApiProperty} from "@nestjs/swagger";
import {CreateUserDto} from "./create-user.dto";

export class UserDto extends CreateUserDto {
    @ApiProperty({
        required: true,
        example: 1,
        description: '아이디'
    })
    id: number;

    // @ApiProperty({
    //     required: true,
    //     example: 'zerocho@gmail.com',
    //     description: '이메일'
    // })
    // email: string;
}