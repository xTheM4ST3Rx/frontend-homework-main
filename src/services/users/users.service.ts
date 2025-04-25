import api from "@/services/apiService";
import { User } from "./types";

export const listar_usuarios = async () => {
  return await api.get<User[]>("/users");
};
