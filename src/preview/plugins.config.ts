export const plugins = {
  plugins: [
    {
      resolve: `itg-cms-plugin`,
      options: {
        provider: `vtex`,
        variables: {
          accountName: `itglobers`,
          workspace: `app`,
          builderId: `app`,
          contentType: `page`,
        },
      },
    },
    {
      resolve: `itg-ecommerce-plugin`,
      options: {
        appOwnership: `web`,
        provider: `vtex`,
        account: `itglobers`,
        workspace: `master`,
        culture: {
          country: "COL",
          currency: "COP",
          customCurrencyDecimalDigits: 0,
          customCurrencySymbol: "$",
          language: "es",
          locale: "es-CO",
        },
        checkoutUri:
           
          "https://itglobers.myvtex.com/checkout/?orderFormId=${orderFormId}",
        routesConfig: {
          initialRouteName: {
            loggedIn: "Home",
            loggedOut: "Welcome",
          },
          prefixes: ["itgapp://"],
          routes: [
            {
              name: "Checkout",
              options: {
                headerShown: false,
                useDefaultLayout: false,
                showTabNavigator: false,
              },
            },
            {
              name: "Profile",
              options: {
                useDefaultLayout: false,
              },
            },
            {
              name: "Categories",
              options: {
                useDefaultLayout: false,
              },
            },
            {
              name: "Search",
              options: {
                useDefaultLayout: false,
              },
            },
            {
              name: "Welcome",
              options: {
                headerShown: false,
                showTabNavigator: false,
                loggedIn: false,
              },
            },
            {
              name: "Login",
              options: {
                headerShown: false,
                showTabNavigator: false,
                loggedIn: false,
              },
            },
            {
              name: "Wishlist",
              options: {
                useDefaultLayout: false,
              },
            },
            {
              name: "Delivery",
              options: {
                useDefaultLayout: false,
              },
            },
            {
              name: "Pickup",
              options: {
                useDefaultLayout: false,
              },
            },
            {
              name: "PaymentMethods",
              options: {
                useDefaultLayout: false,
              },
            },
          ],
        },
        // ¿Default session?
      },
    },
  ],
};
