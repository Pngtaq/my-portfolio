export default function RecommendationCard(props) {
  const { description, name, job } = props;

  return (
    <div className="space-y-3">
      <p className="text-[13px] font-serif leading-relaxed text-gray-700 dark:text-gray-300 line-clamp-4 tracking-wide font-extralight transition-colors duration-300">
        {description}
      </p>

      <div className="text-xs border-t border-gray-300 dark:border-gray-700 pt-3 transition-colors duration-300">
        <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
        <p className="text-gray-600 dark:text-gray-400">{job}</p>
      </div>
    </div>
  );
}
