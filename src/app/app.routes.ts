import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => {
            return import('./components/login/login.component').then((m)=> m.LoginComponent);
        }
    },
    {
        path: 'selectUserType',//top, root
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/select-user-type/select-user-type.component').then((m) => m.SelectUserTypeComponent);
            }
    },
    {
        path: 'selectCharacter',
        loadComponent: () => {
            return import('./components/character-selection/character-selection.component').then((m)=> m.CharacterSelectionComponent);
        }
    },
];
