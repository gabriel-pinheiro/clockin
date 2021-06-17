import {Provider} from "../../utils/decorators/provider";
import * as Hapi from '@hapi/hapi';
import {ClockService} from "./clock.service";

@Provider()
export class ClockController {
    constructor(
        private readonly service: ClockService,
    ) { }

    async listAll(request: Hapi.Request, toolkit: Hapi.ResponseToolkit) {
        return await this.service.listAll();
    }
}
