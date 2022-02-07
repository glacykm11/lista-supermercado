import { ProdutoServiceService } from './../services/produto-service.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Produto } from 'src/app/models/IProduto';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  produto = {} as Produto;
  produtos: Produto[];

  constructor(private produtoService: ProdutoServiceService){}

  ngOnInit(): void {
   
  }

  produtoForm = new FormGroup({
    nomeProduto: new FormControl(''),
    quantidadeProduto: new FormControl(''),
    precoProduto: new FormControl(''),
  })



  adicionarProduto(form: any){
    this.produtoService.saveProduct(this.produto).subscribe(response => console.log(response));
  }
}