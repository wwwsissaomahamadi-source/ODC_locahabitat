import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogementCard } from './logement-card';

describe('LogementCard', () => {
  let component: LogementCard;
  let fixture: ComponentFixture<LogementCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogementCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LogementCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
