export enum ProposalStatus {
  SUCCESSFUL = "SUCCESSFUL",
  REFUSED = "REFUSED",
  ERROR = "ERROR",
  PENDING = "PENDING",
}
export type Proposal = {
  id: number;
  createdAt: string;
  updatedAt: string;
  profit: number;
  status: ProposalStatus;
};
