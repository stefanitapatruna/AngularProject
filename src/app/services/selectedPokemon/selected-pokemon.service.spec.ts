import { TestBed } from '@angular/core/testing';

import { SelectedPokemonService } from './selected-pokemon.service';

describe('SelectedPokemonService', () => {
  let service: SelectedPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
