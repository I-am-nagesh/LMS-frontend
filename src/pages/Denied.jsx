import { useNavigate } from "react-router-dom";

function Denied() {
  const navigate = useNavigate();

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-semibold text-white tracking-widest">403</h1>
      <div className="bg-black text-white px-2 text-sm rounded absolute rotate-12">
        Access Denied
      </div>
      <button onClick={() => navigate(-1)} className="mt-5">
        <span className="relative block px-8 py-3 border border-current bg-yellow-500 text-white hover:bg-yellow-800">
          Go Back
        </span>
      </button>
    </main>
  );
}
export default Denied;