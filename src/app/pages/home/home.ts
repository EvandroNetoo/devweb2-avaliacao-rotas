import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly topicos = [
    'Roteamento com Angular Router',
    'Rotas filhas no layout base',
    'Parâmetros de rota para detalhes',
  ];
}
