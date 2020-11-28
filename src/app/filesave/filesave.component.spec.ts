import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesaveComponent } from './filesave.component';

describe('FilesaveComponent', () => {
  let component: FilesaveComponent;
  let fixture: ComponentFixture<FilesaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
