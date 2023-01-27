import Star from "../assets/star.svg";

const Card = (props: any) => {
  const { repoTitle, repoDesc, repoStars, repoUrl } = props;
  return (
    <a href={repoUrl} target="_blank">
    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-start justify-between py-3 px-2 min-h-24 w-72 rounded">
      <div className="overflow-hidden w-10/12">
        <p className="text-lg font-medium">{repoTitle}</p>
        <p className="text-sm text-clip text-gray-800">
          {repoDesc}
        </p>
      </div>
      <div className="flex justify-center items-end gap-1 w-2/12">
        <p className="font-medium text-xs text-right">{repoStars.toLocaleString()}</p>
        <img src={Star} className="h-4" />
      </div>
    </div>
    </a>
  );
};

export default Card;
