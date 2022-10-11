export interface Filter{
    eq: string | number
    ne: string  
    like: string
    gt: number
    lt: number
    ge: number
    le: number
}

export interface Sort {
    field: PlanetFields,
    direction: Direction
}

export interface Pagination {
    offset: number,
    size: number
}

export const enum Direction {
    DESC,
    ASC
}
export interface PlanetFilter {
     pl_name:        Filter | string
    hostname:        Filter | string
    pl_letter:       Filter | string
    hd_name:         Filter | string
    hip_name:        Filter | string
    tic_id:          Filter | string
    gaia_id:         Filter | string
    sy_snum:         Filter | number
    sy_pnum:         Filter | number
    sy_mnum:         Filter | number
    cb_flag:         Filter | number
    discoverymethod: Filter | string
    disc_year:       Filter | number
    disc_refname:    Filter | string
    disc_pubdate:    Filter | string
    disc_locale:     Filter | string
    disc_facility:   Filter | string
    disc_telescope:  Filter | string
    disc_instrument: Filter | string
    rv_flag:         Filter | number
    pul_flag:        Filter | number
    ptv_flag:        Filter | number
    tran_flag:       Filter | number
    ast_flag:        Filter | number
    obm_flag:        Filter | number
    micro_flag:      Filter | number
    etv_flag:        Filter | number
    ima_flag:        Filter | number
    dkin_flag:       Filter | number
    pl_controv_flag: Filter | number
    pl_orbper:       Filter | number
    pl_orbpererr1:   Filter | number
    pl_orbpererr2:   Filter | number
    pl_orbperlim:    Filter | number
    pl_orbsmax:      Filter | number
    pl_orbsmaxerr1:  Filter | number
    pl_orbsmaxerr2:  Filter | number
    pl_orbsmaxlim:   Filter | number
    pl_rade:         Filter | number
    pl_radeerr1:     Filter | string
    pl_radeerr2:     Filter | string
    pl_radelim:      Filter | number
    pl_radj:         Filter | number
    pl_radjerr1:     Filter | string
    pl_radjerr2:     Filter | string
    pl_radjlim:      Filter | number
    pl_bmasse:       Filter | number
    pl_bmasseerr1:   Filter | number
    pl_bmasseerr2:   Filter | number
    pl_bmasselim:    Filter | number
    pl_bmassj:       Filter | number
    pl_bmassjerr1:   Filter | number
    pl_bmassjerr2:   Filter | number
    pl_bmassjlim:    Filter | number
    pl_bmassprov:    Filter | string
    pl_dens:         Filter | number
    pl_denserr1:     Filter | string
    pl_denserr2:     Filter | string
    pl_denslim:      Filter | number
    pl_orbeccen:     Filter | number
    pl_orbeccenerr1: Filter | number
    pl_orbeccenerr2: Filter | number
    pl_orbeccenlim:  Filter | number
    pl_insol:        Filter | string
    pl_insolerr1:    Filter | string
    pl_insolerr2:    Filter | string
    pl_insollim:     Filter | string
    pl_eqt:          Filter | string
    pl_eqterr1:      Filter | string
    pl_eqterr2:      Filter | string
    pl_eqtlim:       Filter | string
    pl_orbincl:      Filter | string
    pl_orbinclerr1:  Filter | string
    pl_orbinclerr2:  Filter | string
    pl_orbincllim:   Filter | string
    pl_tranmid:      Filter | string
    pl_tranmiderr1:  Filter | string
    pl_tranmiderr2:  Filter | string
    pl_tranmidlim:   Filter | string
    ttv_flag:        Filter | number
    pl_imppar:       Filter | string
    pl_impparerr1:   Filter | string
    pl_impparerr2:   Filter | string
    pl_impparlim:    Filter | string
    pl_trandep:      Filter | string
    pl_trandeperr1:  Filter | string
    pl_trandeperr2:  Filter | string
    pl_trandeplim:   Filter | string
    pl_trandur:      Filter | string
    pl_trandurerr1:  Filter | string
    pl_trandurerr2:  Filter | string
    pl_trandurlim:   Filter | string
    pl_ratdor:       Filter | string
    pl_ratdorerr1:   Filter | string
    pl_ratdorerr2:   Filter | string
    pl_ratdorlim:    Filter | string
    pl_ratror:       Filter | string
    pl_ratrorerr1:   Filter | string
    pl_ratrorerr2:   Filter | string
    pl_ratrorlim:    Filter | string
    pl_occdep:       Filter | string
    pl_occdeperr1:   Filter | string
    pl_occdeperr2:   Filter | string
    pl_occdeplim:    Filter | string
    pl_orbtper:      Filter | number
    pl_orbtpererr1:  Filter | number
    pl_orbtpererr2:  Filter | number
    pl_orbtperlim:   Filter | number
    pl_orblper:      Filter | number
    pl_orblpererr1:  Filter | number
    pl_orblpererr2:  Filter | number
    pl_orblperlim:   Filter | number
    pl_rvamp:        Filter | number
    pl_rvamperr1:    Filter | number
    pl_rvamperr2:    Filter | number
    pl_rvamplim:     Filter | number
    st_spectype:     Filter | string
    st_teff:         Filter | number
    st_tefferr1:     Filter | number
    st_tefferr2:     Filter | number
    st_tefflim:      Filter | number
    st_rad:          Filter | number
    st_raderr1:      Filter | number
    st_raderr2:      Filter | number
    st_radlim:       Filter | number
    st_mass:         Filter | number
    st_masserr1:     Filter | number
    st_masserr2:     Filter | number
    st_masslim:      Filter | number
    st_met:          Filter | number
    st_meterr1:      Filter | number
    st_meterr2:      Filter | number
    st_metlim:       Filter | number
    st_metratio:     Filter | string
    st_logg:         Filter | number
    st_loggerr1:     Filter | number
    st_loggerr2:     Filter | number
    st_logglim:      Filter | number
    rastr:           Filter | string
    ra:              Filter | number
    decstr:          Filter | string
    dec:             Filter | number
    sy_pm:           Filter | number
    sy_pmerr1:       Filter | number
    sy_pmerr2:       Filter | number
    sy_pmra:         Filter | number
    sy_pmraerr1:     Filter | number
    sy_pmraerr2:     Filter | number
    sy_dist:         Filter | number
    sy_disterr1:     Filter | number
    sy_disterr2:     Filter | number
    sy_vmag:         Filter | number
    sy_vmagerr1:     Filter | number
    sy_vmagerr2:     Filter | number
    sy_kmag:         Filter | number
    sy_kmagerr1:     Filter | number
    sy_kmagerr2:     Filter | number
    sy_gaiamag:      Filter | number
    sy_gaiamagerr1:  Filter | number
    sy_gaiamagerr2:  Filter | number
}

enum PlanetFields {
    pl_name,
    hostname,
    pl_letter,
    hd_name,
    hip_name,
    tic_id,
    gaia_id,
    sy_snum,
    sy_pnum,
    sy_mnum,
    cb_flag,
    discoverymethod,
    disc_year,
    disc_refname,
    disc_pubdate,
    disc_locale,
    disc_facility,
    disc_telescope,
    disc_instrument,
    rv_flag,
    pul_flag,
    ptv_flag,
    tran_flag,
    ast_flag,
    obm_flag,
    micro_flag,
    etv_flag,
    ima_flag,
    dkin_flag,
    pl_controv_flag,
    pl_orbper,
    pl_orbpererr1,
    pl_orbpererr2,
    pl_orbperlim,
    pl_orbsmax,
    pl_orbsmaxerr1,
    pl_orbsmaxerr2,
    pl_orbsmaxlim,
    pl_rade,
    pl_radeerr1,
    pl_radeerr2,
    pl_radelim,
    pl_radj,
    pl_radjerr1,
    pl_radjerr2,
    pl_radjlim,
    pl_bmasse,
    pl_bmasseerr1,
    pl_bmasseerr2,
    pl_bmasselim,
    pl_bmassj,
    pl_bmassjerr1,
    pl_bmassjerr2,
    pl_bmassjlim,
    pl_bmassprov,
    pl_dens,
    pl_denserr1,
    pl_denserr2,
    pl_denslim,
    pl_orbeccen,
    pl_orbeccenerr1,
    pl_orbeccenerr2,
    pl_orbeccenlim,
    pl_insol,
    pl_insolerr1,
    pl_insolerr2,
    pl_insollim,
    pl_eqt,
    pl_eqterr1,
    pl_eqterr2,
    pl_eqtlim,
    pl_orbincl,
    pl_orbinclerr1,
    pl_orbinclerr2,
    pl_orbincllim,
    pl_tranmid,
    pl_tranmiderr1,
    pl_tranmiderr2,
    pl_tranmidlim,
    ttv_flag,
    pl_imppar,
    pl_impparerr1,
    pl_impparerr2,
    pl_impparlim,
    pl_trandep,
    pl_trandeperr1,
    pl_trandeperr2,
    pl_trandeplim,
    pl_trandur,
    pl_trandurerr1,
    pl_trandurerr2,
    pl_trandurlim,
    pl_ratdor,
    pl_ratdorerr1,
    pl_ratdorerr2,
    pl_ratdorlim,
    pl_ratror,
    pl_ratrorerr1,
    pl_ratrorerr2,
    pl_ratrorlim,
    pl_occdep,
    pl_occdeperr1,
    pl_occdeperr2,
    pl_occdeplim,
    pl_orbtper,
    pl_orbtpererr1,
    pl_orbtpererr2,
    pl_orbtperlim,
    pl_orblper,
    pl_orblpererr1,
    pl_orblpererr2,
    pl_orblperlim,
    pl_rvamp,
    pl_rvamperr1,
    pl_rvamperr2,
    pl_rvamplim,
    st_spectype,
    st_teff,
    st_tefferr1,
    st_tefferr2,
    st_tefflim,
    st_rad,
    st_raderr1,
    st_raderr2,
    st_radlim,
    st_mass,
    st_masserr1,
    st_masserr2,
    st_masslim,
    st_met,
    st_meterr1,
    st_meterr2,
    st_metlim,
    st_metratio,
    st_logg,
    st_loggerr1,
    st_loggerr2,
    st_logglim,
    rastr,
    ra,
    decstr,
    dec,
    sy_pm,
    sy_pmerr1,
    sy_pmerr2,
    sy_pmra,
    sy_pmraerr1,
    sy_pmraerr2,
    sy_dist,
    sy_disterr1,
    sy_disterr2,
    sy_vmag,
    sy_vmagerr1,
    sy_vmagerr2,
    sy_kmag,
    sy_kmagerr1,
    sy_kmagerr2,
    sy_gaiamag,
    sy_gaiamagerr1,
    sy_gaiamagerr2,
  }