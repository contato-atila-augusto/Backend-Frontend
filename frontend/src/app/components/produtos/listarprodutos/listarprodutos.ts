import { ChangeDetectorRef, Component } from '@angular/core';
import { Produtos } from '../../../services/produtos';
import { IProduto } from '../../../model/IProduto.model';

// Interface para garantir a tipagem correta do produto
export interface Produto {
  id: number;
  nome: string;
  valor: number;
  validade: string;
  promocao?: boolean;
}

@Component({
  selector: 'app-listarprodutos',
  standalone: false,
  templateUrl: './listarprodutos.html',
  styleUrl: './listarprodutos.css',
})
export class Listarprodutos {
  listaProdutos: IProduto[] = []

  constructor(private produtosService: Produtos, private cd: ChangeDetectorRef) {
    this.carregarProdutos();
  }

  carregarProdutos(): void{
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno;
      this.cd.detectChanges();
    });
  }

  deletar(produto: IProduto): void{
    this.produtosService.excluir(produto.id!).subscribe(() =>{
      this.produtosService.exibirMensagem(
        'SISTEMA',
        `${produto.nome} foi ecluido com sucesso!`,
        'toast-error'
      );
      this.carregarProdutos();
    })
  }

}