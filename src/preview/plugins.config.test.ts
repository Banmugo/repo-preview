import { describe, it, expect } from 'vitest'
import { plugins } from './plugins.config'

describe('plugins config', () => {
  it('has the correct shape', () => {
    expect(Array.isArray(plugins.plugins)).toBe(true)
    expect(plugins.plugins).toHaveLength(2)

    const [cms, ecommerce] = plugins.plugins

    expect(cms.resolve).toBe('itg-cms-plugin')
    expect(cms.options).toBeDefined()
    expect(cms.options.provider).toBe('vtex')
    expect(cms.options.variables).toEqual({
      accountName: 'itglobers',
      workspace: 'app',
      builderId: 'app',
      contentType: 'page',
    })

    expect(ecommerce.resolve).toBe('itg-ecommerce-plugin')
    expect(ecommerce.options).toBeDefined()
    expect(ecommerce.options.appOwnership).toBe('web')
    expect(ecommerce.options.provider).toBe('vtex')
    expect(ecommerce.options.account).toBe('itglobers')
    expect(ecommerce.options.workspace).toBe('master')

    expect(ecommerce.options.culture).toEqual({
      country: 'COL',
      currency: 'COP',
      customCurrencyDecimalDigits: 0,
      customCurrencySymbol: '$',
      language: 'es',
      locale: 'es-CO',
    })

    expect(ecommerce.options.checkoutUri).toBe(
      'https://itglobers.myvtex.com/checkout/?orderFormId=${orderFormId}'
    )

    expect(ecommerce.options.routesConfig).toBeDefined()
    expect(ecommerce.options.routesConfig?.initialRouteName).toEqual({
      loggedIn: 'Home',
      loggedOut: 'Welcome',
    })
    expect(ecommerce.options.routesConfig?.prefixes).toEqual(['itgapp://'])
    expect(Array.isArray(ecommerce.options.routesConfig?.routes)).toBe(true)

    const checkoutRoute = ecommerce.options.routesConfig?.routes.find(
      (route: { name: string }) => route.name === 'Checkout'
    )
    expect(checkoutRoute).toBeDefined()
    expect(checkoutRoute?.options).toEqual({
      headerShown: false,
      useDefaultLayout: false,
      showTabNavigator: false,
    })
  })
})
