const StatsCard = ({
  title,
  value,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6">

      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <p className="text-2xl md:text-3xl font-bold mt-2 text-slate-800">
        {value}
      </p>

    </div>
  );
};

export default StatsCard;