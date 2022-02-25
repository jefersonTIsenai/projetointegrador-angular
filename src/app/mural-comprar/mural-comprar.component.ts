import { Component, OnInit } from '@angular/core';
import { ComprarService } from '../comprar.service';
import { Comprar } from '../models/Comprar.model';

@Component({
  selector: 'app-mural-comprar',
  templateUrl: './mural-comprar.component.html',
  styleUrls: ['./mural-comprar.component.css']
})
export class MuralComprarComponent implements OnInit {

  public comprar: Comprar[] = [];

  constructor(private _comprarService: ComprarService) { }

  ngOnInit(): void {
    this.listarComprar();
  }

  listarComprar(){
    this._comprarService.getComprar()
      .subscribe(
        retornaComprar => {
          this.comprar = retornaComprar.map(
            item=>{
              return new Comprar(
                item.id,
                item.nome,
                item.foto,
                item.descricao,
                item.preco
              );
            }
          )
        }
      )
  }

}
