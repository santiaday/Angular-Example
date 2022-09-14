import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsListItemComponent } from './shows-list-item.component';

describe('ShowsListItemComponent', () => {
  let component: ShowsListItemComponent;
  let fixture: ComponentFixture<ShowsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
