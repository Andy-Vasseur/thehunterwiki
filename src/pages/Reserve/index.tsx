// Imports
import { useCallback, useEffect, useState } from "react";
import { getReserveByID, getAllAnimals } from "../../utils/firestore.js";
import { useParams } from "react-router-dom";

function Reserve() {
  const [reserve, setReserve] = useState<Reserve | null>(null);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const { reserveid } = useParams();

  interface Reserve {
    id: string;
    name: string;
    description: string;
    image: string;
    link: string;
    location: number;
  }

  interface Animal {
    id: string;
    name: string;
    species: string;
    image: string;
    location: number;
  }

  const fetchReserveAndAnimals = useCallback(async () => {
    try {
      const reserveData = await getReserveByID("reserves", reserveid);
      setReserve(reserveData);

      if (reserveData) {
        const allAnimals = await getAllAnimals("animals");
        const filteredAnimals: Animal[] = allAnimals.filter(
          (animal: Animal) => animal.location === reserveData.location
        );
        setAnimals(filteredAnimals);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, [reserveid]);

  useEffect(() => {
    fetchReserveAndAnimals();
  }, [fetchReserveAndAnimals]);

  return (
    <div className="mx-auto py-4 h-full min-h-screen max-h-screen container bg-zinc-100 overflow-y-scroll">
      <h1 className="my-6 text-6xl text-center font-bold">
        {reserve ? reserve.name : "Name"}
      </h1>
      <img
        src={reserve ? reserve.image : "Image"}
        alt={reserve ? reserve.name : "Image name"}
        title={reserve ? reserve.name : "Image name"}
        className="mx-auto my-8 w-64 h-64 rounded-full drop-shadow-md"
      />
      <p className="mx-auto w-4/5 text-xl leading-relaxed">
        {reserve ? reserve.description : "Description"}
      </p>

      <ul className="mx-6 my-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {animals.map((animal) => (
          <li className="m-4" key={animal.id}>
            <a
              href={`/reserves/^${reserveid}/${animal.id}`}
              className="relative block w-[300px] h-[300px] rounded-[10px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:scale-[1.05] Image hover:brightness-[0.6]"
            >
              <img
                src={animal.image}
                alt={animal.name}
                className="Image w-full h-full object-cover transition-all duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center px-4 py-8 h-[50px] text-white text-center bg-[rgba(0,0,0,0.5)] backdrop-blur-[2px]">
                <h2 className="text-lg font-semibold">{animal.name}</h2>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reserve;
