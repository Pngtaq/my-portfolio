import TechStackPageTag from "./TechStackPageTag";

export default function TechStackTagContainer(props) {
  const { title, stack } = props;
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {stack.map((stack) => (
          <TechStackPageTag stack={stack} />
        ))}
      </div>
    </div>
  );
}
