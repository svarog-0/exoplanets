import path from 'path'
import fsPromises from 'fs/promises';
import { Planet } from '../models/planet.model';

export async function getPlanets(): Promise<Planet[]>{
return await getPlanetsInternal()
}

export async function getPlanet(name: string) : Promise<Planet> {
    if(!name) throw Error("Name cannot be empty")
    const planets: Planet[] = await getPlanetsInternal();
    return planets.filter(x => x.pl_name === name)[0]
}

async function getPlanetsInternal() : Promise<Planet[]> {
    const filePath: string = path.join(process.cwd(), 'data/db.json')
    const jsonData = await fsPromises.readFile(filePath);
    return JSON.parse(jsonData.toString())
}