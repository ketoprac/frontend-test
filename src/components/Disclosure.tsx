import { useState } from "react";
import Card from "./Card";
import ChevronDown from "../assets/chevron-down.svg";
import { useRepo } from "../hooks/useRepo";

const Disclosure = (props: any) => {
  const { title } = props;
  const username = title;
  const [expand, setExpand] = useState(false);
  const { repos, error, isLoading } = useRepo(username);

  return (
    <>
      <div
        onClick={() => setExpand((prevExpand) => !prevExpand)}
        className="border cursor-pointer justify-between border-gray-300 text-gray-800 font-semibold flex py-2 px-3 w-72 rounded shadow-sm mb-2 hover:bg-gray-50 items-center"
      >
        <button>{title}</button>
        <img
          className={`h-4 ${expand && "rotate-180"}`}
          src={ChevronDown}
          alt=""
        />
      </div>
      {expand && (
        <div className="flex md:flex-col gap-1">
          {error ? (
            <p>Error</p>
          ) : isLoading ? (
            <p>Loading...</p>
          ) : repos && repos.length > 1 ? (
            repos.map((repo: any) => (
              <Card
                repoTitle={repo.name}
                repoDesc={repo.description}
                repoStars={repo.stargazers_count}
                repoUrl={repo.html_url}
              />
            ))
          ) : (
            <p className="text-xs text-center mt-3 mb-4">Repo Not found</p>
          )}
        </div>
      )}
    </>
  );
};

export default Disclosure;
