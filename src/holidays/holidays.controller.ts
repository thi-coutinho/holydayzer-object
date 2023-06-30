import { Body, Controller, Get, Post } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { Holiday } from './holiday.entity';

@Controller('holidays')
export class HolidaysController {
  constructor(private readonly holidaysService: HolidaysService) {}

  @Get()
  findAllHolidays() {
    return this.holidaysService.findAllHolidays();
  }

  @Get('/today')
  isTodayHoliday() {
    return this.holidaysService.isTodayHoliday();
  }

  @Post()
  registerHoliday(@Body() body: Holiday) {
    return this.holidaysService.registerHoliday(body);
  }
}
