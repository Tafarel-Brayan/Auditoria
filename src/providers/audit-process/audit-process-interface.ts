export interface AuditProcessInterface{
    aupr_id: number,
    aupr_audi_id: number,
    aupr_proc_id: number,
    aupr_proc_name: string,
    aupr_proc_seq: number,
    aupr_proc_user_id: number,

    total_item: number,
    
    aprovados_digiboard: number,
    reprovados_digiboard: number,
    n_auditados_digiboard:number,

    aprovados_lenovo: number,
    reprovados_lenovo: number,
    n_auditados_lenovo: number

}