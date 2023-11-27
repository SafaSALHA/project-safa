import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
   @Input()
   nom : String =''
   @Input()
   prenom : String=''
   @Input()
   moy_annulle : String = ''
}
