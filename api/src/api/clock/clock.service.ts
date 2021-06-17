import {Service} from "../../utils/decorators/service";
import { ClockRepository } from "./clock.repository";

@Service()
export class ClockService {
    constructor(
        private readonly repository: ClockRepository,
    ) { }

    async listByDate(date: string): Promise<unknown[]> {
        return await this.repository.findByDate(date);
    }

    async putClock(date: string, clock: string): Promise<void> {
        await this.repository.putClock(date, clock);
    }

    async delClock(date: string, clock: string): Promise<void> {
        await this.repository.delClock(date, clock);
    }
}
