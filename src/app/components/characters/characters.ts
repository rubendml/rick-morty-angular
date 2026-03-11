import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character';
import { finalize } from 'rxjs/operators';

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
    this.characterService.getCharacters()
      .pipe(
        finalize(() => {
          // Siempre se ejecuta al terminar (éxito o error)
          this.loading = false;
        })
      )
      .subscribe({
        next: (response: any) => {
          console.log('Respuesta completa:', response);
          this.characters = response?.results ?? [];
        },
        error: (error) => {
          console.error('Error al consumir la API:', error);
        }
      });
  }
}