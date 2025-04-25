import { listar_clientes } from "@/services/costumers/costumers.service";
import { listar_propostas } from "@/services/proposals/proposals.service";
import { listar_usuarios } from "@/services/users/users.service";
import { useQuery } from "@tanstack/react-query";

export function DashStats() {
  const proposals = useQuery({
    queryKey: ["proposals"],
    queryFn: listar_propostas,
  });

  const usuarios = useQuery({
    queryKey: ["usuarios"],
    queryFn: listar_usuarios,
  });

  const clientes = useQuery({
    queryKey: ["clientes"],
    queryFn: listar_clientes,
  });

  return (
    <div className="flex gap-2 p-2">
      <div className="stats shadow bg-base-200">
        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{usuarios.data?.data.length || 0}</div>
          <div className="stat-desc"> total de usuários</div>
        </div>
      </div>

      <div className="stats shadow ">
        <div className="stat bg-base-200">
          <div className="stat-title">Total Proposals</div>
          <div className="stat-value">{proposals.data?.data.length || 0}</div>
          <div className="stat-desc">Total de propostas</div>
        </div>
      </div>

      <div className="stats shadow ">
        <div className="stat bg-base-200">
          <div className="stat-title">Total Costumers</div>
          <div className="stat-value">{clientes.data?.data.length || 0}</div>
          <div className="stat-desc">Total de clientes</div>
        </div>
      </div>
    </div>
  );
}
