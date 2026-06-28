const Input = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2.5 md:py-3 outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};

export default Input;