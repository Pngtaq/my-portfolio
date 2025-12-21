export default function MyQuote() {
  return (
    <div className="text-xs bg-linear-to-br from-blue-400 via-blue-500 to-blue-600 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900 text-white rounded-lg py-1.5 px-3 hidden lg:block transition-colors duration-500 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:transition-shadow">
      <p className="">
        “Goals are good for setting a direction, but systems are best for making
        progress.”
      </p>
      <p className="text-end">- James Clear</p>
    </div>
  );
}
