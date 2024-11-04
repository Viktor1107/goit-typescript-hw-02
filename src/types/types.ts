export interface GalleryImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

export interface FetchResponse {
  results: GalleryImage[];
  total_pages: number;
}
