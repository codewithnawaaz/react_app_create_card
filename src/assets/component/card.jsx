import react from "react";
function Card({ user, id, handelRemover }) {
  return (
    <div className="p-2 w-[22vw]  bg-zinc-300 flex items-center flex-col">
      <div className="w-[4vw] h-[4vw] bg-blue-300 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={user.image} alt="" />
      </div>
      <h1 className="text-semibold text-lg mt-2">{user.name}</h1>
      <h2 className="opacity-25">Mail:{user.email}</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Exercitationem, odit.
      </p>
      <button
        onClick={() => handelRemover(id)}
        className="px-3 py-1 bg-red-600 text-white rounded-lg mt-2"
      >
        Remove it
      </button>
    </div>
  );
}

export default Card;
