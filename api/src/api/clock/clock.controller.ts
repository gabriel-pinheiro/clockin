import {Provider} from "../../utils/decorators/provider";
import * as Hapi from '@hapi/hapi';
import {ClockService} from "./clock.service";
import { validateDate, validateClock } from "./clock.validator";
import { ClockDto } from "./data/clock.dto";

@Provider()
export class ClockController {
    constructor(
        private readonly service: ClockService,
    ) { }

    async listByDate(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject> {
        const { date } = request.params;

        validateDate(date);

        const clocks = (await this.service
            .listByDate(date))
            .map(ClockDto.ofEntity);
        return h.response(clocks);
    }

    async putClock(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject> {
        const { date, clock } = request.params;

        validateDate(date);
        validateClock(clock);

        await this.service.putClock(date, clock);
        return h.response().code(204);
    }

    async delClock(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject> {
        const { date, clock } = request.params;

        validateDate(date);
        validateClock(clock);

        await this.service.delClock(date, clock);
        return h.response().code(204);
    }
}
