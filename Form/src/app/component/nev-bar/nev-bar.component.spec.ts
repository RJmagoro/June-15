import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevBarComponent } from './nev-bar.component';

describe('NefBarComponent', () => {
  let component: NevBarComponent;
  let fixture: ComponentFixture<NevBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
