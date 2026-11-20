import { Component, inject } from '@angular/core';
import { IProduto } from '../../../model/IProduto.model';
import { Produtos } from '../../../services/produtos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastrarproduto',
  standalone: false,
  templateUrl: './cadastrarproduto.html',
  styleUrl: './cadastrarproduto.css',
})
export class Cadastrarproduto {
  private produtosService = inject(Produtos);
  private router = inject(Router);

  produto: IProduto = {
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });

  }
}
