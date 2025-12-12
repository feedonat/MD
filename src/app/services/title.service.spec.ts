import { TestBed } from '@angular/core/testing';
import { TitleService } from './title.service';

describe('TitleService', () => {
  let service: TitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default title "MD"', () => {
    expect(service.getTitle()).toBe('MD');
    expect(service.title()).toBe('MD');
  });

  it('should set and get title', () => {
    service.setTitle('Test Title');
    expect(service.getTitle()).toBe('Test Title');
    expect(service.title()).toBe('Test Title');
  });

  it('should update title signal when title changes', () => {
    const initialTitle = service.title();
    expect(initialTitle).toBe('MD');

    service.setTitle('New Title');
    const updatedTitle = service.title();
    expect(updatedTitle).toBe('New Title');
  });

  it('should handle empty title', () => {
    service.setTitle('');
    expect(service.getTitle()).toBe('');
  });

  it('should handle special characters in title', () => {
    const specialTitle = 'Test & <Title> "with" \'quotes\'';
    service.setTitle(specialTitle);
    expect(service.getTitle()).toBe(specialTitle);
  });
});
