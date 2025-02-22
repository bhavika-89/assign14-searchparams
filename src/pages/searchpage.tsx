import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/searchbar";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Search Here</h1>
      <SearchBar />
      {query && <p className="mt-4">You searched for: <strong>{query}</strong></p>}
    </div>
  );
};

export default SearchPage;
