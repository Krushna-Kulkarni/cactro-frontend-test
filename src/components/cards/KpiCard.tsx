type KpiCardProps = {
  title: string;
  count: number;
  icon: React.ReactNode;
  status?: string;
};

const KpiCard = ({ title, count, icon, status }: KpiCardProps) => {
  return (
    <div className={`kpi-card ${status ? `${status}` : ""}`}>
      <div className="icon">{icon}</div>
      <div className="count">{count}</div>
      <div className="title">{title}</div>
    </div>
  );
};

export default KpiCard;
