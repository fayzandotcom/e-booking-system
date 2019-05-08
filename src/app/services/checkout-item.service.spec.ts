import { TestBed } from '@angular/core/testing';

import { CheckoutItemService } from './checkout-item.service';

describe('CheckoutItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckoutItemService = TestBed.get(CheckoutItemService);
    expect(service).toBeTruthy();
  });
});
