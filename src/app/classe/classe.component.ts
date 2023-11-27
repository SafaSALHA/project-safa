import { Component } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  listEtudiant = [
    {nom:'Tozri', prenom:'Salah', moy_annuelle:'13.4'},
    {nom:'Karoui', prenom:'Fatma', moy_annuelle:'15.8'},
    {nom:'Tunsi', prenom:'Bayrem', moy_annuelle:'8.5'}
  ]
}
