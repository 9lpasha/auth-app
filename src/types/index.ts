export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  type: string;
}

export interface ProfileResponse {
  email: string;
  id: string;
}

export interface ErrorResponse {
  code: string;
  message: string;
}
