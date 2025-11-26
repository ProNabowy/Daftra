import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isPaginationView = location.pathname === "/";

  const isLoadMoreView = location.pathname === "/load-more";

  // Hide header on detail pages
  if (location.pathname.startsWith("/pokemon/")) {
    return <></>;
  }

  return (
    <header className="py-4 sm:py-6 md:py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Pokédex
          </h1>
        </div>

        <p className="text-center text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8 px-2">
          Discover and explore Pokemon with infinite scroll.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2">
          <Link
            to="/"
            className={`
              min-h-[44px] flex items-center justify-center
              px-4 sm:px-6 md:px-8 py-3 rounded-lg font-semibold 
              text-sm sm:text-base transition-all duration-200
              ${
                isPaginationView
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md active:bg-gray-100"
              }
            `}
          >
            Page Controls
          </Link>
          <Link
            to="/load-more"
            className={`
              min-h-[44px] flex items-center justify-center
              px-4 sm:px-6 md:px-8 py-3 rounded-lg font-semibold 
              text-sm sm:text-base transition-all duration-200
              ${
                isLoadMoreView
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md active:bg-gray-100"
              }
            `}
          >
            Infinite Scroll
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
