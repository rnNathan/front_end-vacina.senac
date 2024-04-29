import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasDetalhesComponent } from './pessoas-detalhes.component';

describe('PessoasDetalhesComponent', () => {
  let component: PessoasDetalhesComponent;
  let fixture: ComponentFixture<PessoasDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoasDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
