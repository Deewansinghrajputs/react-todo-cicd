function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-white text-2xl font-bold">
          Todo App
        </h1>

        <p className="text-white">
          CI/CD Learning
        </p>
      </div>
    </nav>
  );
}

export default Navbar;