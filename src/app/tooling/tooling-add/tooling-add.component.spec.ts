import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolingAddComponent } from './tooling-add.component';

describe('ToolingAddComponent', () => {
  let component: ToolingAddComponent;
  let fixture: ComponentFixture<ToolingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
