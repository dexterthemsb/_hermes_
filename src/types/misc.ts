export type AccessLevels = 0 | 1 | 2 | 3;

export interface IResponse {
  publicAccess: null | AccessLevels;
  selected: Array<any>;
}
