function PokemonDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf4ff] to-[#fbe7f3] py-4 sm:py-6 md:py-8 px-3 sm:px-4 overflow-x-hidden">
      <div className="container mx-auto max-w-4xl">

        <div className="mb-4 sm:mb-6 h-11 w-28 sm:w-32 bg-gray-200 rounded-lg animate-pulse"></div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 sm:px-6 py-6 sm:py-8">
            <div className="h-7 sm:h-8 md:h-10 w-36 sm:w-44 md:w-48 bg-white/20 rounded mx-auto mb-1 sm:mb-2 animate-pulse"></div>
            <div className="h-5 sm:h-6 w-20 sm:w-24 bg-white/20 rounded mx-auto animate-pulse"></div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">

            <div className="md:hidden space-y-4 sm:space-y-6">

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-200 animate-pulse mb-3 sm:mb-4"></div>
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="h-5 sm:h-6 w-16 sm:w-20 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-5 sm:h-6 w-16 sm:w-20 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>


              <div className="space-y-2 sm:space-y-3">
                <div className="h-4 sm:h-5 w-28 sm:w-32 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 sm:h-5 w-28 sm:w-32 bg-gray-200 rounded animate-pulse"></div>
              </div>

              <div>
                <div className="h-5 sm:h-6 w-28 sm:w-32 bg-gray-200 rounded mb-3 sm:mb-4 animate-pulse"></div>
                <div className="space-y-2 sm:space-y-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-16 sm:w-20 h-3 sm:h-4 bg-gray-200 rounded animate-pulse flex-shrink-0"></div>
                      <div className="flex-1 h-2 bg-gray-200 rounded animate-pulse min-w-0"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:gap-8">

              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gray-200 animate-pulse mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="h-6 w-32 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse flex-shrink-0"></div>
                        <div className="flex-1 h-2 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="h-6 w-32 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <div className="h-6 w-32 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailSkeleton;

