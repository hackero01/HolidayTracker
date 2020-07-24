import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddContComponent } from './dialog-add-cont.component';

describe('DialogAddContComponent', () => {
  let component: DialogAddContComponent;
  let fixture: ComponentFixture<DialogAddContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
