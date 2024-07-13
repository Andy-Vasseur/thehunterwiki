declare module "../../utils/firestore.js" {
  export interface Reserve {
    id: string;
    name: string;
    description: string;
    image: string;
    link: string;
    location: number;
  }

  export interface Animal {
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

  export const getAllReserves: (collectionName: string) => Promise<Reserve[]>;
  export const getReserveByID: (
    collectionName: string,
    id: string
  ) => Promise<Reserve>;
  export const getAllAnimals: (collectionName: string) => Promise<Animal[]>;
}
