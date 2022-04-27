const { addHours } = require('date-fns');

const isEqual = (a, b) => a.getTime() === b.getTime();

const isOverlapped = (schedules, range) => {
  let result = true;
  for (let i = 0; i < schedules.length; i += 1) {
    if (schedules[i].from < range.to && range.to <= schedules[i].to) result = false;
  }

  return !result;
};

class EstimateScheduleService {
  candidates = [];

  estimate(schedules, from, to) {
    this.from = from;
    this.to = addHours(from, 1);

    while (this.to < to) {
      if (isOverlapped(schedules, { to: this.to, from: this.from })) {
        const prevTo = addHours(this.to, -1);
        if (!isEqual(this.from, prevTo)) this.candidates.push({ from: this.from, to: prevTo });
        this.from = this.to;
      }
      this.to = addHours(this.to, 1);
    }
    this.candidates.push({ from: this.from, to: this.to });

    return this.candidates;
  }
}

module.exports = EstimateScheduleService;
