import { describe, it, expect, vi } from 'vitest'
import globalPlugins from './GlobalPlugins'
import { plugins } from '../plugins.config'
import { GlobalStyles } from '../styles/config/styles'
import useStyles from '../hooks/useStyles'

vi.mock('@ITGlobers/itg-ecommerce-plugin', () => {
  return {
    GlobalStylesProvider: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    CustomStylesProvider: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    OrderFormProvider: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    ConfigProvider: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    AutocompleteProvider: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    NotificationsProvider: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    WishListProvider: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    PushNotificationContainer: ({
      children,
    }: {
      children: React.ReactNode
    }) => <>{children}</>,
  }
})

describe('globalPlugins array', () => {
  it('should have 8 providers in the correct order with correct props', () => {
    expect(globalPlugins?.length).toBe(8)
    const [
      cfg,
      orderForm,
      globalStylesProv,
      customStylesProv,
      notifs,
      pushNotif,
      autoComplete,
      wishlist,
    ] = globalPlugins
    expect(cfg.props).toEqual({
      data: { config: plugins.plugins[1].options },
    })
    expect(orderForm.props).toEqual({})
    expect(globalStylesProv.props).toEqual({ data: GlobalStyles })
    expect(customStylesProv.props).toEqual({
      data: { styles: {}, useStyles },
    })
    expect(notifs.props).toEqual({})
    expect(pushNotif.props).toEqual({})
    expect(autoComplete.props).toEqual({})
    expect(wishlist.props).toEqual({})
  })
})
