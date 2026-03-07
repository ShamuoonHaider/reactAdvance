export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-indigo-200 mb-10 text-zinc-600 font-bold px-6 py-3 border-2 border-black  rounded-none transition-all duration-200 hover:shadow-[-4px_4px_0px_0px_rgba(255,0,0,1),-8px_8px_0px_0px_rgba(0,128,0,1)] hover:translate-x-2 hover:-translate-y-2 ">
      {children}
    </button>
  );
};
