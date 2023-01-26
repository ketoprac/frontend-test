import axios from "axios";
import { useRef } from "react";
import Disclosure from "./components/Disclosure";
import useSWR from "swr";
import { fetcher } from "./utils/fetcher";

function App() {
  const searchInputRef: any = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(searchInputRef.current.value);
  }

  const { data: users, error, isLoading } = useSWR(`${import.meta.env.VITE_API_URL}search/users?q=facebook&per_page=5`, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Github Repositories Explorer</h1>
      <form className="mb-2" onSubmit={handleSubmit}>
        <input className="border p-2 rounded bg-gray-100 mr-1" type="text" placeholder="Enter username..." ref={searchInputRef} />
        <input className="border p-2 cursor-pointer rounded text-white bg-sky-600" type="submit" value="Search" />
      </form>
      <div>
        {users.items && users.items.length > 1 ? 
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
