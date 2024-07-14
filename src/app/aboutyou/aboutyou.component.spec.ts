import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutyouComponent } from './aboutyou.component';

describe('AboutyouComponent', () => {
  let component: AboutyouComponent;
  let fixture: ComponentFixture<AboutyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutyouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
