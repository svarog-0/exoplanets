import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type  Planet {
        pl_name:         String
        hostname:        String
        pl_letter:       String
        hd_name:         String
        hip_name:        String
        tic_id:          ID
        gaia_id:         String
        sy_snum:         Float
        sy_pnum:         Float
        sy_mnum:         Float
        cb_flag:         Int
        discoverymethod: String
        disc_year:       Float
        disc_refname:    String
        disc_pubdate:    String
        disc_locale:     String
        disc_facility:   String
        disc_telescope:  String
        disc_instrument: String
        rv_flag:         Int
        pul_flag:        Int
        ptv_flag:        Int
        tran_flag:       Int
        ast_flag:        Int
        obm_flag:        Int
        micro_flag:      Int
        etv_flag:        Int
        ima_flag:        Int
        dkin_flag:       Int
        pl_controv_flag: Int
        pl_orbper:       Float
        pl_orbpererr1:   Float
        pl_orbpererr2:   Float
        pl_orbperlim:    Float
        pl_orbsmax:      Float
        pl_orbsmaxerr1:  Float
        pl_orbsmaxerr2:  Float
        pl_orbsmaxlim:   Float
        pl_rade:         Float
        pl_radeerr1:     String
        pl_radeerr2:     String
        pl_radelim:      Float
        pl_radj:         Float
        pl_radjerr1:     String
        pl_radjerr2:     String
        pl_radjlim:      Float
        pl_bmasse:       Float
        pl_bmasseerr1:   Float
        pl_bmasseerr2:   Float
        pl_bmasselim:    Float
        pl_bmassj:       Float
        pl_bmassjerr1:   Float
        pl_bmassjerr2:   Float
        pl_bmassjlim:    Float
        pl_bmassprov:    String
        pl_dens:         Float
        pl_denserr1:     String
        pl_denserr2:     String
        pl_denslim:      Float
        pl_orbeccen:     Float
        pl_orbeccenerr1: Float
        pl_orbeccenerr2: Float
        pl_orbeccenlim:  Float
        pl_insol:        String
        pl_insolerr1:    String
        pl_insolerr2:    String
        pl_insollim:     String
        pl_eqt:          String
        pl_eqterr1:      String
        pl_eqterr2:      String
        pl_eqtlim:       String
        pl_orbincl:      String
        pl_orbinclerr1:  String
        pl_orbinclerr2:  String
        pl_orbincllim:   String
        pl_tranmid:      String
        pl_tranmiderr1:  String
        pl_tranmiderr2:  String
        pl_tranmidlim:   String
        ttv_flag:        Int
        pl_imppar:       String
        pl_impparerr1:   String
        pl_impparerr2:   String
        pl_impparlim:    String
        pl_trandep:      String
        pl_trandeperr1:  String
        pl_trandeperr2:  String
        pl_trandeplim:   String
        pl_trandur:      String
        pl_trandurerr1:  String
        pl_trandurerr2:  String
        pl_trandurlim:   String
        pl_ratdor:       String
        pl_ratdorerr1:   String
        pl_ratdorerr2:   String
        pl_ratdorlim:    String
        pl_ratror:       String
        pl_ratrorerr1:   String
        pl_ratrorerr2:   String
        pl_ratrorlim:    String
        pl_occdep:       String
        pl_occdeperr1:   String
        pl_occdeperr2:   String
        pl_occdeplim:    String
        pl_orbtper:      Float
        pl_orbtpererr1:  Float
        pl_orbtpererr2:  Float
        pl_orbtperlim:   Float
        pl_orblper:      Float
        pl_orblpererr1:  Float
        pl_orblpererr2:  Float
        pl_orblperlim:   Float
        pl_rvamp:        Float
        pl_rvamperr1:    Float
        pl_rvamperr2:    Float
        pl_rvamplim:     Float
        st_spectype:     String
        st_teff:         Float
        st_tefferr1:     Float
        st_tefferr2:     Float
        st_tefflim:      Float
        st_rad:          Float
        st_raderr1:      Float
        st_raderr2:      Float
        st_radlim:       Float
        st_mass:         Float
        st_masserr1:     Float
        st_masserr2:     Float
        st_masslim:      Float
        st_met:          Float
        st_meterr1:      Float
        st_meterr2:      Float
        st_metlim:       Float
        st_metratio:     String
        st_logg:         Float
        st_loggerr1:     Float
        st_loggerr2:     Float
        st_logglim:      Float
        rastr:           String
        ra:              Float
        decstr:          String
        dec:             Float
        sy_pm:           Float
        sy_pmerr1:       Float
        sy_pmerr2:       Float
        sy_pmra:         Float
        sy_pmraerr1:     Float
        sy_pmraerr2:     Float
        sy_dist:         Float
        sy_disterr1:     Float
        sy_disterr2:     Float
        sy_vmag:         Float
        sy_vmagerr1:     Float
        sy_vmagerr2:     Float
        sy_kmag:         Float
        sy_kmagerr1:     Float
        sy_kmagerr2:     Float
        sy_gaiamag:      Float
        sy_gaiamagerr1:  Float
        sy_gaiamagerr2:  Float
    }

    type  Query {
        getPlanets: [Planet]
        getPlanet(name: String!): Planet!
        countPlanets: Int!
    }

    type Filter {
        like: String
        eq: eq
        ne: ne
        gt: gt
        lt: lt
        ge: ge
        le: le
    }

    union eq = StringBox | IntBox | FloatBox
    union ne = StringBox | IntBox | FloatBox
    union le = FloatBox | IntBox
    union gt = FloatBox | IntBox
    union lt = FloatBox | IntBox
    union ge = FloatBox | IntBox
    union le = FloatBox | IntBox

    type IntBox { value: Int}
    type StringBox { value: String}
    type FloatBox { value: Float}
    `