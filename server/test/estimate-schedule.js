import EstimateScheduleService from '../src/services/estimate-schedule';

const estimateScheduleService = new EstimateScheduleService();
const r = estimateScheduleService.estimate([
  { from: new Date('2022-04-20T11:00:00.000Z'), to: new Date('2022-04-20T15:00:00.000Z') },
  { from: new Date('2022-04-21T13:00:00.000Z'), to: new Date('2022-04-21T14:00:00.000Z') },
  { from: new Date('2022-04-21T15:00:00.000Z'), to: new Date('2022-04-21T17:00:00.000Z') },
], new Date('2022-04-20T12:00:00.000Z'), new Date('2022-04-22T21:00:00.000Z'));
console.log(r);
