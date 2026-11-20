import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './template/header/header';
import { Footer } from './template/footer/footer';
import { Home } from './components/home/home';
import { Listarprodutos } from './components/produtos/listarprodutos/listarprodutos';
import { Cadastrarproduto } from './components/produtos/cadastrarproduto/cadastrarproduto';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared-module';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { AtualizarProduto } from './components/produtos/atualizar-produto/atualizar-produto';
import { provideSweetAlert2, SwalComponent, SwalDirective } from "@sweetalert2/ngx-sweetalert2";
registerLocaleData(localePt);


@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    Listarprodutos,
    Cadastrarproduto,
    AtualizarProduto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    SwalComponent,
    SwalDirective
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    provideHttpClient(),
    provideToastr(), // Toastr providers
    provideSweetAlert2({
      fireOnInit: false,
      dismissOnDestroy: true,
    }),
  ],
  bootstrap: [App]
})
export class AppModule { }
