import { Page, Planet } from "../../../models/planet.model";
import { getPlanet, getPlanets, getGetCount } from "../../../services/data.service";

export const resolvers = {
  Query: {
    getPlanets: async (_: any, args: any) : Promise<Page<Planet>> => {
      try {
          return await getPlanets(args.pagination ,args.filter, args.sort);
      } catch (error) {
        throw error;
      }
    },
    getPlanet: async (_: any, args: any) => {
      try {
        const planet: Planet = await getPlanet(args)
        if(!planet) return null
        return planet;
      } catch (error) {
        throw error;
      }
    },
    countPlanets: async () => {
      try {
        return await getGetCount();
      } catch (error) {
        throw error;
      }
    }
  }
};
