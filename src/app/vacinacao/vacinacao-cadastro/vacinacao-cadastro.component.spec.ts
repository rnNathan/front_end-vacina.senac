import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinacaoCadastroComponent } from './vacinacao-cadastro.component';

describe('VacinacaoCadastroComponent', () => {
  let component: VacinacaoCadastroComponent;
  let fixture: ComponentFixture<VacinacaoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacinacaoCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacinacaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
