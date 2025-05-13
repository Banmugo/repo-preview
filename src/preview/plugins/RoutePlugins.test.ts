import { describe, it, expect, vi } from 'vitest'
import routePlugins from './RoutePlugins'

vi.mock('@ITGlobers/itg-ecommerce-plugin', () => ({
  OrderPlacedProvider: () => null,
  OrderDetailProvider: () => null,
  ProductDetailProvider: () => null,
  ProductListPageProvider: () => null,
}))

describe('routePlugins', () => {
  it('has the correct structure', () => {
    expect(routePlugins).toHaveProperty('Product')
    expect(routePlugins).toHaveProperty('Search')
    expect(routePlugins).toHaveProperty('OrderDetail')
    expect(routePlugins).toHaveProperty('OrderPlaced')
  })
})
