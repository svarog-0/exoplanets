import { Planet } from "../../../models/planet.model";
import { getPlanet, getPlanets } from "../../../services/data.service";

export const resolvers = {
  Query: {
    getPlanets: async () => {
      try {
        const planets: Planet[] = await getPlanets()
        return planets.map(({pl_name, hostname}) => ({
            name: pl_name,
            hostname: hostname
        }));
      } catch (error) {
        throw error;
      }
    },
    getPlanet: async (_: any, args: any) => {
      try {
        const planet: Planet = await getPlanet(args)
        if(!planet) return null
        return {
          name: planet.pl_name,
          hostname: planet.hostname,
        };
      } catch (error) {
        throw error;
      }
    }
  }
};
