import {
  GlobalStylesProvider,
  CustomStylesProvider,
  OrderFormProvider,
  ConfigProvider,
  AutocompleteProvider,
  NotificationsProvider,
  WishListProvider,
  PushNotificationContainer,
} from '@ITGlobers/itg-ecommerce-plugin'

import { plugins } from '../plugins.config'
import { GlobalStyles } from '../styles/config/styles'
import useStyles from '../hooks/useStyles'

const Styles = {}

const globalPlugins: { Provider: unknown; props: object }[] = [
  {
    Provider: ConfigProvider,
    props: { data: { config: plugins.plugins[1].options } },
  },
  {
    Provider: OrderFormProvider,
    props: {},
  },
  {
    Provider: GlobalStylesProvider,
    props: { data: GlobalStyles },
  },
  {
    Provider: CustomStylesProvider,
    props: { data: { styles: Styles, useStyles } },
  },
  {
    Provider: NotificationsProvider,
    props: {},
  },
  {
    Provider: PushNotificationContainer,
    props: {},
  },
  {
    Provider: AutocompleteProvider,
    props: {},
  },
  {
    Provider: WishListProvider,
    props: {},
  },
]

export default globalPlugins
