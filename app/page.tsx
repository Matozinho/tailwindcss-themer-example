export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="bg-tailwind-with-theme p-2 rounded">
        <p className="text-example">
          without tailwindcss-themer: theme example
        </p>
      </div>
      <div className="bg-tailwind-with-opacity p-2 rounded">
        <p className="text-example">
          without tailwindcss-themer: opacity example
        </p>
      </div>
      <div className="bg-with-theme p-2 rounded">
        <p className="text-example">with tailwindcss-themer: opacity example</p>
      </div>
      <div className="bg-with-opacity p-2 rounded">
        <p className="text-example">
          with tailwindcss-themer: Color alias example
        </p>
      </div>
    </div>
  );
}
