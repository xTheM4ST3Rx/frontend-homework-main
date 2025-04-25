import { listar_propostas } from "@/services/proposals/proposals.service";
import { ProposalStatus } from "@/services/proposals/types";
import { useQuery } from "@tanstack/react-query";
import { CheckCheck, CopyPlus } from "lucide-react";

export default function Propostas() {
  const proposals = useQuery({
    queryKey: ["proposals"],
    queryFn: listar_propostas,
  });

  return (
    <div>
      <div className="p-2 ">
        <div className="rounded-md p-2 flex justify-between items-center bg-base-200">
          <div className="text-2xl">
            Resultados: {proposals.data?.data.length}
          </div>

          <button className="btn btn-info btn-xs">
            <CopyPlus className="size-2" />
            Criar Proposta
          </button>
        </div>
      </div>

      <div className="overflow-x-auto p-2 ">
        <table className="table table-zebra  bg-base-200">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Profit</th>
              <th>Data de Criação</th>
              <th>Data de Atualização</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="even:bg-base-300">
            {/* row 1 */}

            {proposals.data &&
              proposals.data?.data.map((proposal) => (
                <tr key={proposal.id}>
                  <th>{proposal.id}</th>
                  <td>{proposal.profit}</td>
                  <td>{proposal.createdAt}</td>
                  <td>{proposal.updatedAt}</td>
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

                  {proposal.status == ProposalStatus.PENDING ? (
                    <td>
                      <button className="btn btn-xs btn-success btn-outline">
                        <CheckCheck className="size-3" /> Aprovar
                      </button>
                    </td>
                  ) : (
                    <td></td>
                  )}
                </tr>
              ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
