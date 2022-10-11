import { gql } from "apollo-server-micro";
export const typeDefs = gql`

type PlanetPage {
  count: Int
  content: [Planet]
}

type Planet {
  pl_name: String
  hostname: String
  pl_letter: String
  hd_name: String
  hip_name: String
  tic_id: ID
  gaia_id: String
  sy_snum: Float
  sy_pnum: Float
  sy_mnum: Float
  cb_flag: Int
  discoverymethod: String
  disc_year: Float
  disc_refname: String
  disc_pubdate: String
  disc_locale: String
  disc_facility: String
  disc_telescope: String
  disc_instrument: String
  rv_flag: Int
  pul_flag: Int
  ptv_flag: Int
  tran_flag: Int
  ast_flag: Int
  obm_flag: Int
  micro_flag: Int
  etv_flag: Int
  ima_flag: Int
  dkin_flag: Int
  pl_controv_flag: Int
  pl_orbper: Float
  pl_orbpererr1: Float
  pl_orbpererr2: Float
  pl_orbperlim: Float
  pl_orbsmax: Float
  pl_orbsmaxerr1: Float
  pl_orbsmaxerr2: Float
  pl_orbsmaxlim: Float
  pl_rade: Float
  pl_radeerr1: String
  pl_radeerr2: String
  pl_radelim: Float
  pl_radj: Float
  pl_radjerr1: String
  pl_radjerr2: String
  pl_radjlim: Float
  pl_bmasse: Float
  pl_bmasseerr1: Float
  pl_bmasseerr2: Float
  pl_bmasselim: Float
  pl_bmassj: Float
  pl_bmassjerr1: Float
  pl_bmassjerr2: Float
  pl_bmassjlim: Float
  pl_bmassprov: String
  pl_dens: Float
  pl_denserr1: String
  pl_denserr2: String
  pl_denslim: Float
  pl_orbeccen: Float
  pl_orbeccenerr1: Float
  pl_orbeccenerr2: Float
  pl_orbeccenlim: Float
  pl_insol: String
  pl_insolerr1: String
  pl_insolerr2: String
  pl_insollim: String
  pl_eqt: String
  pl_eqterr1: String
  pl_eqterr2: String
  pl_eqtlim: String
  pl_orbincl: String
  pl_orbinclerr1: String
  pl_orbinclerr2: String
  pl_orbincllim: String
  pl_tranmid: String
  pl_tranmiderr1: String
  pl_tranmiderr2: String
  pl_tranmidlim: String
  ttv_flag: Int
  pl_imppar: String
  pl_impparerr1: String
  pl_impparerr2: String
  pl_impparlim: String
  pl_trandep: String
  pl_trandeperr1: String
  pl_trandeperr2: String
  pl_trandeplim: String
  pl_trandur: String
  pl_trandurerr1: String
  pl_trandurerr2: String
  pl_trandurlim: String
  pl_ratdor: String
  pl_ratdorerr1: String
  pl_ratdorerr2: String
  pl_ratdorlim: String
  pl_ratror: String
  pl_ratrorerr1: String
  pl_ratrorerr2: String
  pl_ratrorlim: String
  pl_occdep: String
  pl_occdeperr1: String
  pl_occdeperr2: String
  pl_occdeplim: String
  pl_orbtper: Float
  pl_orbtpererr1: Float
  pl_orbtpererr2: Float
  pl_orbtperlim: Float
  pl_orblper: Float
  pl_orblpererr1: Float
  pl_orblpererr2: Float
  pl_orblperlim: Float
  pl_rvamp: Float
  pl_rvamperr1: Float
  pl_rvamperr2: Float
  pl_rvamplim: Float
  st_spectype: String
  st_teff: Float
  st_tefferr1: Float
  st_tefferr2: Float
  st_tefflim: Float
  st_rad: Float
  st_raderr1: Float
  st_raderr2: Float
  st_radlim: Float
  st_mass: Float
  st_masserr1: Float
  st_masserr2: Float
  st_masslim: Float
  st_met: Float
  st_meterr1: Float
  st_meterr2: Float
  st_metlim: Float
  st_metratio: String
  st_logg: Float
  st_loggerr1: Float
  st_loggerr2: Float
  st_logglim: Float
  rastr: String
  ra: Float
  decstr: String
  dec: Float
  sy_pm: Float
  sy_pmerr1: Float
  sy_pmerr2: Float
  sy_pmra: Float
  sy_pmraerr1: Float
  sy_pmraerr2: Float
  sy_dist: Float
  sy_disterr1: Float
  sy_disterr2: Float
  sy_vmag: Float
  sy_vmagerr1: Float
  sy_vmagerr2: Float
  sy_kmag: Float
  sy_kmagerr1: Float
  sy_kmagerr2: Float
  sy_gaiamag: Float
  sy_gaiamagerr1: Float
  sy_gaiamagerr2: Float
}

type Query {
  getPlanets(pagination: Pagination, filter: PlanetFilter, sort: Sort): PlanetPage
  getPlanet(name: String!): Planet
  countPlanets: Int!
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
  pl_name
  hostname
  pl_letter
  hd_name
  hip_name
  tic_id
  gaia_id
  sy_snum
  sy_pnum
  sy_mnum
  cb_flag
  discoverymethod
  disc_year
  disc_refname
  disc_pubdate
  disc_locale
  disc_facility
  disc_telescope
  disc_instrument
  rv_flag
  pul_flag
  ptv_flag
  tran_flag
  ast_flag
  obm_flag
  micro_flag
  etv_flag
  ima_flag
  dkin_flag
  pl_controv_flag
  pl_orbper
  pl_orbpererr1
  pl_orbpererr2
  pl_orbperlim
  pl_orbsmax
  pl_orbsmaxerr1
  pl_orbsmaxerr2
  pl_orbsmaxlim
  pl_rade
  pl_radeerr1
  pl_radeerr2
  pl_radelim
  pl_radj
  pl_radjerr1
  pl_radjerr2
  pl_radjlim
  pl_bmasse
  pl_bmasseerr1
  pl_bmasseerr2
  pl_bmasselim
  pl_bmassj
  pl_bmassjerr1
  pl_bmassjerr2
  pl_bmassjlim
  pl_bmassprov
  pl_dens
  pl_denserr1
  pl_denserr2
  pl_denslim
  pl_orbeccen
  pl_orbeccenerr1
  pl_orbeccenerr2
  pl_orbeccenlim
  pl_insol
  pl_insolerr1
  pl_insolerr2
  pl_insollim
  pl_eqt
  pl_eqterr1
  pl_eqterr2
  pl_eqtlim
  pl_orbincl
  pl_orbinclerr1
  pl_orbinclerr2
  pl_orbincllim
  pl_tranmid
  pl_tranmiderr1
  pl_tranmiderr2
  pl_tranmidlim
  ttv_flag
  pl_imppar
  pl_impparerr1
  pl_impparerr2
  pl_impparlim
  pl_trandep
  pl_trandeperr1
  pl_trandeperr2
  pl_trandeplim
  pl_trandur
  pl_trandurerr1
  pl_trandurerr2
  pl_trandurlim
  pl_ratdor
  pl_ratdorerr1
  pl_ratdorerr2
  pl_ratdorlim
  pl_ratror
  pl_ratrorerr1
  pl_ratrorerr2
  pl_ratrorlim
  pl_occdep
  pl_occdeperr1
  pl_occdeperr2
  pl_occdeplim
  pl_orbtper
  pl_orbtpererr1
  pl_orbtpererr2
  pl_orbtperlim
  pl_orblper
  pl_orblpererr1
  pl_orblpererr2
  pl_orblperlim
  pl_rvamp
  pl_rvamperr1
  pl_rvamperr2
  pl_rvamplim
  st_spectype
  st_teff
  st_tefferr1
  st_tefferr2
  st_tefflim
  st_rad
  st_raderr1
  st_raderr2
  st_radlim
  st_mass
  st_masserr1
  st_masserr2
  st_masslim
  st_met
  st_meterr1
  st_meterr2
  st_metlim
  st_metratio
  st_logg
  st_loggerr1
  st_loggerr2
  st_logglim
  rastr
  ra
  decstr
  dec
  sy_pm
  sy_pmerr1
  sy_pmerr2
  sy_pmra
  sy_pmraerr1
  sy_pmraerr2
  sy_dist
  sy_disterr1
  sy_disterr2
  sy_vmag
  sy_vmagerr1
  sy_vmagerr2
  sy_kmag
  sy_kmagerr1
  sy_kmagerr2
  sy_gaiamag
  sy_gaiamagerr1
  sy_gaiamagerr2
}

input PlanetFilter {
  pl_name: FilterString
  hostname: FilterString
  pl_letter: FilterString
  hd_name: FilterString
  hip_name: FilterString
  tic_id: FilterString
  gaia_id: FilterString
  sy_snum: FilterFloat
  sy_pnum: FilterFloat
  sy_mnum: FilterFloat
  cb_flag: FilterInt
  discoverymethod: FilterString
  disc_year: FilterFloat
  disc_refname: FilterString
  disc_pubdate: FilterString
  disc_locale: FilterString
  disc_facility: FilterString
  disc_telescope: FilterString
  disc_instrument: FilterString
  rv_flag: FilterInt
  pul_flag: FilterInt
  ptv_flag: FilterInt
  tran_flag: FilterInt
  ast_flag: FilterInt
  obm_flag: FilterInt
  micro_flag: FilterInt
  etv_flag: FilterInt
  ima_flag: FilterInt
  dkin_flag: FilterInt
  pl_controv_flag: FilterInt
  pl_orbper: FilterFloat
  pl_orbpererr1: FilterFloat
  pl_orbpererr2: FilterFloat
  pl_orbperlim: FilterFloat
  pl_orbsmax: FilterFloat
  pl_orbsmaxerr1: FilterFloat
  pl_orbsmaxerr2: FilterFloat
  pl_orbsmaxlim: FilterFloat
  pl_rade: FilterFloat
  pl_radeerr1: FilterString
  pl_radeerr2: FilterString
  pl_radelim: FilterFloat
  pl_radj: FilterFloat
  pl_radjerr1: FilterString
  pl_radjerr2: FilterString
  pl_radjlim: FilterFloat
  pl_bmasse: FilterFloat
  pl_bmasseerr1: FilterFloat
  pl_bmasseerr2: FilterFloat
  pl_bmasselim: FilterFloat
  pl_bmassj: FilterFloat
  pl_bmassjerr1: FilterFloat
  pl_bmassjerr2: FilterFloat
  pl_bmassjlim: FilterFloat
  pl_bmassprov: FilterString
  pl_dens: FilterFloat
  pl_denserr1: FilterString
  pl_denserr2: FilterString
  pl_denslim: FilterFloat
  pl_orbeccen: FilterFloat
  pl_orbeccenerr1: FilterFloat
  pl_orbeccenerr2: FilterFloat
  pl_orbeccenlim: FilterFloat
  pl_insol: FilterString
  pl_insolerr1: FilterString
  pl_insolerr2: FilterString
  pl_insollim: FilterString
  pl_eqt: FilterString
  pl_eqterr1: FilterString
  pl_eqterr2: FilterString
  pl_eqtlim: FilterString
  pl_orbincl: FilterString
  pl_orbinclerr1: FilterString
  pl_orbinclerr2: FilterString
  pl_orbincllim: FilterString
  pl_tranmid: FilterString
  pl_tranmiderr1: FilterString
  pl_tranmiderr2: FilterString
  pl_tranmidlim: FilterString
  ttv_flag: FilterInt
  pl_imppar: FilterString
  pl_impparerr1: FilterString
  pl_impparerr2: FilterString
  pl_impparlim: FilterString
  pl_trandep: FilterString
  pl_trandeperr1: FilterString
  pl_trandeperr2: FilterString
  pl_trandeplim: FilterString
  pl_trandur: FilterString
  pl_trandurerr1: FilterString
  pl_trandurerr2: FilterString
  pl_trandurlim: FilterString
  pl_ratdor: FilterString
  pl_ratdorerr1: FilterString
  pl_ratdorerr2: FilterString
  pl_ratdorlim: FilterString
  pl_ratror: FilterString
  pl_ratrorerr1: FilterString
  pl_ratrorerr2: FilterString
  pl_ratrorlim: FilterString
  pl_occdep: FilterString
  pl_occdeperr1: FilterString
  pl_occdeperr2: FilterString
  pl_occdeplim: FilterString
  pl_orbtper: FilterFloat
  pl_orbtpererr1: FilterFloat
  pl_orbtpererr2: FilterFloat
  pl_orbtperlim: FilterFloat
  pl_orblper: FilterFloat
  pl_orblpererr1: FilterFloat
  pl_orblpererr2: FilterFloat
  pl_orblperlim: FilterFloat
  pl_rvamp: FilterFloat
  pl_rvamperr1: FilterFloat
  pl_rvamperr2: FilterFloat
  pl_rvamplim: FilterFloat
  st_spectype: FilterString
  st_teff: FilterFloat
  st_tefferr1: FilterFloat
  st_tefferr2: FilterFloat
  st_tefflim: FilterFloat
  st_rad: FilterFloat
  st_raderr1: FilterFloat
  st_raderr2: FilterFloat
  st_radlim: FilterFloat
  st_mass: FilterFloat
  st_masserr1: FilterFloat
  st_masserr2: FilterFloat
  st_masslim: FilterFloat
  st_met: FilterFloat
  st_meterr1: FilterFloat
  st_meterr2: FilterFloat
  st_metlim: FilterFloat
  st_metratio: FilterString
  st_logg: FilterFloat
  st_loggerr1: FilterFloat
  st_loggerr2: FilterFloat
  st_logglim: FilterFloat
  rastr: FilterString
  ra: FilterFloat
  decstr: FilterString
  dec: FilterFloat
  sy_pm: FilterFloat
  sy_pmerr1: FilterFloat
  sy_pmerr2: FilterFloat
  sy_pmra: FilterFloat
  sy_pmraerr1: FilterFloat
  sy_pmraerr2: FilterFloat
  sy_dist: FilterFloat
  sy_disterr1: FilterFloat
  sy_disterr2: FilterFloat
  sy_vmag: FilterFloat
  sy_vmagerr1: FilterFloat
  sy_vmagerr2: FilterFloat
  sy_kmag: FilterFloat
  sy_kmagerr1: FilterFloat
  sy_kmagerr2: FilterFloat
  sy_gaiamag: FilterFloat
  sy_gaiamagerr1: FilterFloat
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