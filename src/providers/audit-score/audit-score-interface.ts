export interface AuditScoreInterface{
    audi_id:number,
    ausc_id:number,
    aupr_id:number,
    aupr_proc_seq:number,
    aupr_proc_name:string,
    auca_id:number,
    auca_cate_name:string,
    audc_id:number,
    audc_crit_criterion:string,
    aucc_id:number,
    aucc_cucr_custumer_criteria:string,
    ausc_reference_document_lenovo:string,
    ausc_score_lenovo:number,
    ausc_remark_lenovo:string,
    ausc_department_lenovo:number,
    department_name_lenovo:string,
    ausc_owner_lenovo:number,
    owner_lenovo_name:string,
    ausc_action_lenovo:string,
    ausc_duedate_lenovo:Date,
    ausc_status_lenovo:number,
    ausc_reference_document_digiboard:string,
    ausc_score_digiboard:number,
    ausc_remark_digiboard:string,
    ausc_department_digiboard:number,
    department_name_digiboard:string,
    ausc_owner_digiboard:number,
    owner_digiboard_name:string,
    ausc_action_digiboard:string,
    ausc_duedate_digiboard:Date,
    ausc_status_digiboard:number
}