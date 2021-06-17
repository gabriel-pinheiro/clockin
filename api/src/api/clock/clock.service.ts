import {Service} from "../../utils/decorators/service";

@Service()
export class ClockService {

    async listAll(): Promise<unknown[]> {
        return [];
    }
}
