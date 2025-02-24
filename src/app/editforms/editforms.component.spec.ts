import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformsComponent } from './editforms.component';

describe('EditformsComponent', () => {
  let component: EditformsComponent;
  let fixture: ComponentFixture<EditformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
