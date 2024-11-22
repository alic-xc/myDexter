export interface ApiResponse {
  success: boolean;
  foundApi: {
    _id: string;
    userId: string;
    integrations: Integration[];
    __v: number;
  };
}

interface Integration {
  apiName: string;
  apiKey: string;
  _id: string;
}
