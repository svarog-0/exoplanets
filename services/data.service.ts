import path from "path";
import fsPromises from "fs/promises";
import { Page, Planet } from "../models/planet.model";
import { Pagination, PlanetFilter, Sort } from "../models/filter.model";
const DATA_PATH = "./data/db.json";
let dataCache : Promise<Planet[]> | null = null

export async function getPlanets(
  pagination: Pagination,
  filter: PlanetFilter,
  sort: Sort
): Promise<Page<Planet>> {
  let planets = await getPlanetsInternal();
  let page: Page<Planet> = { count: 0, content: [] };
  if (filter) planets = filterPlanets(planets, filter);
  page.count = planets.length;
  if (sort) sortPlanets(sort, planets);
  if (pagination) page.content = createPage(pagination, planets);

  return page;
}

export async function getGetCount(): Promise<number> {
  return (await getPlanetsInternal()).length;
}

export async function getPlanet(name: string): Promise<Planet> {
  if (!name) throw Error("Name cannot be empty");
  const planets: Planet[] = await getPlanetsInternal();

  return planets.filter((x) => x.pl_name === name)[0];
}

async function getPlanetsInternal(): Promise<Planet[]> {
  if(!dataCache){
    console.log("loading data from file...")
    const jsonData = await fsPromises.readFile(DATA_PATH)
    dataCache = JSON.parse(jsonData.toString())
  }

  return dataCache as Promise<Planet[]>;
}

function planetFilterMatch(p: Planet, filter: PlanetFilter, skey: string) {
  const key = skey as keyof Planet;
  const condition = Object.keys(filter[key])[0]; //Only one condition per field, first is considered only rest are ignored
  const value = Object.values(filter[key])[0]; // Value of condition

  switch (condition) {
    case "eq":
      return p[key] === value;
    case "ne":
      return p[key] !== value;
    case "like":
      return p[key].toString().indexOf(value.toString()) > -1;
    case "gt":
      if (typeof value !== "number")
        throw Error("gt - Greater Then condition requires a number.");
      return (p[key] as number) > (value as number);
    case "lt":
      if (typeof value !== "number")
        throw Error("lt - Less Then condition requires a number.");
      return (p[key] as number) < (value as number);
    case "ge":
      if (typeof value !== "number")
        throw Error("gt - Greater or Equal condition requires a number.");
      return (p[key] as number) >= (value as number);
    case "le":
      if (typeof value !== "number")
        throw Error("le - Less or Equal condition requires a number.");
      return (p[key] as number) <= (value as number);
    default:
      return false;
  }
}

function filterPlanets(planets: Planet[], filter: PlanetFilter): Planet[] {
  return planets.filter((p) => {
    let match = false;
    for (const fieldKey in filter) {
      if (planetFilterMatch(p, filter, fieldKey)) {
        match = true;
        continue;
      }
      match = false;
      break;
    }
    return match;
  });
}

function createPage(pagination: Pagination, planets: Planet[]) {
  if (pagination.offset >= planets.length) planets = [];
  if (pagination.offset < 0) pagination.offset = 0;
  if (planets.length - pagination.offset - pagination.size < 0)
    planets = planets.slice(pagination.offset);
  else
    planets = planets.slice(
      pagination.offset,
      +pagination.offset + pagination.size
    );

  return planets;
}

function sortPlanets(sort: Sort, planets: Planet[]) {
  type PlanetKey = keyof Planet;
  const fieldKey = sort.field.toString() as PlanetKey;
  planets.sort((a, b) => {
    if (a[fieldKey] > b[fieldKey])
      return sort.direction.toString() == "DESC" ? -1 : 1;
    if (a[fieldKey] < b[fieldKey])
      return sort.direction.toString() == "DESC" ? 1 : -1;

    return 0;
  });
}
