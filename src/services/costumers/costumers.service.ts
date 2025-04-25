import api from "@/services/apiService";
import { Customer } from "./types";

export const listar_clientes = async () => {
  return await api.get<Customer[]>("/customers");
};
