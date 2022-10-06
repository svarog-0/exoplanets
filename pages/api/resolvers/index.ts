import { PlanetFilter } from "../../../models/filter.model";
import { Page, Planet } from "../../../models/planet.model";
import { getPlanet, getPlanets, getGetCount } from "../../../services/data.service";

export const resolvers = {
  Query: {
    getPlanets: async (_: any, args: any) : Promise<Page<Planet>> => {
      try {
        const planets: Planet[] = (await getPlanets(args.filter)).map(planet => {
          for(const k in planet) {
            const key = k as keyof Planet
            if(!planet[key])
              planet[key] = null as never
            }
          return (planet)
        });

        return {count: planets.length, content: planets}
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
