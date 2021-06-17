import {Provider} from "../../utils/decorators/provider";
import {IRouter} from "../../utils/router";
import {ClockController} from "./clock.controller";

@Provider()
export class ClockRouter implements IRouter{
    constructor(
        private readonly controller: ClockController,
    ) { }

    async getRoutes() {
        return [{
            method: 'GET',
            path: '/dates/{date}/clocks',
            handler: this.controller.listByDate.bind(this.controller),
        }, {
            method: 'PUT',
            path: '/dates/{date}/clocks/{clock}',
            handler: this.controller.putClock.bind(this.controller),
        }, {
            method: 'DELETE',
            path: '/dates/{date}/clocks/{clock}',
            handler: this.controller.delClock.bind(this.controller),
        }];
    }
}
