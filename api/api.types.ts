export interface GithubApiResult<T> {
  items: T[]
}

export interface GithubUser {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}
