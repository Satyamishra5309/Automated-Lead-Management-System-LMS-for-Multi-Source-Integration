const FilterBar = ({
  search,
  setSearch,
}) => {
  return (
    <div className="bg-white p-3 md:p-4 rounded-xl shadow mb-6">

      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }

        placeholder="Search leads..."

        className="border px-3 md:px-4 py-2 rounded-lg w-full"
      />

    </div>
  );
};

export default FilterBar;