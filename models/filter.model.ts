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
    field: string,
    direction: string
}

export interface Pagination {
    offset: number,
    size: number
}

export interface PlanetFilter {
    pl_name:         Filter | string
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