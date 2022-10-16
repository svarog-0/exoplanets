import { Page, Planet } from "../../../models/planet.model";
import { getPlanet, getPlanets } from "../../../services/data.service";

export const resolvers = {
  Query: {
    Planets: async (_: any, args: any) : Promise<Page<Planet>> => await getPlanets(args.pagination ,args.filter, args.sort),
    Planet: async (_: any, args: any) => {
        const planet: Planet = await getPlanet(args)
        if(!planet) return null
        return planet;
    }
  }
};
