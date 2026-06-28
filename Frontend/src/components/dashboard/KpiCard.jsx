const KpiCard = ({
  title,
  value,
  growth,
  color,
}) => {
  return (
    <div
      className={`rounded-2xl p-4 md:p-6 shadow-lg text-white ${color}`}
    >
      <h3 className="text-sm opacity-80">
        {title}
      </h3>

      <h2 className="text-2xl md:text-3xl font-bold mt-2 md:mt-3">
        {value}
      </h2>

      <p className="mt-2 md:mt-3 text-sm opacity-90">
        {growth}
      </p>
    </div>
  );
};

export default KpiCard;