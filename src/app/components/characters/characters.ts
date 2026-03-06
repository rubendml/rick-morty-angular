import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { CharacterService } from '../../services/character';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './characters.html',
  styleUrls: ['./characters.css']
})
export class Characters implements OnInit {

  characters: any[] = [];
  loading = true;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {

    this.characterService.getCharacters().subscribe({

      next: (data: any) => {
        console.log("Datos de la API:", data);
        this.characters = data.results;
        this.loading = false;
      },

      error: (error) => {
        console.error("Error al consumir la API:", error);
        this.loading = false;
      }

    });

  }

}