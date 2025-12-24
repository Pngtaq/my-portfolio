export default function ProjectsTag(props) {
  const { projectName, description, link } = props;
  return (
    <div className="border p-2 border-gray-300 dark:border-[#333] rounded-lg space-y-1 hover:-translate-y-0.5 duration-500 hover:duration-200 hover:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.1)] ease-in-out transition-all">
      <h4 className="font-semibold text-sm">{projectName}</h4>
      <p className="text-xs ">{description}</p>
      <span className="text-[0.73rem] font-light rounded-lg bg-gray-100 px-1.5 py-1 dark:bg-black tracking-wide">
        {link?.replace(/^https?:\/\//, "")}
      </span>
    </div>
  );
}
