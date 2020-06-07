import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Autenticacao } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() public exibirPainel = new EventEmitter<string>();

  public formulario = new FormGroup({
    email: new FormControl(null),
    senha: new FormControl(null)
  });

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit(): void {
  }

  public exibirPainelCadastro(): void{
    this.exibirPainel.emit('cadastro');
  }

  public autenticar(): void{
    const {email, senha} = this.formulario.value;
    this.autenticacao.autenticar(email, senha);
  }
}
