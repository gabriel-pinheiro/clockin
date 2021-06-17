import { Deta } from "deta";
import { configProvider } from "../../config/config.service";
import { Provider } from "../../utils/decorators/provider";
import { Clock } from "./data/clock";

@Provider()
export class ClockRepository {
    private readonly deta = Deta(configProvider.get('DETA_KEY'));
    private readonly db = this.deta.Base('clock');

    async putClock(date: string, clock: string): Promise<void> {
        const entity = Clock.of(date, clock);
        await this.db.put(entity as any);
    }

    async delClock(date: string, clock: string): Promise<void> {
        await this.db.delete(`${date} ${clock}`);
    }

    async findByDate(date: string): Promise<Clock[]> {
        const clocks = (await this.db.fetch({ date }).next()).value;
        return clocks as any;
    }
}
