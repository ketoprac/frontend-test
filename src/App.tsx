import { useRef, useState } from "react";
import Disclosure from "./components/Disclosure";
import useSWR from "swr";
import { fetcher } from "./utils/fetcher";

function App() {
  const searchInputRef: any = useRef(null);
  const [query, setQuery] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQuery(searchInputRef.current.value);
  }

  const { data: users, error, isLoading } = useSWR(`${import.meta.env.VITE_API_URL}search/users?q=${query}&per_page=5`, fetcher)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="font-mono text-2xl font-bold text-gray-800 mb-4 text-center">Github Repositories Explorer</h1>
      <form className="mb-2 flex flex-col gap-2 md:flex-row" onSubmit={handleSubmit}>
        <input className="border p-2 rounded bg-gray-100 w-72 md:w-11/12" type="text" placeholder="Enter username..." ref={searchInputRef} />
        <input className="border p-2 cursor-pointer rounded text-white bg-sky-600 hover:bg-sky-700" type="submit" value="Search" />
      </form>
      {query && <p className="mb-2 text-sm">Showing users for "<span className="font-medium">{query}</span>"</p>}
      <div>
        {
        !query ? ( null ) :
        error ? ( <p>Oh no, there was an error</p> ) :
        isLoading ? (<p>Loading...</p>) :
        users.items && users.items.length > 1 ? 
          (
            users.items.map((user: any) => (
              <Disclosure title={user.login} />
            ))
          )
          :
          (<p>Not found</p>)
        }
      </div>
    </div>
  );
}

export default App;
