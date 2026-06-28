const ReportCard = ({
  title,

  description,

  color,

  onClick
}) => {

  return (

    <div
      className={`rounded-2xl p-5 md:p-8 text-white shadow-lg ${color}`}
    >

      <h2 className="text-xl md:text-2xl font-bold">

        {title}

      </h2>


      <p className="mt-4 opacity-90 text-sm md:text-base">

        {description}

      </p>


      <button

        onClick={onClick}

        className="mt-6 bg-white text-black px-4 md:px-6 py-3 rounded-xl font-semibold w-full sm:w-auto"
      >

        Download

      </button>

    </div>
  );
};

export default ReportCard;