const Pagination = ({ pagination, onPageChange }) => {
  const { current_page, last_visible_page, has_next_page } = pagination;

  return (
    <div className="flex justify-center items-center gap-4 py-5">
      <button
        onClick={() => onPageChange(current_page - 1)}
        disabled={current_page <= 1}
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: Math.min(5, last_visible_page) }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded ${
              current_page === page
                ? "bg-red-700 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(current_page + 1)}
        disabled={!has_next_page}
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
