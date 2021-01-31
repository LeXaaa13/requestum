import {ENDPOINT} from "constants/endpoints.constants";
import {RestService} from "helpers/rest-service";
import {IGithubReposRes} from "models/github-repos/github-repos";

export class GithubApi {
    public static async getRepos(): Promise<IGithubReposRes[]> {
        return await RestService.get<IGithubReposRes[]>({url: ENDPOINT.sevenwire_repos});
    }
}