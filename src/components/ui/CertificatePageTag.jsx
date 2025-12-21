import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function CertificatePageTag(props) {
  const { certificateName, certificateFrom, index = 0 } = props;
  return (
    <motion.div
      className="border border-gray-300 rounded-xl px-4.5 py-4 duration-300 hover:shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)] hover:transition-shadow dark:bg-[#111] dark:border-[#333]"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn", delay: index * 0.07 }}
    >
      <Link to="" className="space-y-2">
        <h3 className="font-semibold text-lg">{certificateName}</h3>
        <p className="text-sm">{certificateFrom}</p>
      </Link>
    </motion.div>
  );
}
