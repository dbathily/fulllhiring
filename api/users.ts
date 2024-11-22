import {GithubApiResult, GithubUser} from './api.types.ts';

export const searchGithubUsers = async (q: string) => {
  const response = await fetch(`https://api.github.com/search/users?q=${q}`);
  if(response.ok) {
    return await response.json() as GithubApiResult<GithubUser>;
  } else {
    throw new Error(await response.text());
  }
};
