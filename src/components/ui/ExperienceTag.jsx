export default function ExperienceTag(props) {
  const { title, company, year, active } = props;
  return (
    <>
      <div className="group ">
        <div className="flex gap-x-2 items-start">
          <div
            className={`ml-0.5 mt-1 h-3 w-3 rounded-full border-2 transition-colors ${
              active
                ? "bg-black border-black dark:bg-white dark:border-gray-300"
                : "bg-white border-gray-300 group-hover:bg-black group-hover:border-black dark:border-gray-700 dark:bg-black dark:group-hover:bg-white dark:group-hover:border-white"
            } z-1`}
          />
          <div className="w-full space-y-1">
            <p className="text-sm text-bold transition-colors">{title}</p>
            <p className="flex items-center justify-between text-xs transition-colors">
              <span>{company}</span>
              <span className="border border-gray-300 dark:border-gray-700 px-1 py-0.5 rounded-full">
                {year}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
