export default function ExperienceTag(props) {
  const { title, company, year, active } = props;
  return (
    <>
      <div>
        <div className="flex gap-x-2 items-start">
          <div
            className={`ml-0.5 mt-1 h-3 w-3 rounded-full border-2 ${
              active
                ? "bg-black border-black"
                : "bg-white border-gray-300 hover:bg-black"
            } z-1`}
          />
          <div className="w-full space-y-1">
            <p className="text-sm text-bold">{title}</p>
            <p className="flex items-center justify-between text-xs">
              <span>{company}</span>
              <span className="border border-gray-300 px-1 py-0.5 rounded-full">
                {year}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
