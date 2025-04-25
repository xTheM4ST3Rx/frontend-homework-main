import { listar_propostas } from "@/services/proposals/proposals.service";
import { ProposalStatus } from "@/services/proposals/types";
import { useQuery } from "@tanstack/react-query";

export default function Propostas() {
  const proposals = useQuery({
    queryKey: ["proposals"],
    queryFn: listar_propostas,
  });

  return (
    <div>
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
                </tr>
              ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
