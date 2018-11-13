import { EventEmitter } from "@angular/core";

export class LoginService {
    notifier = new EventEmitter()

    notify(dados: any) {
        this.notifier.emit({name: dados.name, empresa: dados.empresa, usem_empr_id:dados.usem_empr_id})
    }
}