import { gql } from "apollo-server-micro";
import { Pagination, PlanetFilter, Sort } from "./models/filter.model";
import { Page, Planet } from "./models/planet.model";
import { getPlanet, getPlanets } from "./services/data.service";

export const resolvers = {
  Query: {
    Planets: async (_: any, args: {pagination: Pagination, filter: PlanetFilter, sort: Sort}) : Promise<Page<Planet>> => getPlanets(args.pagination ,args.filter, args.sort),
    Planet: async (_: any, args: {name: string}) => {
        const planet: Planet = await getPlanet(args.name)
        if(!planet) return null
        return planet;
    }
  }
};

export const typeDefs = gql`

type Query {
  """
  Planets - Gets planets with filter, pagination and sorting
  """
  Planets(pagination: Pagination, filter: PlanetFilter, sort: Sort): PlanetPage
  """
  Planet  - Gets planet by name (pl_name)
  """
  Planet(name: String!): Planet
}

type PlanetPage {
  count: Int
  content: [Planet]
}

type Planet {
  """
  Planet Name
  """
  pl_name: String
  """
  Host Name
  """
  hostname: String
  """
  Planet Letter
  """
  pl_letter: String
  """
  HD ID
  """
  hd_name: String
  """
  HIP ID
  """
  hip_name: String
  """
  TIC ID
  """
  tic_id: ID
  """
  GAIA ID
  """
  gaia_id: String
  """
  Number of Stars
  """
  sy_snum: Float
  """
  Number of Planets
  """
  sy_pnum: Float
  """
  Number of Moons
  """
  sy_mnum: Float
  """
  Circumbinary Flag
  """
  cb_flag: Int
  """
  Discovery Method
  """
  discoverymethod: String
  """
  Discovery Year
  """
  disc_year: Float
  """
  Discovery Reference
  """
  disc_refname: String
  """
  Discovery Publication Date
  """
  disc_pubdate: String
  """
  Discovery Locale
  """
  disc_locale: String
  """
  Discovery Facility
  """
  disc_facility: String
  """
  Discovery Telescope
  """
  disc_telescope: String
  """
  Discovery Instrument
  """
  disc_instrument: String
  """
  Detected by Radial Velocity Variations
  """
  rv_flag: Int
  """
  Detected by Pulsar Timing Variations
  """
  pul_flag: Int
  """
  Detected by Pulsation Timing Variations
  """
  ptv_flag: Int
  """
  Detected by Transits
  """
  tran_flag: Int
  """
  Detected by Astrometric Variations
  """
  ast_flag: Int
  """
  Detected by Orbital Brightness Modulations
  """
  obm_flag: Int
  """
  Detected by Microlensing
  """
  micro_flag: Int
  """
  Detected by Eclipse Timing Variations
  """
  etv_flag: Int
  """
  Detected by Imaging
  """
  ima_flag: Int
  """
  Detected by Disk Kinematics
  """
  dkin_flag: Int
  """
  Controversial Flag
  """
  pl_controv_flag: Int
  """
  Orbital Period [days]
  """
  pl_orbper: Float
  """
  Orbital Period Upper Unc. [days]
  """
  pl_orbpererr1: Float
  """
  Orbital Period Lower Unc. [days]
  """
  pl_orbpererr2: Float
  """
  Orbital Period Limit Flag
  """
  pl_orbperlim: Float
  """
  Orbit Semi-Major Axis [au])
  """
  pl_orbsmax: Float
  """
  Orbit Semi-Major Axis Upper Unc. [au]
  """
  pl_orbsmaxerr1: Float
  """
  Orbit Semi-Major Axis Lower Unc. [au]
  """
  pl_orbsmaxerr2: Float
  """
  Orbit Semi-Major Axis Limit Flag
  """
  pl_orbsmaxlim: Float
  """
  Planet Radius [Earth Radius]
  """
  pl_rade: Float
  """
  Planet Radius Upper Unc. [Earth Radius]
  """
  pl_radeerr1: String
  """
  Planet Radius Lower Unc. [Earth Radius]
  """
  pl_radeerr2: String
  """
  Planet Radius Limit Flag
  """
  pl_radelim: Float
  """
  Planet Radius [Jupiter Radius]
  """
  pl_radj: Float
  """
  Planet Radius Upper Unc. [Jupiter Radius]
  """
  pl_radjerr1: String
  """
  Planet Radius Lower Unc. [Jupiter Radius]
  """
  pl_radjerr2: String
  """
  Planet Radius Limit Flag
  """
  pl_radjlim: Float
  """
  Planet Mass or Mass*sin(i) [Earth Mass]
  """
  pl_bmasse: Float
  """
  Planet Mass or Mass*sin(i) [Earth Mass] Upper Unc.
  """
  pl_bmasseerr1: Float
  """
  Planet Mass or Mass*sin(i) [Earth Mass] Lower Unc.
  """
  pl_bmasseerr2: Float
  """
  Planet Mass or Mass*sin(i) [Earth Mass] Limit Flag
  """
  pl_bmasselim: Float
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass]
  """
  pl_bmassj: Float
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass] Upper Unc.
  """
  pl_bmassjerr1: Float
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass] Lower Unc.
  """
  pl_bmassjerr2: Float
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass] Limit Flag
  """
  pl_bmassjlim: Float
  """
  Planet Mass or Mass*sin(i) Provenance
  """
  pl_bmassprov: String
  """
  Planet Density [g/cm**3]
  """
  pl_dens: Float
  """
  Planet Density Upper Unc. [g/cm**3]
  """
  pl_denserr1: String
  """
  Planet Density Lower Unc. [g/cm**3]
  """
  pl_denserr2: String
  """
  Planet Density Limit Flag
  """
  pl_denslim: Float
  """
  Eccentricity
  """
  pl_orbeccen: Float
  """
  Eccentricity Upper Unc.
  """
  pl_orbeccenerr1: Float
  """
  Eccentricity Lower Unc.
  """
  pl_orbeccenerr2: Float
  """
  Eccentricity Limit Flag
  """
  pl_orbeccenlim: Float
  """
  Insolation Flux [Earth Flux]
  """
  pl_insol: String
  """
  Insolation Flux Upper Unc. [Earth Flux]
  """
  pl_insolerr1: String
  """
  Insolation Flux Lower Unc. [Earth Flux]
  """
  pl_insolerr2: String
  """
  Insolation Flux Limit Flag
  """
  pl_insollim: String
  """
  Equilibrium Temperature [K]
  """
  pl_eqt: String
  """
  Equilibrium Temperature Upper Unc. [K]
  """
  pl_eqterr1: String
  """
  Equilibrium Temperature Lower Unc. [K]
  """
  pl_eqterr2: String
  """
  Equilibrium Temperature Limit Flag
  """
  pl_eqtlim: String
  """
  Inclination [deg]
  """
  pl_orbincl: String
  """
  Inclination Upper Unc. [deg]
  """
  pl_orbinclerr1: String
  """
  Inclination Lower Unc. [deg]
  """
  pl_orbinclerr2: String
  """
  Inclination Limit Flag
  """
  pl_orbincllim: String
  """
  Transit Midpoint [days]
  """
  pl_tranmid: String
  """
  Transit Midpoint Upper Unc. [days]
  """
  pl_tranmiderr1: String
  """
  Transit Midpoint Lower Unc. [days]
  """
  pl_tranmiderr2: String
  """
  Transit Midpoint Limit Flag
  """
  pl_tranmidlim: String
  """
  Data show Transit Timing Variations
  """
  ttv_flag: Int
  """
  Impact Parameter
  """
  pl_imppar: String
  """
  Impact Parameter Upper Unc.
  """
  pl_impparerr1: String
  """
  Impact Parameter Lower Unc.
  """
  pl_impparerr2: String
  """
  Impact Parameter Limit Flag
  """
  pl_impparlim: String
  """
  Transit Depth [%]
  """
  pl_trandep: String
  """
  Transit Depth Upper Unc. [%]
  """
  pl_trandeperr1: String
  """
  Transit Depth Lower Unc. [%]
  """
  pl_trandeperr2: String
  """
  Transit Depth Limit Flag
  """
  pl_trandeplim: String
  """
  Transit Duration [hours]
  """
  pl_trandur: String
  """
  Transit Duration Upper Unc. [hours]
  """
  pl_trandurerr1: String
  """
  Transit Duration Lower Unc. [hours]
  """
  pl_trandurerr2: String
  """
  Transit Duration Limit Flag
  """
  pl_trandurlim: String
  """
  Ratio of Semi-Major Axis to Stellar Radius
  """
  pl_ratdor: String
  """
  Ratio of Semi-Major Axis to Stellar Radius Upper Unc.
  """
  pl_ratdorerr1: String
  """
  Ratio of Semi-Major Axis to Stellar Radius Lower Unc.
  """
  pl_ratdorerr2: String
  """
  Ratio of Semi-Major Axis to Stellar Radius Limit Flag
  """
  pl_ratdorlim: String
  """
  Ratio of Planet to Stellar Radius
  """
  pl_ratror: String
  """
  Ratio of Planet to Stellar Radius Upper Unc.
  """
  pl_ratrorerr1: String
  """
  Ratio of Planet to Stellar Radius Lower Unc.
  """
  pl_ratrorerr2: String
  """
  Ratio of Planet to Stellar Radius Limit Flag
  """
  pl_ratrorlim: String
  """
  Occultation Depth [%]
  """
  pl_occdep: String
  """
  Occultation Depth Upper Unc. [%]
  """
  pl_occdeperr1: String
  """
  Occultation Depth Lower Unc. [%]
  """
  pl_occdeperr2: String
  """
  Occultation Depth Limit Flag
  """
  pl_occdeplim: String
  """
  Epoch of Periastron [days]
  """
  pl_orbtper: Float
  """
  Epoch of Periastron Upper Unc. [days]
  """
  pl_orbtpererr1: Float
  """
  Epoch of Periastron Lower Unc. [days]
  """
  pl_orbtpererr2: Float
  """
  Epoch of Periastron Limit Flag
  """
  pl_orbtperlim: Float
  """
  Argument of Periastron [deg]
  """
  pl_orblper: Float
  """
  Argument of Periastron Upper Unc. [deg]
  """
  pl_orblpererr1: Float
  """
  Argument of Periastron Lower Unc. [deg]
  """
  pl_orblpererr2: Float
  """
  Argument of Periastron Limit Flag
  """
  pl_orblperlim: Float
  """
  Radial Velocity Amplitude [m/s]
  """
  pl_rvamp: Float
  """
  Radial Velocity Amplitude Upper Unc. [m/s]
  """
  pl_rvamperr1: Float
  """
  Radial Velocity Amplitude Lower Unc. [m/s]
  """
  pl_rvamperr2: Float
  """
  Radial Velocity Amplitude Limit Flag
  """
  pl_rvamplim: Float
  """
  Spectral Type
  """
  st_spectype: String
  """
  Stellar Effective Temperature [K]
  """
  st_teff: Float
  """
  Stellar Effective Temperature Upper Unc. [K]
  """
  st_tefferr1: Float
  """
  Stellar Effective Temperature Lower Unc. [K]
  """
  st_tefferr2: Float
  """
  Stellar Effective Temperature Limit Flag
  """
  st_tefflim: Float
  """
  Stellar Radius [Solar Radius]
  """
  st_rad: Float
  """
  Stellar Radius Upper Unc. [Solar Radius]
  """
  st_raderr1: Float
  """
  Stellar Radius Lower Unc. [Solar Radius]
  """
  st_raderr2: Float
  """
  Stellar Radius Limit Flag
  """
  st_radlim: Float
  """
  Stellar Mass [Solar mass]
  """
  st_mass: Float
  """
  Stellar Mass Upper Unc. [Solar mass]
  """
  st_masserr1: Float
  """
  Stellar Mass Lower Unc. [Solar mass]
  """
  st_masserr2: Float
  """
  Stellar Mass Limit Flag
  """
  st_masslim: Float
  """
  Stellar Metallicity [dex]
  """
  st_met: Float
  """
  Stellar Metallicity Upper Unc. [dex]
  """
  st_meterr1: Float
  """
  Stellar Metallicity Lower Unc. [dex]
  """
  st_meterr2: Float
  """
  Stellar Metallicity Limit Flag
  """
  st_metlim: Float
  """
  Stellar Metallicity Ratio
  """
  st_metratio: String
  """
  Stellar Surface Gravity [log10(cm/s**2)]
  """
  st_logg: Float
  """
  Stellar Surface Gravity Upper Unc. [log10(cm/s**2)]
  """
  st_loggerr1: Float
  """
  Stellar Surface Gravity Lower Unc. [log10(cm/s**2)]
  """
  st_loggerr2: Float
  """
  Stellar Surface Gravity Limit Flag
  """
  st_logglim: Float
  """
  RA [sexagesimal]
  """
  rastr: String
  """
  RA [deg]
  """
  ra: Float
  """
  Dec [sexagesimal]
  """
  decstr: String
  """
  Dec [deg]
  """
  dec: Float
  """
  Total Proper Motion [mas/yr]
  """
  sy_pm: Float
  """
  Total Proper Motion Upper Unc [mas/yr]
  """
  sy_pmerr1: Float
  """
  Total Proper Motion Lower Unc [mas/yr]
  """
  sy_pmerr2: Float
  """
  Proper Motion (RA) [mas/yr]
  """
  sy_pmra: Float
  """
  Proper Motion (RA) [mas/yr] Upper Unc
  """
  sy_pmraerr1: Float
  """
  Proper Motion (RA) [mas/yr] Lower Unc
  """
  sy_pmraerr2: Float
  """
  Distance [pc]
  """
  sy_dist: Float
  """
  Distance [pc] Upper Unc
  """
  sy_disterr1: Float
  """
  Distance [pc] Lower Unc
  """
  sy_disterr2: Float
  """
  V (Johnson) Magnitude
  """
  sy_vmag: Float
  """
  V (Johnson) Magnitude Upper Unc
  """
  sy_vmagerr1: Float
  """
  V (Johnson) Magnitude Lower Unc
  """
  sy_vmagerr2: Float
  """
  Ks (2MASS) Magnitude
  """
  sy_kmag: Float
  """
  Ks (2MASS) Magnitude Upper Unc
  """
  sy_kmagerr1: Float
  """
  Ks (2MASS) Magnitude Lower Unc
  """
  sy_kmagerr2: Float
  """
  Gaia Magnitude
  """
  sy_gaiamag: Float
  """
  Gaia Magnitude Upper Unc
  """
  sy_gaiamagerr1: Float
  """
  Gaia Magnitude Lower Unc
  """
  sy_gaiamagerr2: Float
}

input Sort {
  field: PlanetFields
  direction: SortDirection
}

enum SortDirection {
  DESC
  ASC
}

input Pagination {
    offset: Int!,
    size: Int!
}

enum PlanetFields {
  """
  Planet Name
  """
  pl_name
  """
  Host Name
  """
  hostname
  """
  Planet Letter
  """
  pl_letter
  """
  HD ID
  """
  hd_name
  """
  HIP ID
  """
  hip_name
  """
  TIC ID
  """
  tic_id
  """
  GAIA ID
  """
  gaia_id
  """
  Number of Stars
  """
  sy_snum
  """
  Number of Planets
  """
  sy_pnum
  """
  Number of Moons
  """
  sy_mnum
  """
  Circumbinary Flag
  """
  cb_flag
  """
  Discovery Method
  """
  discoverymethod
  """
  Discovery Year
  """
  disc_year
  """
  Discovery Reference
  """
  disc_refname
  """
  Discovery Publication Date
  """
  disc_pubdate
  """
  Discovery Locale
  """
  disc_locale
  """
  Discovery Facility
  """
  disc_facility
  """
  Discovery Telescope
  """
  disc_telescope
  """
  Discovery Instrument
  """
  disc_instrument
  """
  Detected by Radial Velocity Variations
  """
  rv_flag
  """
  Detected by Pulsar Timing Variations
  """
  pul_flag
  """
  Detected by Pulsation Timing Variations
  """
  ptv_flag
  """
  Detected by Transits
  """
  tran_flag
  """
  Detected by Astrometric Variations
  """
  ast_flag
  """
  Detected by Orbital Brightness Modulations
  """
  obm_flag
  """
  Detected by Microlensing
  """
  micro_flag
  """
  Detected by Eclipse Timing Variations
  """
  etv_flag
  """
  Detected by Imaging
  """
  ima_flag
  """
  Detected by Disk Kinematics
  """
  dkin_flag
  """
  Controversial Flag
  """
  pl_controv_flag
  """
  Orbital Period [days]
  """
  pl_orbper
  """
  Orbital Period Upper Unc. [days]
  """
  pl_orbpererr1
  """
  Orbital Period Lower Unc. [days]
  """
  pl_orbpererr2
  """
  Orbital Period Limit Flag
  """
  pl_orbperlim
  """
  Orbit Semi-Major Axis [au])
  """
  pl_orbsmax
  """
  Orbit Semi-Major Axis Upper Unc. [au]
  """
  pl_orbsmaxerr1
  """
  Orbit Semi-Major Axis Lower Unc. [au]
  """
  pl_orbsmaxerr2
  """
  Orbit Semi-Major Axis Limit Flag
  """
  pl_orbsmaxlim
  """
  Planet Radius [Earth Radius]
  """
  pl_rade
  """
  Planet Radius Upper Unc. [Earth Radius]
  """
  pl_radeerr1
  """
  Planet Radius Lower Unc. [Earth Radius]
  """
  pl_radeerr2
  """
  Planet Radius Limit Flag
  """
  pl_radelim
  """
  Planet Radius [Jupiter Radius]
  """
  pl_radj
  """
  Planet Radius Upper Unc. [Jupiter Radius]
  """
  pl_radjerr1
  """
  Planet Radius Lower Unc. [Jupiter Radius]
  """
  pl_radjerr2
  """
  Planet Radius Limit Flag
  """
  pl_radjlim
  """
  Planet Mass or Mass*sin(i) [Earth Mass]
  """
  pl_bmasse
  """
  Planet Mass or Mass*sin(i) [Earth Mass] Upper Unc.
  """
  pl_bmasseerr1
  """
  Planet Mass or Mass*sin(i) [Earth Mass] Lower Unc.
  """
  pl_bmasseerr2
  """
  Planet Mass or Mass*sin(i) [Earth Mass] Limit Flag
  """
  pl_bmasselim
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass]
  """
  pl_bmassj
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass] Upper Unc.
  """
  pl_bmassjerr1
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass] Lower Unc.
  """
  pl_bmassjerr2
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass] Limit Flag
  """
  pl_bmassjlim
  """
  Planet Mass or Mass*sin(i) Provenance
  """
  pl_bmassprov
  """
  Planet Density [g/cm**3]
  """
  pl_dens
  """
  Planet Density Upper Unc. [g/cm**3]
  """
  pl_denserr1
  """
  Planet Density Lower Unc. [g/cm**3]
  """
  pl_denserr2
  """
  Planet Density Limit Flag
  """
  pl_denslim
  """
  Eccentricity
  """
  pl_orbeccen
  """
  Eccentricity Upper Unc.
  """
  pl_orbeccenerr1
  """
  Eccentricity Lower Unc.
  """
  pl_orbeccenerr2
  """
  Eccentricity Limit Flag
  """
  pl_orbeccenlim
  """
  Insolation Flux [Earth Flux]
  """
  pl_insol
  """
  Insolation Flux Upper Unc. [Earth Flux]
  """
  pl_insolerr1
  """
  Insolation Flux Lower Unc. [Earth Flux]
  """
  pl_insolerr2
  """
  Insolation Flux Limit Flag
  """
  pl_insollim
  """
  Equilibrium Temperature [K]
  """
  pl_eqt
  """
  Equilibrium Temperature Upper Unc. [K]
  """
  pl_eqterr1
  """
  Equilibrium Temperature Lower Unc. [K]
  """
  pl_eqterr2
  """
  Equilibrium Temperature Limit Flag
  """
  pl_eqtlim
  """
  Inclination [deg]
  """
  pl_orbincl
  """
  Inclination Upper Unc. [deg]
  """
  pl_orbinclerr1
  """
  Inclination Lower Unc. [deg]
  """
  pl_orbinclerr2
  """
  Inclination Limit Flag
  """
  pl_orbincllim
  """
  Transit Midpoint [days]
  """
  pl_tranmid
  """
  Transit Midpoint Upper Unc. [days]
  """
  pl_tranmiderr1
  """
  Transit Midpoint Lower Unc. [days]
  """
  pl_tranmiderr2
  """
  Transit Midpoint Limit Flag
  """
  pl_tranmidlim
  """
  Data show Transit Timing Variations
  """
  ttv_flag
  """
  Impact Parameter
  """
  pl_imppar
  """
  Impact Parameter Upper Unc.
  """
  pl_impparerr1
  """
  Impact Parameter Lower Unc.
  """
  pl_impparerr2
  """
  Impact Parameter Limit Flag
  """
  pl_impparlim
  """
  Transit Depth [%]
  """
  pl_trandep
  """
  Transit Depth Upper Unc. [%]
  """
  pl_trandeperr1
  """
  Transit Depth Lower Unc. [%]
  """
  pl_trandeperr2
  """
  Transit Depth Limit Flag
  """
  pl_trandeplim
  """
  Transit Duration [hours]
  """
  pl_trandur
  """
  Transit Duration Upper Unc. [hours]
  """
  pl_trandurerr1
  """
  Transit Duration Lower Unc. [hours]
  """
  pl_trandurerr2
  """
  Transit Duration Limit Flag
  """
  pl_trandurlim
  """
  Ratio of Semi-Major Axis to Stellar Radius
  """
  pl_ratdor
  """
  Ratio of Semi-Major Axis to Stellar Radius Upper Unc.
  """
  pl_ratdorerr1
  """
  Ratio of Semi-Major Axis to Stellar Radius Lower Unc.
  """
  pl_ratdorerr2
  """
  Ratio of Semi-Major Axis to Stellar Radius Limit Flag
  """
  pl_ratdorlim
  """
  Ratio of Planet to Stellar Radius
  """
  pl_ratror
  """
  Ratio of Planet to Stellar Radius Upper Unc.
  """
  pl_ratrorerr1
  """
  Ratio of Planet to Stellar Radius Lower Unc.
  """
  pl_ratrorerr2
  """
  Ratio of Planet to Stellar Radius Limit Flag
  """
  pl_ratrorlim
  """
  Occultation Depth [%]
  """
  pl_occdep
  """
  Occultation Depth Upper Unc. [%]
  """
  pl_occdeperr1
  """
  Occultation Depth Lower Unc. [%]
  """
  pl_occdeperr2
  """
  Occultation Depth Limit Flag
  """
  pl_occdeplim
  """
  Epoch of Periastron [days]
  """
  pl_orbtper
  """
  Epoch of Periastron Upper Unc. [days]
  """
  pl_orbtpererr1
  """
  Epoch of Periastron Lower Unc. [days]
  """
  pl_orbtpererr2
  """
  Epoch of Periastron Limit Flag
  """
  pl_orbtperlim
  """
  Argument of Periastron [deg]
  """
  pl_orblper
  """
  Argument of Periastron Upper Unc. [deg]
  """
  pl_orblpererr1
  """
  Argument of Periastron Lower Unc. [deg]
  """
  pl_orblpererr2
  """
  Argument of Periastron Limit Flag
  """
  pl_orblperlim
  """
  Radial Velocity Amplitude [m/s]
  """
  pl_rvamp
  """
  Radial Velocity Amplitude Upper Unc. [m/s]
  """
  pl_rvamperr1
  """
  Radial Velocity Amplitude Lower Unc. [m/s]
  """
  pl_rvamperr2
  """
  Radial Velocity Amplitude Limit Flag
  """
  pl_rvamplim
  """
  Spectral Type
  """
  st_spectype
  """
  Stellar Effective Temperature [K]
  """
  st_teff
  """
  Stellar Effective Temperature Upper Unc. [K]
  """
  st_tefferr1
  """
  Stellar Effective Temperature Lower Unc. [K]
  """
  st_tefferr2
  """
  Stellar Effective Temperature Limit Flag
  """
  st_tefflim
  """
  Stellar Radius [Solar Radius]
  """
  st_rad
  """
  Stellar Radius Upper Unc. [Solar Radius]
  """
  st_raderr1
  """
  Stellar Radius Lower Unc. [Solar Radius]
  """
  st_raderr2
  """
  Stellar Radius Limit Flag
  """
  st_radlim
  """
  Stellar Mass [Solar mass]
  """
  st_mass
  """
  Stellar Mass Upper Unc. [Solar mass]
  """
  st_masserr1
  """
  Stellar Mass Lower Unc. [Solar mass]
  """
  st_masserr2
  """
  Stellar Mass Limit Flag
  """
  st_masslim
  """
  Stellar Metallicity [dex]
  """
  st_met
  """
  Stellar Metallicity Upper Unc. [dex]
  """
  st_meterr1
  """
  Stellar Metallicity Lower Unc. [dex]
  """
  st_meterr2
  """
  Stellar Metallicity Limit Flag
  """
  st_metlim
  """
  Stellar Metallicity Ratio
  """
  st_metratio
  """
  Stellar Surface Gravity [log10(cm/s**2)]
  """
  st_logg
  """
  Stellar Surface Gravity Upper Unc. [log10(cm/s**2)]
  """
  st_loggerr1
  """
  Stellar Surface Gravity Lower Unc. [log10(cm/s**2)]
  """
  st_loggerr2
  """
  Stellar Surface Gravity Limit Flag
  """
  st_logglim
  """
  RA [sexagesimal]
  """
  rastr
  """
  RA [deg]
  """
  ra
  """
  Dec [sexagesimal]
  """
  decstr
  """
  Dec [deg]
  """
  dec
  """
  Total Proper Motion [mas/yr]
  """
  sy_pm
  """
  Total Proper Motion Upper Unc [mas/yr]
  """
  sy_pmerr1
  """
  Total Proper Motion Lower Unc [mas/yr]
  """
  sy_pmerr2
  """
  Proper Motion (RA) [mas/yr]
  """
  sy_pmra
  """
  Proper Motion (RA) [mas/yr] Upper Unc
  """
  sy_pmraerr1
  """
  Proper Motion (RA) [mas/yr] Lower Unc
  """
  sy_pmraerr2
  """
  Distance [pc]
  """
  sy_dist
  """
  Distance [pc] Upper Unc
  """
  sy_disterr1
  """
  Distance [pc] Lower Unc
  """
  sy_disterr2
  """
  V (Johnson) Magnitude
  """
  sy_vmag
  """
  V (Johnson) Magnitude Upper Unc
  """
  sy_vmagerr1
  """
  V (Johnson) Magnitude Lower Unc
  """
  sy_vmagerr2
  """
  Ks (2MASS) Magnitude
  """
  sy_kmag
  """
  Ks (2MASS) Magnitude Upper Unc
  """
  sy_kmagerr1
  """
  Ks (2MASS) Magnitude Lower Unc
  """
  sy_kmagerr2
  """
  Gaia Magnitude
  """
  sy_gaiamag
  """
  Gaia Magnitude Upper Unc
  """
  sy_gaiamagerr1
  """
  Gaia Magnitude Lower Unc
  """
  sy_gaiamagerr2
}

input PlanetFilter {
 """
  Planet Name
  """
  pl_name: FilterString
  """
  Host Name
  """
  hostname: FilterString
  """
  Planet Letter
  """
  pl_letter: FilterString
  """
  HD ID
  """
  hd_name: FilterString
  """
  HIP ID
  """
  hip_name: FilterString
  """
  TIC ID
  """
  tic_id: ID
  """
  GAIA ID
  """
  gaia_id: FilterString
  """
  Number of Stars
  """
  sy_snum: FilterFloat
  """
  Number of Planets
  """
  sy_pnum: FilterFloat
  """
  Number of Moons
  """
  sy_mnum: FilterFloat
  """
  Circumbinary Flag
  """
  cb_flag: FilterInt
  """
  Discovery Method
  """
  discoverymethod: FilterString
  """
  Discovery Year
  """
  disc_year: FilterFloat
  """
  Discovery Reference
  """
  disc_refname: FilterString
  """
  Discovery Publication Date
  """
  disc_pubdate: FilterString
  """
  Discovery Locale
  """
  disc_locale: FilterString
  """
  Discovery Facility
  """
  disc_facility: FilterString
  """
  Discovery Telescope
  """
  disc_telescope: FilterString
  """
  Discovery Instrument
  """
  disc_instrument: FilterString
  """
  Detected by Radial Velocity Variations
  """
  rv_flag: FilterInt
  """
  Detected by Pulsar Timing Variations
  """
  pul_flag: FilterInt
  """
  Detected by Pulsation Timing Variations
  """
  ptv_flag: FilterInt
  """
  Detected by Transits
  """
  tran_flag: FilterInt
  """
  Detected by Astrometric Variations
  """
  ast_flag: FilterInt
  """
  Detected by Orbital Brightness Modulations
  """
  obm_flag: FilterInt
  """
  Detected by Microlensing
  """
  micro_flag: FilterInt
  """
  Detected by Eclipse Timing Variations
  """
  etv_flag: FilterInt
  """
  Detected by Imaging
  """
  ima_flag: FilterInt
  """
  Detected by Disk Kinematics
  """
  dkin_flag: FilterInt
  """
  Controversial Flag
  """
  pl_controv_flag: FilterInt
  """
  Orbital Period [days]
  """
  pl_orbper: FilterFloat
  """
  Orbital Period Upper Unc. [days]
  """
  pl_orbpererr1: FilterFloat
  """
  Orbital Period Lower Unc. [days]
  """
  pl_orbpererr2: FilterFloat
  """
  Orbital Period Limit Flag
  """
  pl_orbperlim: FilterFloat
  """
  Orbit Semi-Major Axis [au])
  """
  pl_orbsmax: FilterFloat
  """
  Orbit Semi-Major Axis Upper Unc. [au]
  """
  pl_orbsmaxerr1: FilterFloat
  """
  Orbit Semi-Major Axis Lower Unc. [au]
  """
  pl_orbsmaxerr2: FilterFloat
  """
  Orbit Semi-Major Axis Limit Flag
  """
  pl_orbsmaxlim: FilterFloat
  """
  Planet Radius [Earth Radius]
  """
  pl_rade: FilterFloat
  """
  Planet Radius Upper Unc. [Earth Radius]
  """
  pl_radeerr1: FilterString
  """
  Planet Radius Lower Unc. [Earth Radius]
  """
  pl_radeerr2: FilterString
  """
  Planet Radius Limit Flag
  """
  pl_radelim: FilterFloat
  """
  Planet Radius [Jupiter Radius]
  """
  pl_radj: FilterFloat
  """
  Planet Radius Upper Unc. [Jupiter Radius]
  """
  pl_radjerr1: FilterString
  """
  Planet Radius Lower Unc. [Jupiter Radius]
  """
  pl_radjerr2: FilterString
  """
  Planet Radius Limit Flag
  """
  pl_radjlim: FilterFloat
  """
  Planet Mass or Mass*sin(i) [Earth Mass]
  """
  pl_bmasse: FilterFloat
  """
  Planet Mass or Mass*sin(i) [Earth Mass] Upper Unc.
  """
  pl_bmasseerr1: FilterFloat
  """
  Planet Mass or Mass*sin(i) [Earth Mass] Lower Unc.
  """
  pl_bmasseerr2: FilterFloat
  """
  Planet Mass or Mass*sin(i) [Earth Mass] Limit Flag
  """
  pl_bmasselim: FilterFloat
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass]
  """
  pl_bmassj: FilterFloat
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass] Upper Unc.
  """
  pl_bmassjerr1: FilterFloat
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass] Lower Unc.
  """
  pl_bmassjerr2: FilterFloat
  """
  Planet Mass or Mass*sin(i) [Jupiter Mass] Limit Flag
  """
  pl_bmassjlim: FilterFloat
  """
  Planet Mass or Mass*sin(i) Provenance
  """
  pl_bmassprov: FilterString
  """
  Planet Density [g/cm**3]
  """
  pl_dens: FilterFloat
  """
  Planet Density Upper Unc. [g/cm**3]
  """
  pl_denserr1: FilterString
  """
  Planet Density Lower Unc. [g/cm**3]
  """
  pl_denserr2: FilterString
  """
  Planet Density Limit Flag
  """
  pl_denslim: FilterFloat
  """
  Eccentricity
  """
  pl_orbeccen: FilterFloat
  """
  Eccentricity Upper Unc.
  """
  pl_orbeccenerr1: FilterFloat
  """
  Eccentricity Lower Unc.
  """
  pl_orbeccenerr2: FilterFloat
  """
  Eccentricity Limit Flag
  """
  pl_orbeccenlim: FilterFloat
  """
  Insolation Flux [Earth Flux]
  """
  pl_insol: FilterString
  """
  Insolation Flux Upper Unc. [Earth Flux]
  """
  pl_insolerr1: FilterString
  """
  Insolation Flux Lower Unc. [Earth Flux]
  """
  pl_insolerr2: FilterString
  """
  Insolation Flux Limit Flag
  """
  pl_insollim: FilterString
  """
  Equilibrium Temperature [K]
  """
  pl_eqt: FilterString
  """
  Equilibrium Temperature Upper Unc. [K]
  """
  pl_eqterr1: FilterString
  """
  Equilibrium Temperature Lower Unc. [K]
  """
  pl_eqterr2: FilterString
  """
  Equilibrium Temperature Limit Flag
  """
  pl_eqtlim: FilterString
  """
  Inclination [deg]
  """
  pl_orbincl: FilterString
  """
  Inclination Upper Unc. [deg]
  """
  pl_orbinclerr1: FilterString
  """
  Inclination Lower Unc. [deg]
  """
  pl_orbinclerr2: FilterString
  """
  Inclination Limit Flag
  """
  pl_orbincllim: FilterString
  """
  Transit Midpoint [days]
  """
  pl_tranmid: FilterString
  """
  Transit Midpoint Upper Unc. [days]
  """
  pl_tranmiderr1: FilterString
  """
  Transit Midpoint Lower Unc. [days]
  """
  pl_tranmiderr2: FilterString
  """
  Transit Midpoint Limit Flag
  """
  pl_tranmidlim: FilterString
  """
  Data show Transit Timing Variations
  """
  ttv_flag: FilterInt
  """
  Impact Parameter
  """
  pl_imppar: FilterString
  """
  Impact Parameter Upper Unc.
  """
  pl_impparerr1: FilterString
  """
  Impact Parameter Lower Unc.
  """
  pl_impparerr2: FilterString
  """
  Impact Parameter Limit Flag
  """
  pl_impparlim: FilterString
  """
  Transit Depth [%]
  """
  pl_trandep: FilterString
  """
  Transit Depth Upper Unc. [%]
  """
  pl_trandeperr1: FilterString
  """
  Transit Depth Lower Unc. [%]
  """
  pl_trandeperr2: FilterString
  """
  Transit Depth Limit Flag
  """
  pl_trandeplim: FilterString
  """
  Transit Duration [hours]
  """
  pl_trandur: FilterString
  """
  Transit Duration Upper Unc. [hours]
  """
  pl_trandurerr1: FilterString
  """
  Transit Duration Lower Unc. [hours]
  """
  pl_trandurerr2: FilterString
  """
  Transit Duration Limit Flag
  """
  pl_trandurlim: FilterString
  """
  Ratio of Semi-Major Axis to Stellar Radius
  """
  pl_ratdor: FilterString
  """
  Ratio of Semi-Major Axis to Stellar Radius Upper Unc.
  """
  pl_ratdorerr1: FilterString
  """
  Ratio of Semi-Major Axis to Stellar Radius Lower Unc.
  """
  pl_ratdorerr2: FilterString
  """
  Ratio of Semi-Major Axis to Stellar Radius Limit Flag
  """
  pl_ratdorlim: FilterString
  """
  Ratio of Planet to Stellar Radius
  """
  pl_ratror: FilterString
  """
  Ratio of Planet to Stellar Radius Upper Unc.
  """
  pl_ratrorerr1: FilterString
  """
  Ratio of Planet to Stellar Radius Lower Unc.
  """
  pl_ratrorerr2: FilterString
  """
  Ratio of Planet to Stellar Radius Limit Flag
  """
  pl_ratrorlim: FilterString
  """
  Occultation Depth [%]
  """
  pl_occdep: FilterString
  """
  Occultation Depth Upper Unc. [%]
  """
  pl_occdeperr1: FilterString
  """
  Occultation Depth Lower Unc. [%]
  """
  pl_occdeperr2: FilterString
  """
  Occultation Depth Limit Flag
  """
  pl_occdeplim: FilterString
  """
  Epoch of Periastron [days]
  """
  pl_orbtper: FilterFloat
  """
  Epoch of Periastron Upper Unc. [days]
  """
  pl_orbtpererr1: FilterFloat
  """
  Epoch of Periastron Lower Unc. [days]
  """
  pl_orbtpererr2: FilterFloat
  """
  Epoch of Periastron Limit Flag
  """
  pl_orbtperlim: FilterFloat
  """
  Argument of Periastron [deg]
  """
  pl_orblper: FilterFloat
  """
  Argument of Periastron Upper Unc. [deg]
  """
  pl_orblpererr1: FilterFloat
  """
  Argument of Periastron Lower Unc. [deg]
  """
  pl_orblpererr2: FilterFloat
  """
  Argument of Periastron Limit Flag
  """
  pl_orblperlim: FilterFloat
  """
  Radial Velocity Amplitude [m/s]
  """
  pl_rvamp: FilterFloat
  """
  Radial Velocity Amplitude Upper Unc. [m/s]
  """
  pl_rvamperr1: FilterFloat
  """
  Radial Velocity Amplitude Lower Unc. [m/s]
  """
  pl_rvamperr2: FilterFloat
  """
  Radial Velocity Amplitude Limit Flag
  """
  pl_rvamplim: FilterFloat
  """
  Spectral Type
  """
  st_spectype: FilterString
  """
  Stellar Effective Temperature [K]
  """
  st_teff: FilterFloat
  """
  Stellar Effective Temperature Upper Unc. [K]
  """
  st_tefferr1: FilterFloat
  """
  Stellar Effective Temperature Lower Unc. [K]
  """
  st_tefferr2: FilterFloat
  """
  Stellar Effective Temperature Limit Flag
  """
  st_tefflim: FilterFloat
  """
  Stellar Radius [Solar Radius]
  """
  st_rad: FilterFloat
  """
  Stellar Radius Upper Unc. [Solar Radius]
  """
  st_raderr1: FilterFloat
  """
  Stellar Radius Lower Unc. [Solar Radius]
  """
  st_raderr2: FilterFloat
  """
  Stellar Radius Limit Flag
  """
  st_radlim: FilterFloat
  """
  Stellar Mass [Solar mass]
  """
  st_mass: FilterFloat
  """
  Stellar Mass Upper Unc. [Solar mass]
  """
  st_masserr1: FilterFloat
  """
  Stellar Mass Lower Unc. [Solar mass]
  """
  st_masserr2: FilterFloat
  """
  Stellar Mass Limit Flag
  """
  st_masslim: FilterFloat
  """
  Stellar Metallicity [dex]
  """
  st_met: FilterFloat
  """
  Stellar Metallicity Upper Unc. [dex]
  """
  st_meterr1: FilterFloat
  """
  Stellar Metallicity Lower Unc. [dex]
  """
  st_meterr2: FilterFloat
  """
  Stellar Metallicity Limit Flag
  """
  st_metlim: FilterFloat
  """
  Stellar Metallicity Ratio
  """
  st_metratio: FilterString
  """
  Stellar Surface Gravity [log10(cm/s**2)]
  """
  st_logg: FilterFloat
  """
  Stellar Surface Gravity Upper Unc. [log10(cm/s**2)]
  """
  st_loggerr1: FilterFloat
  """
  Stellar Surface Gravity Lower Unc. [log10(cm/s**2)]
  """
  st_loggerr2: FilterFloat
  """
  Stellar Surface Gravity Limit Flag
  """
  st_logglim: FilterFloat
  """
  RA [sexagesimal]
  """
  rastr: FilterString
  """
  RA [deg]
  """
  ra: FilterFloat
  """
  Dec [sexagesimal]
  """
  decstr: FilterString
  """
  Dec [deg]
  """
  dec: FilterFloat
  """
  Total Proper Motion [mas/yr]
  """
  sy_pm: FilterFloat
  """
  Total Proper Motion Upper Unc [mas/yr]
  """
  sy_pmerr1: FilterFloat
  """
  Total Proper Motion Lower Unc [mas/yr]
  """
  sy_pmerr2: FilterFloat
  """
  Proper Motion (RA) [mas/yr]
  """
  sy_pmra: FilterFloat
  """
  Proper Motion (RA) [mas/yr] Upper Unc
  """
  sy_pmraerr1: FilterFloat
  """
  Proper Motion (RA) [mas/yr] Lower Unc
  """
  sy_pmraerr2: FilterFloat
  """
  Distance [pc]
  """
  sy_dist: FilterFloat
  """
  Distance [pc] Upper Unc
  """
  sy_disterr1: FilterFloat
  """
  Distance [pc] Lower Unc
  """
  sy_disterr2: FilterFloat
  """
  V (Johnson) Magnitude
  """
  sy_vmag: FilterFloat
  """
  V (Johnson) Magnitude Upper Unc
  """
  sy_vmagerr1: FilterFloat
  """
  V (Johnson) Magnitude Lower Unc
  """
  sy_vmagerr2: FilterFloat
  """
  Ks (2MASS) Magnitude
  """
  sy_kmag: FilterFloat
  """
  Ks (2MASS) Magnitude Upper Unc
  """
  sy_kmagerr1: FilterFloat
  """
  Ks (2MASS) Magnitude Lower Unc
  """
  sy_kmagerr2: FilterFloat
  """
  Gaia Magnitude
  """
  sy_gaiamag: FilterFloat
  """
  Gaia Magnitude Upper Unc
  """
  sy_gaiamagerr1: FilterFloat
  """
  Gaia Magnitude Lower Unc
  """
  sy_gaiamagerr2: FilterFloat
}

input FilterString {
  like: String
  eq: String
  ne: String
  gt: String
  lt: String
  ge: String
  le: String
}

input FilterFloat {
  eq: Float
  ne: Float
  gt: Float
  lt: Float
  ge: Float
  le: Float
}

input FilterFloat {
  eq: Float
  ne: Float
  gt: Float
  lt: Float
  ge: Float
  le: Float
}

input FilterInt {
  eq: Int
  ne: Int
  gt: Int
  lt: Int
  ge: Int
  le: Int
}

interface Filter {
  like: String
  eq: String
  ne: String
  gt: String
  lt: String
  ge: String
  le: String
}

`

export const exampleQuery = 
`{
  Planets(
    pagination: { offset: 0, size: 100 }
    filter: { disc_year: { ge: 2020 }, discoverymethod: {eq: "Imaging"} }
    sort: { field: disc_year, direction: DESC }
  ) {
    count
    content {
      pl_name
      hostname
      pl_bmasse
      discoverymethod
      disc_year
      disc_refname
      disc_instrument
    }
  }
},
{
  Planet(name: "11 Com b") {
      pl_name
      hostname
      st_loggerr1
      st_mass
      st_tefferr1
  }
}`