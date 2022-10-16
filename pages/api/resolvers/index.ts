import { Filter, Pagination, PlanetFilter, Sort } from "../../../models/filter.model";
import { Page, Planet } from "../../../models/planet.model";
import { getPlanet, getPlanets } from "../../../services/data.service";

export const resolvers = {
  Query: {
    Planets: async (_: any, args: {pagination: Pagination, filter: PlanetFilter, sort: Sort}) : Promise<Page<Planet>> => getPlanets(args.pagination ,args.filter, args.sort),
    Planet: async (_: any, args: any) => {
        const planet: Planet = await getPlanet(args)
        if(!planet) return null
        return planet;
    }
  }
};


