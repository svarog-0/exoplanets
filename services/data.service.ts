import path from 'path'
import fsPromises from 'fs/promises';
import { Planet } from '../models/planet.model';
import { PlanetFilter } from '../models/filter.model';

export async function getPlanets(filter: PlanetFilter): Promise<Planet[]> {
    const planets = await getPlanetsInternal()
    return planets.filter(p => {
        let match = false;
        for (const fieldKey in filter) {
            if(planetFilterMatch(p, filter, fieldKey)){
                match = true;
                continue;
            }

            match = false;
            break;
        }

        return match
    })
}

export async function getGetCount(): Promise<number> {
    return (await getPlanetsInternal()).length
}

export async function getPlanet(name: string): Promise<Planet> {
    if (!name) throw Error("Name cannot be empty")
    const planets: Planet[] = await getPlanetsInternal();

    return planets.filter(x => x.pl_name === name)[0]
}

async function getPlanetsInternal(): Promise<Planet[]> {
    const filePath: string = path.join(process.cwd(), 'data/db.json')
    const jsonData = await fsPromises.readFile(filePath);

    return JSON.parse(jsonData.toString())
}

function planetFilterMatch(p: Planet, filter: PlanetFilter, skey: string) {
    const key = skey as keyof Planet
    const condition = Object.keys(filter[key])[0]; //Only one condition per field, first is considered only rest are ignored
    const value = Object.values(filter[key])[0]; // Value of condition

    switch (condition) {
        case 'eq':
            return p[key] === value
        case 'ne':
            return p[key] !== value
        case 'like':
            return p[key].toString().indexOf(value.toString()) > -1
        case 'gt':
            if (typeof value !== 'number') throw Error("gt - Greater Then condition requires a number.")
            return (p[key] as number) > (value as number)
        case 'lt':
            if (typeof value !== 'number') throw Error("lt - Less Then condition requires a number.")
            return (p[key] as number) < (value as number)
        case 'ge':
            if (typeof value !== 'number') throw Error("gt - Greater or Equal condition requires a number.")
            return (p[key] as number) >= (value as number)
        case 'le':
            if (typeof value !== 'number') throw Error("le - Less or Equal condition requires a number.")
            return (p[key] as number) <= (value as number)
        default:
            return false
    }
}