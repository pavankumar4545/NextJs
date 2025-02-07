export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h2 className="text-sm sm:text-lg font-semibold">Dashboard</h2>
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="text-xs sm:text-sm">9 February 2024</span>
        <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gray-600"></div>
      </div>
    </header>
  );
}