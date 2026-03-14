import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Produtos } from './pages/produtos/produtos';
import { LayoutBase } from './layouts/base/base';
import { DetalhesProduto } from './pages/detalhes-produto/detalhes-produto';

export const routes: Routes = [
    {
        path: '',
        component: LayoutBase,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Home },
            { path: 'produtos', component: Produtos },
            { path: 'produtos/:id', component: DetalhesProduto },
        ]
    },
];
