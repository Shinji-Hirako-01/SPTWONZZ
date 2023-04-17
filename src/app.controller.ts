import { Controller, Get, Res } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('*')
export class FileController {
  @Get()
  getFile(@Res() res) {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    return file.pipe(res);;
  }
}