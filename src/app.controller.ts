import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor() {}

  @Get('*')
  getClient(@Res() res: Response) {
		res.sendFile('index.html', { root: `${__dirname}client/dist/client` })
	}
}
