export interface createBookmarkDto {
  parent: string;
  label: string;
  url: string;
}

export interface editBookmarkDto {
  id: string;
  parent: string;
  label: string;
  url: string;
}
