export const Footer = () => {
  return (
    <footer className="bg-[#F9F6F0]">
      <div className="container grid grid-cols-1 gap-6 py-12 sm:grid-cols-4 lg:grid-cols-8">
        <div className="flex flex-col gap-2">
          <p className="mb-2 font-semibold">Get In Touch</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 font-semibold">About</p>
        </div>
        <div className="col-span-4 hidden flex-col items-center justify-center gap-4 lg:flex">
          <p className="w-full text-center text-2xl font-semibold capitalize md:w-1/2 md:text-5xl">
            We find always in all ways.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 font-semibold">Social</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 font-semibold">FAQs</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:col-span-4 lg:hidden">
          <p className="w-full text-2xl font-semibold capitalize sm:text-center md:text-5xl">
            We find always in all ways.
          </p>
        </div>
      </div>
    </footer>
  );
};
