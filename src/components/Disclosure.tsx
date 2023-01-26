import { useState } from "react";
import Card from "./Card";
import useSWR from 'swr';
import { fetcher } from "../utils/fetcher";

const Disclosure = (props: any) => {
  const { title } = props;
  const username = title;
  const { data: repos, error, isLoading } = useSWR(`${import.meta.env.VITE_API_URL}users/${username}/repos`, fetcher);
  const [expand, setExpand] = useState(false);

  console.log(repos);

  return (
    <>
      <div
        onClick={() => setExpand((prevExpand) => !prevExpand)}
        className="border cursor-pointer justify-between border-gray-300 text-gray-800 font-semibold flex py-2 px-3 w-64 rounded shadow-sm mb-2 hover:bg-gray-50"
      >
        <button>{title}</button>
        <span>{expand ? "^" : "v"}</span>
      </div>
      {expand && (
        <div className="flex flex-col gap-1">
          {repos.map((repo: any) => (
          <Card repoTitle={repo.name} repoDesc={repo.description} repoStars={repo.stargazers_count} />
          ))}
        </div>
      )}
    </>
  );
};

export default Disclosure;
