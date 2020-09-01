export interface GoogleResponse {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items?: (ItemsEntity)[] | null;
}
export interface Url {
  type: string;
  template: string;
}
export interface Queries {
  request?: (RequestEntityOrNextPageEntity)[] | null;
  nextPage?: (RequestEntityOrNextPageEntity)[] | null;
}
export interface RequestEntityOrNextPageEntity {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}
export interface Context {
  title: string;
}
export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}
export interface ItemsEntity {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId?: string | null;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}
export interface Pagemap {
  cse_thumbnail?: (CseThumbnailEntity)[] | null;
  cse_image?: (CseImageEntity)[] | null;
  hcard?: (HcardEntity)[] | null;
  webpage?: (WebpageEntity)[] | null;
}
export interface CseThumbnailEntity {
  src: string;
  width: string;
  height: string;
}
export interface CseImageEntity {
  src: string;
}
export interface HcardEntity {
  url_text?: string | null;
  bday: string;
  fn: string;
  nickname: string;
  logo?: string | null;
  category: string;
  url?: string | null;
  note?: string | null;
  label?: string | null;
}
export interface WebpageEntity {
  image: string;
  isfamilyfriendly: string;
  keywords: string;
  inlanguage: string;
  lastreviewed: string;
  sourceorganization: string;
  description: string;
  datecreated: string;
  url: string;
  contentrating: string;
  datemodified: string;
  maincontentofpage: string;
  name: string;
}
