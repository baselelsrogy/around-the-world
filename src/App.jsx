import Header from "./components/Header";
import RegionMenu from "./components/RegionMenu";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <main className="font-inter min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 md:h-14 md:flex-row md:gap-0">
        <SearchInput />
        <RegionMenu />
      </div>
    </main>
  );
}

export default App;
