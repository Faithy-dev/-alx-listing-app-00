// components/layout/Header.tsx

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">StayFinder</div>
      <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
        {["Rooms", "Mansion", "Countryside", "Beachfront"].map((item) => (
          <span key={item} className="text-sm text-gray-600 px-2 py-1 border rounded-full">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <input type="text" placeholder="Search..." className="px-3 py-1 border rounded" />
        <button className="text-blue-600 font-medium">Sign In</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

