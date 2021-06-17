import { Clock } from "./clock";

export class ClockDto {
    constructor(
        public readonly date: string,
        public readonly clock: string,
    ) { }

    static of(date: string, clock: string): ClockDto {
        return new ClockDto(date, clock);
    }

    static ofEntity(clock: Clock): ClockDto {
        return new ClockDto(clock.date, clock.clock);
    }
}
