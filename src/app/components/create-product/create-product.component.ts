import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  ValidationErrors
} from "@angular/forms";
import {PokemonService} from "../../services/pokemon/pokemon.service";
import {CustomPokemon} from "../../interfaces/CustomPokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  categoriesArray = ['electronics', 'cloths', 'blankets'];
  pokemonForm: FormGroup;
  urlIsValid: boolean = false;
  createPokemon = {} as CustomPokemon;
  storage: any;

  constructor(private _pokemonService: PokemonService,
              private fb: FormBuilder,
              private router: Router) {
    this.pokemonForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      categories: new FormControl(''),
      imageUrl: new FormControl('', [Validators.required, this.ValidateUrl()]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]),
      country: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  savePokemon() {
    let currentPosition = localStorage.length;

    this.createPokemon.name = this.name?.value;
    this.createPokemon.description = this.description?.value;
    this.createPokemon.price = this.price?.value;
    this.createPokemon.categories = this.categories?.value;
    this.createPokemon.imageUrl = this.imageUrl?.value;
    this.createPokemon.phone = this.phone?.value;
    this.createPokemon.country = this.country?.value;

    localStorage.setItem(currentPosition.toString(), JSON.stringify(this.createPokemon));
    this.router.navigateByUrl('productList');
  }

  get name() {
    return this.pokemonForm.get('name');
  }

  get description() {
    return this.pokemonForm.get('description');
  }

  get price() {
    return this.pokemonForm.get('price');
  }

  get categories() {
    return this.pokemonForm.get('categories');
  }

  get imageUrl() {
    return this.pokemonForm.get('imageUrl');
  }

  get phone() {
    return this.pokemonForm.get('phone');
  }

  get country() {
    return this.pokemonForm.get('country');
  }

  ValidateUrl(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if (!control.value.startsWith('https')) {
        return {invalidUrl: true};
      }
      return null;
    }
  }
}
