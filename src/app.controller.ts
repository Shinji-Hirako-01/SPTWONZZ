import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { resolve } from 'path';
@Controller()
export class AppController {
  constructor() {}

  @Get('*')
  getClient(@Res() res: Response) {
		/*const stream = createReadStream(resolve('./client/index.html'))
			res.type('text/html').send(stream)*/
		res.send("Hi")
	}
}