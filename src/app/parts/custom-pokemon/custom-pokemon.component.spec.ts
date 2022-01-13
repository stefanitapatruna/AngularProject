import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomPokemonComponent} from './custom-pokemon.component';

describe('CustomPokemonComponent', () => {
  let component: CustomPokemonComponent;
  let fixture: ComponentFixture<CustomPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomPokemonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
