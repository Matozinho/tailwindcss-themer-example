"use client";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen gap-16">
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Without Tailwindcss-themer</h2>
        <div className="flex gap-2">
          <div className="bg-tailwind-with-theme p-2 rounded">
            <p className="text-example">custom color example</p>
          </div>
          <div className="bg-tailwind-with-opacity p-2 rounded">
            <p className="text-example">opacity example</p>
          </div>
          <div className="bg-tailwind-normal-color p-2 rounded">
            <p className="text-example">normal color example</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">With Tailwindcss-themer</h2>
        <div className="flex gap-2">
          <div className="bg-with-theme p-2 rounded">
            <p>Theme func example</p>
          </div>
          <div className="bg-with-opacity p-2 rounded">
            <p>Opacity example</p>
          </div>
          <div className="bg-working p-2 rounded">
            <p>Working example</p>
          </div>
        </div>
      </section>
    </div>
  );
}
