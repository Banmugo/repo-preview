import * as React from 'react'
import {
  ConfigProvider,
  CustomStylesProvider,
  GlobalStylesProvider,
  NotificationsProvider,
  OrderFormProvider,
  PushNotificationContainer,
} from '@ITGlobers/itg-ecommerce-plugin'
import { GlobalStyles } from '../styles/config/styles'
import useStyles from '../hooks/useStyles'
import { Component } from '../component'

const Styles = {}

export default function ComponentsPreviewUI({
  name,
  data = {},
}: Readonly<{ name: string; data: object }>) {
  const styles = {
    GlobalStyles,
    Styles,
  }
  const config = {
    provider: `vtex`,
    account: `itglobers`,
    workspace: `master`,
    culture: {
      country: 'COL',
      currency: 'COP',
      customCurrencyDecimalDigits: 0,
      customCurrencySymbol: '$',
      language: 'es',
      locale: 'es-CO',
    },
    routesConfig: {
      prefixes: ['itgapp://'],
    },
    checkoutUri:
      'https://itglobers.myvtex.com/checkout/?orderFormId=${orderFormId}',
  }

  return (
    <ConfigProvider data={{ config }}>
      <GlobalStylesProvider data={styles?.GlobalStyles}>
        <CustomStylesProvider data={{ styles: styles?.Styles, useStyles }}>
          <OrderFormProvider>
            <NotificationsProvider>
              <PushNotificationContainer>
                <Component name={name} data={data} />
              </PushNotificationContainer>
            </NotificationsProvider>
          </OrderFormProvider>
        </CustomStylesProvider>
      </GlobalStylesProvider>
    </ConfigProvider>
  )
}
