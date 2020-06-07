import { Usuario } from './acesso/usuario.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Autenticacao{

  constructor(
    public firestore: AngularFirestore,
    public fireauth: AngularFireAuth,
    private router: Router
  ){
  }

  public cadastrarUsuario(usuario: Usuario): Promise<any>{
    return this.fireauth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((resposta) => {
        this.firestore.doc(`usuario_detalhe/${resposta.user.uid}`)
          .set({
            email: usuario.email,
            nome_completo: usuario.nome_completo,
            nome_usuario: usuario.nome_usuario,
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public autenticar(email: string, senha: string): void{
    this.fireauth.signInWithEmailAndPassword(email, senha)
      .then(resposta => {
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log('error', error));
  }

  public sair(): void{
    this.fireauth.signOut();
  }
}
