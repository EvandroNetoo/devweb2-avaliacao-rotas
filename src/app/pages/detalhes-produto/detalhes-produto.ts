import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { produtos, TProduto } from '../../produtos';

@Component({
	selector: 'app-detalhes-produto',
	imports: [RouterLink],
	templateUrl: './detalhes-produto.html',
})
export class DetalhesProduto implements OnInit {
	produto: TProduto | null = null;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			const id = Number(params['id']);
			this.produto = produtos.find(p => p.id === id) || null;
		});
	}
}