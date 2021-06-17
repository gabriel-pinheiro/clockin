import {IRouter} from "./utils/router";
import {Provider} from "./utils/decorators/provider";
import {ClockRouter} from "./api/clock/clock.router";

@Provider()
export class MainRouter implements IRouter {
    constructor(
        private readonly clockRouter: ClockRouter,
    ) { }

    async getRoutes() {
        const routes = await Promise.all([
            this.clockRouter.getRoutes(),
        ]);

        return routes.flat();
    }
}
