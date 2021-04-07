import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ApiService } from 'src/services/api.service';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(()=>TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[AppComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('test_case12', async () => {
    expect(component).toBeDefined();

  });
  });
