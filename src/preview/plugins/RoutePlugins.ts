import {
  OrderPlacedProvider,
  OrderDetailProvider,
  ProductDetailProvider,
  ProductListPageProvider,
} from '@ITGlobers/itg-ecommerce-plugin'

const routePlugins: object = {
  Product: {
    Provider: ProductDetailProvider,
  },
  Search: {
    Provider: ProductListPageProvider,
  },
  OrderDetail: {
    Provider: OrderDetailProvider,
  },
  OrderPlaced: {
    Provider: OrderPlacedProvider,
  },
}

export default routePlugins
