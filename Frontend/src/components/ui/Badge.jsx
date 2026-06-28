
const Badge = ({ type, text }) => {
  const styles = {
    new: "bg-yellow-100 text-yellow-700",
    contacted: "bg-blue-100 text-blue-700",
    converted: "bg-green-100 text-green-700",
    lost: "bg-red-100 text-red-700",

    website: "bg-indigo-100 text-indigo-700",
    meta: "bg-purple-100 text-purple-700",
    google: "bg-emerald-100 text-emerald-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[type] || "bg-gray-100 text-gray-700"
      }`}
    >
      {text}
    </span>
  );
};

export default Badge;