import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { Pokemon } from '../../core/models/pokemon-model';

@Component({
  selector: 'app-pokedex',
  standalone: false,
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
  pokemonName: string = '';
  pokedex?: Pokemon;
  pokemonFound: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    
    }

    async getPokemon() {
      if (!this.pokemonName) return;

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`);
        if (!response.ok) throw new Error('Pokemon not found');
  
        const data = await response.json();
  
        // Map API data to our Pokemon interface
        this.pokedex = {
          name: data.name,
          abilities: data.abilities.map((a: any) => a.ability.name),
          types: data.types.map((t: any) => t.type.name),
          height: data.height,
          imageUrl: data.sprites.front_default
        };
  
        this.pokemonFound = true;
        this.errorMessage = '';
  
      } catch (error: any) {
        console.error(error);
        this.pokemonFound = false;
        this.errorMessage = error.message || 'Error fetching Pokemon';
      }
    }
  }

