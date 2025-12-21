export default function CertificationTag(props) {
  const { certificateName, certificateFrom } = props;
  return (
    <div className="bg-gray-100 px-2 py-1.5 rounded-lg hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-900">
      <p className="text-[0.75rem] font-medium">{certificateName}</p>
      <p className="text-[0.7rem] font-light">{certificateFrom}</p>
    </div>
  );
}
