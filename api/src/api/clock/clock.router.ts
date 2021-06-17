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
            path: '/clocks',
            handler: this.controller.listAll.bind(this.controller),
        }];
    }
}
