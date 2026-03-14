import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-base',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './base.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutBase {
  readonly anoAtual = new Date().getFullYear();

  readonly links = [
    { label: 'Home', path: '/home', exact: true },
    { label: 'Produtos', path: '/produtos', exact: false },
  ];
}
