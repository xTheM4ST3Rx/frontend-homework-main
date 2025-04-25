export function DashStats() {
  return (
    <div className="flex gap-2 p-2">
      <div className="stats shadow bg-base-200">
        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">111</div>
          <div className="stat-desc"> total de usuários</div>
        </div>
      </div>

      <div className="stats shadow ">
        <div className="stat bg-base-200">
          <div className="stat-title">Total Proposals</div>
          <div className="stat-value">123</div>
          <div className="stat-desc">Total de propostas</div>
        </div>
      </div>

      <div className="stats shadow ">
        <div className="stat bg-base-200">
          <div className="stat-title">Total Costumers</div>
          <div className="stat-value">123</div>
          <div className="stat-desc">Total de clientes</div>
        </div>
      </div>
    </div>
  );
}
