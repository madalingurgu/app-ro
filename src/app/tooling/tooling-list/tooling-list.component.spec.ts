import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolingListComponent } from './tooling-list.component';

describe('ToolingListComponent', () => {
  let component: ToolingListComponent;
  let fixture: ComponentFixture<ToolingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
