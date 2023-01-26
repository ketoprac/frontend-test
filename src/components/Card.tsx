const Card = (props: any) => {
  const { repoTitle, repoDesc, repoStars } = props;
  return (
    <div className="bg-gray-100 flex justify-between p-3 min-h-24 w-64 rounded">
      <div className="overflow-hidden">
        <p className="text-lg font-medium">{repoTitle}</p>
        <p className="text-sm">
          {repoDesc}
        </p>
      </div>
      <div className="font-medium text-sm">{repoStars}*</div>
    </div>
  );
};

export default Card;
