import * as Boom from "@hapi/boom";

export function validateDate(date: string): void {
    if(!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        throw Boom.badRequest('Invalid clock');
    }

    const [_year, month, day] = date.split('-');
    if(parseInt(month) < 1 || parseInt(month) > 12) {
        throw Boom.badRequest('Invalid month');
    }

    if(parseInt(day) > 31) {
        throw Boom.badRequest('Invalid day');
    }
}

export function validateClock(clock: string): void {
    if(!/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(clock)) {
        throw Boom.badRequest('Invalid clock');
    }
}
