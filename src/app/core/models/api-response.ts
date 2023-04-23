export interface ApiListResponse<T> extends ApiResponse<T> {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
}

export interface ApiResponse<T> {
  data: T,
  support: Support,
}

export interface Support {
  url: string,
  text: string,
}
