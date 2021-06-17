import {IPlugin} from "../utils/plugin";
import {Provider} from "../utils/decorators/provider";
import {hapiRequestLogger} from "@mocko/logger/lib/hapi";

@Provider()
export class LoggerPlugin implements IPlugin {
    readonly plugin = hapiRequestLogger;
    readonly options = {
        ignoredRoutes: ['/health']
    };
}
