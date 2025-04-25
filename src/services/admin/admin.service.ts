import api from "@/services/apiService";
import { BestUsers, ProfitByStatus } from "./types";

export const listar_profit_by_status = async () => {
  return await api.get<ProfitByStatus[]>("/admin/profit-by-status");
};

export const listar_best_users = async (start: Date, end: Date) => {
  return await api.get<BestUsers[]>(
    `/admin/best-users?start=${start}&end=${end}`
  );
};
