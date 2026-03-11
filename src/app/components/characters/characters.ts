import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.html',
  styleUrls: ['./characters.css']
})
export class Characters implements OnInit {

  characters: any[] = [];
  loading = true;

  constructor(
    private characterService: CharacterService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.characterService.getCharacters().subscribe({

      next: (response: any) => {

        console.log("Respuesta completa:", response);

        this.characters = response.results;

        this.loading = false;

        this.cd.detectChanges();   // 👈 fuerza actualización de la vista
      },

      error: (error) => {

        console.error("Error al consumir la API:", error);

        this.loading = false;

        this.cd.detectChanges();
      }

    });

  }

}