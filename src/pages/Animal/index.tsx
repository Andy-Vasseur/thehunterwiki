// Imports
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllAnimals } from "../../utils/firestore.js";

function Animal() {
  const [animal, setAnimal] = useState<Animal | null>(null);
  const { animalid } = useParams();

  interface Animal {
    id: string;
    name: string;
    silver: number;
    gold: number;
    diamond: number;
    image: string;
    max_weight: number;
    level: number;
    class: string;
  }

  const fetchAnimal = useCallback(async () => {
    try {
      const allAnimals = await getAllAnimals("animals");
      const animalData = allAnimals.find(
        (animal: Animal) => animal.id === animalid
      );
      setAnimal(animalData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, [animalid]);

  useEffect(() => {
    fetchAnimal();
  }, [fetchAnimal]);

  return (
    <div className="mx-auto py-4 h-full min-h-screen max-h-screen container bg-zinc-100 overflow-y-scroll">
      <h1 className="my-6 text-6xl text-center font-bold">
        {animal ? animal.name : "Name"}
      </h1>
      <img
        src={animal ? animal.image : "Image"}
        alt={animal ? animal.name : "Image name"}
        title={animal ? animal.name : "Image name"}
        className="mx-auto my-8 w-64 h-64 rounded-full drop-shadow-md"
      />
      <table className="mx-auto w-4/5 text-xl table-fixed border-collapse">
        <thead>
          <tr>
            <th className="h-[50px] text-white border-2 border-solid border-black font-bold bg-blue-800">
              Argent
            </th>
            <th className="h-[50px] text-white border-2 border-solid border-black font-bold bg-blue-800">
              Or
            </th>
            <th className="h-[50px] text-white border-2 border-solid border-black font-bold bg-blue-800">
              Diamant
            </th>
            <th className="h-[50px] text-white border-2 border-solid border-black font-bold bg-blue-800">
              Poids maximal
            </th>
            <th className="h-[50px] text-white border-2 border-solid border-black font-bold bg-blue-800">
              Niveaux
            </th>
            <th className="h-[50px] text-white border-2 border-solid border-black font-bold bg-blue-800">
              Classe
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="h-[50px] text-center border-2 border-solid border-black">
              {animal ? animal.silver : "Silver"}
            </td>
            <td className="h-[50px] text-center border-2 border-solid border-black">
              {animal ? animal.gold : "Gold"}
            </td>
            <td className="h-[50px] text-center border-2 border-solid border-black">
              {animal ? animal.diamond : "Diamond"}
            </td>
            <td className="h-[50px] text-center border-2 border-solid border-black">
              {animal ? animal.max_weight : "Max weight"}
            </td>
            <td className="h-[50px] text-center border-2 border-solid border-black">
              {animal ? animal.level : "Level"}
            </td>
            <td className="h-[50px] text-center border-2 border-solid border-black">
              {animal ? animal.class : "Class"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Exports
export default Animal;
