import api from "@/services/apiService";
import { Proposal } from "./types";

export const listar_propostas = async () => {
  return await api.get<Proposal[]>("/proposals");
};
