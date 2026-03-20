// Generic Base Entity (useful for almost any DB model)
export interface BaseEntity {
  id: number | string;
  createdAt: string;
  updatedAt: string;
}

// Generic API Error Wrapper
export interface ApiError {
  message: string;
  status?: number;
}
