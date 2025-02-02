import axios from "axios";
import { AuthRequest, AuthResponse, ProfileResponse } from "types";

const apiClient = axios.create({
  baseURL: "https://backend-ashen-seven-22.vercel.app",
});

export const signin = async (data: AuthRequest) => {
  const res = await apiClient.post<AuthResponse>("/login", data);

  localStorage.setItem("token", res.data.token);
};

export const signup = async (data: AuthRequest) => {
  const res = await apiClient.post<AuthResponse>("/register", data);

  localStorage.setItem("token", res.data.token);
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("Нет токена");

  const response = await apiClient.get<ProfileResponse>("/profile", {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};
