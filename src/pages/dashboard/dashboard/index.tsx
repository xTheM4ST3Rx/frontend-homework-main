import {
  listar_best_users,
  listar_profit_by_status,
} from "@/services/admin/admin.service";
import { listar_clientes } from "@/services/costumers/costumers.service";
import { listar_propostas } from "@/services/proposals/proposals.service";
import { ProposalStatus } from "@/services/proposals/types";
import { listar_usuarios } from "@/services/users/users.service";
import { useQuery } from "@tanstack/react-query";
import { Trophy } from "lucide-react";
import { useState } from "react";

export function DashStats() {
  const [dateStart, setDateStart] = useState<Date>(new Date("2017-10-01"));
  const [dateEnd, setDateEnd] = useState<Date>(new Date());

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

  const profitbystatus = useQuery({
    queryKey: ["profitbystatus"],
    queryFn: listar_profit_by_status,
  });

  const listarBestUsers = useQuery({
    queryKey: ["listarBestUsers", dateStart, dateEnd],
    queryFn: () => listar_best_users(dateStart, dateEnd),
  });

  const resetDate = () => {
    setDateStart(new Date("2017-10-01"));
    setDateEnd(new Date());
  };

  return (
    <div>
      <div className="flex gap-2 p-2 flex-wrap flex-col-reverse sm:flex-row">
        <div className="flex-1">
          <div className="p-2 bg-base-200 mb-2 font-bold rounded-md">
            Profit por Status:
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra  bg-base-200">
              {/* head */}
              <thead>
                <tr>
                  <th>id</th>
                  <th>Nome</th>
                  <th>Profit</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="even:bg-base-300">
                {/* row 1 */}

                {profitbystatus.data &&
                  profitbystatus.data?.data.map((proposal) => (
                    <tr key={proposal.userId}>
                      <th>{proposal.userId}</th>
                      <td>{proposal.userName}</td>
                      <td>{proposal.totalProfit}</td>
                      <td>
                        {proposal.status == ProposalStatus.SUCCESSFUL ? (
                          <div className="badge badge-success">Aprovada</div>
                        ) : proposal.status == ProposalStatus.ERROR ? (
                          <div className="badge badge-error">Erro</div>
                        ) : proposal.status == ProposalStatus.PENDING ? (
                          <div className="badge badge-warning">Pendente</div>
                        ) : (
                          <div className="badge badge-info">Recusada</div>
                        )}
                      </td>
                    </tr>
                  ))}
                {/* row 2 */}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex-1">
          <div className="p-2 bg-base-200 mb-2 font-bold rounded-md flex justify-between items-center">
            Profit por Status:
            <div className="flex gap-2 ">
              <button className="btn btn-xs btn-info" onClick={resetDate}>
                Todo Periodo
              </button>

              <input
                className="input input-xs"
                type="date"
                value={dateStart.toISOString().split("T")[0]}
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  setDateStart(date);
                }}
              />
              <input
                className="input input-xs"
                type="date"
                value={dateEnd.toISOString().split("T")[0]}
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  setDateEnd(date);
                }}
              />
            </div>
          </div>
          <div className="overflow-x-auto ">
            <table className="table table-zebra  bg-base-200">
              {/* head */}
              <thead>
                <tr>
                  <th>id</th>
                  <th>Nome</th>
                  <th>TotalProfit</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody className="even:bg-base-300">
                {/* row 1 */}

                {listarBestUsers.data &&
                  listarBestUsers.data?.data.map((proposal, i) => (
                    <tr key={proposal.userId}>
                      <th>{proposal.userId}</th>
                      <td>{proposal.userName}</td>
                      <td>{proposal.totalProfit}</td>
                      <td>
                        {i + 1 == 1 ? (
                          <div className="badge bg-amber-500">
                            1° <Trophy className="size-3" />
                          </div>
                        ) : i + 1 == 2 ? (
                          <div className="badge bg-gray-400">
                            2° <Trophy className="size-3" />
                          </div>
                        ) : i + 1 == 3 ? (
                          <div className="badge bg-amber-700">
                            3° <Trophy className="size-3" />
                          </div>
                        ) : (
                          <div className="badge ">{i + 1}°</div>
                        )}
                      </td>
                    </tr>
                  ))}
                {/* row 2 */}
              </tbody>
            </table>
          </div>

          <div className=" mt-2 ">
            <div className="p-2 bg-base-200 font-bold rounded-md ">
              Stats Gerais:
            </div>

            <div className="flex gap-2 mt-2 sm:flex-col justify-between">
              <div className="stats shadow bg-base-200">
                <div className="stat">
                  <div className="stat-title">Total Users</div>
                  <div className="stat-value">
                    {usuarios.data?.data.length || 0}
                  </div>
                  <div className="stat-desc"> total de usuários</div>
                </div>
              </div>

              <div className="stats shadow ">
                <div className="stat bg-base-200">
                  <div className="stat-title">Total Proposals</div>
                  <div className="stat-value">
                    {proposals.data?.data.length || 0}
                  </div>
                  <div className="stat-desc">Total de propostas</div>
                </div>
              </div>

              <div className="stats shadow ">
                <div className="stat bg-base-200">
                  <div className="stat-title">Total Costumers</div>
                  <div className="stat-value">
                    {clientes.data?.data.length || 0}
                  </div>
                  <div className="stat-desc">Total de clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
