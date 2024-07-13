// Imports
import { useEffect, useState } from "react";
import { getAllReserves } from "../../utils/firestore.js";

function Homepage() {
  const [reserves, setReserves] = useState<Reserve[]>([]);

  reserves.sort((a, b) => a.location - b.location);

  interface Reserve {
    id: string;
    location: number;
    link: string;
    image: string;
    name: string;
  }

  useEffect(() => {
    try {
      getAllReserves("reserves").then((reserves: Reserve[]) => {
        setReserves(reserves);
      });
    } catch (error) {
      console.error("Error getting reserves: ", error);
    }
  }, []);

  return (
    <div className="mx-auto py-4 h-full min-h-screen max-h-screen container bg-zinc-100 overflow-y-scroll">
      <h1 className="my-6 text-6xl text-center font-bold">LeBonChasseur</h1>
      <p className="mx-auto w-4/5 text-xl leading-relaxed">
        Bienvenue sur LeBonChasseur, votre guide incontournable pour chasser
        dans diverses réserves. Trouvez des conseils sur les différents
        calibres, le poids maximal des animaux et bien plus. Optimisez vos
        aventures de chasse grâce à nos informations précises et pratiques.
      </p>

      <ul className="mx-6 my-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {reserves.map((reserve: Reserve) => (
          <li className="m-4" key={reserve.id}>
            <a
              href={`/reserves/${reserve.id}`}
              className="relative block w-[300px] h-[300px] rounded-[10px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:scale-[1.05] Image hover:brightness-[0.6]"
            >
              <img
                src={reserve.image}
                alt={reserve.name}
                className="Image w-full h-full object-cover transition-all duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4 h-[80px] text-white text-center bg-[rgba(0,0,0,0.5)] backdrop-blur-[2px]">
                <h2 className="text-lg font-semibold">{reserve.name}</h2>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exports
export default Homepage;
