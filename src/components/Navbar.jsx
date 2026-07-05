// import { Github } from "lucide-react";

function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
        <div>
          <h1 className="text-2xl font-bold text-white">
            🚀 React Todo CI/CD
          </h1>
        </div>
{/* 
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Github size={18} />
          GitHub
        </a> */}
      </div>
    </nav>
  );
}

export default Navbar;