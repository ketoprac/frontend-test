import { useRef, useState } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import { useUser } from "../hooks/useUser";
import Users from "./Users";

function MainView() {
  const searchInputRef: any = useRef(null);
  const [query, setQuery] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQuery(searchInputRef.current.value);
  };

  const { users, error, isLoading } = useUser(query);

  return (
    <Layout>
      <h1 className="font-mono text-2xl font-bold text-gray-800 mb-4 text-center">
        Github Repositories Explorer
      </h1>
      <Form handleSubmit={handleSubmit} searchInputRef={searchInputRef} />
      {query && (
        <p className="mb-2 text-sm">
          Showing users for "<span className="font-medium">{query}</span>"
        </p>
      )}
      <Users query={query} error={error} isLoading={isLoading} users={users} />
    </Layout>
  );
}

export default MainView;
