import { Injectable } from '@nestjs/common';
import { Holiday } from './holiday.entity';

@Injectable()
export class HolidaysService {
  holidays: Holiday[] = [
    { date: '1/1/2023', name: 'Confraternização Mundial' },
    { date: '2/20/2023', name: 'Carnaval' },
    { date: '4/7/2023', name: 'Páscoa' },
    { date: '4/21/2023', name: 'Tiradentes' },
    { date: '5/1/2023', name: 'Dia do trabalho' },
    { date: '6/8/2023', name: 'Corpus Christi' },
    { date: '9/7/2023', name: 'Independência do Brasil' },
    { date: '10/12/2023', name: 'Nossa Senhora Aparecida' },
    { date: '11/2/2023', name: 'Finados' },
    { date: '11/15/2023', name: 'Proclamação da República' },
    { date: '12/25/2023', name: 'Natal' },
  ];
  registerHoliday(body: Holiday) {
    this.holidays.push(body);
  }
  isTodayHoliday() {
    const today = new Date().toLocaleDateString();
    const todayHoliday = this.holidays.find((d) => d.date === today);
    if (todayHoliday) return `Sim, hoje é ${todayHoliday.name}!`;
    return 'Não, hoje não é feriado';
  }
  findAllHolidays() {
    return this.holidays;
  }
}
