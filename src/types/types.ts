export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

export interface FetchResponse {
  results: Image[];
  total_pages: number;
}
