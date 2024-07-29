import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResListComponent } from './res-list.component';

describe('ResListComponent', () => {
  let component: ResListComponent;
  let fixture: ComponentFixture<ResListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
