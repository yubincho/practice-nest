import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {map, Observable} from "rxjs";

// interceptor에서 데이터 가공하기
@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {

        // return next.handle().pipe(map((data) => ({ data })))
        // ㄴ> data === user : { data: user, code: 'SUCCESS' }

        // data 가 undefined 라면 모두 null로 바꾸고(가공) 그렇지 않으면 data.
        return next.handle().pipe(map((data) => data === undefined ? null : data))
    }
}

// pipe(catchError) 할 수도 있지만 보통 에러는 exception filter 에서 만든다.