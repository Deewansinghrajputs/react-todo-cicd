import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Welcome to React Todo CI/CD 🚀
        </h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;