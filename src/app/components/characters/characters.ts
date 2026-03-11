import { Component, OnInit } from '@angular/core';
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

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: (response: any) => {

        console.log("Respuesta completa:", response);

        if (response && response.results) {
          this.characters = response.results;
        }

        this.loading = false;
      },

      error: (error) => {
        console.error("Error al consumir la API:", error);
        this.loading = false;
      }
    });
  }
}