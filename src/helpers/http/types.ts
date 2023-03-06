export interface RequestConfigTypes {
  url: string;
  requestConfig?: RequestInit | undefined;
}

export interface ResponseConfigTypes {
  code: string;
  errors: Record<string, any>;
}