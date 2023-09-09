import {Injectable, Logger, NestMiddleware} from "@nestjs/common";
import {NextFunction, Request, Response} from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger('HTTP')
    // 2. context가 필요없는 경우 : private logger = new Logger();

    use(request: Request, response: Response, next: NextFunction): void {

        // controller 실행되기 전
        const { ip, method, originalUrl } = request
        const userAgent = request.get('user-agent') || ''

        // controller 실행된 후(끝날 때)
        // 비동기
        response.on('finish', () => {
            const { statusCode } = response
            const contentLength = response.get('content-length')
            this.logger.log(`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`)
            // 2. Logger.log(`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`)
        })

        next()
    }
}
