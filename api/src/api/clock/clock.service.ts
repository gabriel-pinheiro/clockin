import {Service} from "../../utils/decorators/service";

@Service()
export class ClockService {

    async listByDate(date: string): Promise<unknown[]> {
        console.log('Listing by date', date);
        return [];
    }

    async putClock(date: string, clock: string): Promise<void> {
        console.log('Asserting clock', clock, 'on date', date);
    }

    async delClock(date: string, clock: string): Promise<void> {
        console.log('Deleting clock', clock, 'on date', date);
    }
}
