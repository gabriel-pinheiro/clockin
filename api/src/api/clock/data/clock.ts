import { ClockDto } from "./clock.dto";

export class Clock {
    constructor(
        public readonly key: string,
        public readonly date: string,
        public readonly clock: string,
        public readonly created: string,
    ) { }

    static of(date: string, clock: string): Clock {
        return new Clock(
            `${date} ${clock}`,
            date, clock,
            new Date().toISOString(),
        );
    }

    static ofDto(dto: ClockDto): Clock {
        return Clock.of(dto.date, dto.clock);
    }
}