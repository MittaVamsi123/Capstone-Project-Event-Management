import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiserEventListComponent } from './organiser-event-list.component';

describe('OrganiserEventListComponent', () => {
  let component: OrganiserEventListComponent;
  let fixture: ComponentFixture<OrganiserEventListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganiserEventListComponent]
    });
    fixture = TestBed.createComponent(OrganiserEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
