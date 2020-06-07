import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from '../usuario.model';
import { Autenticacao } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel = new EventEmitter<string>();

  public formulario = new FormGroup({
    email: new FormControl(null),
    nome_completo: new FormControl(null),
    nome_usuario: new FormControl(null),
    senha: new FormControl(null)
  });

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit(): void {
    }

  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login');
  }

  public cadastrarUsuario(): void {
    const {email, nome_completo, nome_usuario, senha} = this.formulario.value;

    const usuario = new Usuario(
      email,
      nome_completo,
      nome_usuario,
      senha
    );

    this.autenticacao.cadastrarUsuario(usuario)
      .then(() => this.exibirPainelLogin());
  }

}
