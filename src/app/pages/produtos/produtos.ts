import { ChangeDetectionStrategy, Component } from '@angular/core';
import { produtos } from '../../produtos';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-produtos',
	imports: [RouterLink],
	templateUrl: './produtos.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Produtos {
	readonly produtos = produtos.map((produto) => {
		const qtdPalavras = produto.descricao.split(/\s+/).filter(Boolean).length;

		return {
			...produto,
			palavras: qtdPalavras,
			tempoLeitura: Math.max(1, Math.ceil(qtdPalavras / 180)),
		};
	});

	readonly totalProdutos = this.produtos.length;
}
