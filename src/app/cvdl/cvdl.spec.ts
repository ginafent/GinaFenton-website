import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVdl } from './cvdl';

describe('CVdl', () => {
  let component: CVdl;
  let fixture: ComponentFixture<CVdl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CVdl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVdl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
