import {ENDPOINT} from "constants/endpoints.constants";
import {RestService} from "../helpers/rest-service";

export class GithubApi {
    public static async getRepos(): Promise<any> {
        return await RestService.get<any>({url: ENDPOINT.sevenwire_repos});
    }
}