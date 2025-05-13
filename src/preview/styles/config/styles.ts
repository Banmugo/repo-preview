



export const GlobalStyles: {
  backgroundColor: object
  typography: object
  spacing: number[]
  colors: object
  button: object
  notification: object
  pushNotification: object
} = {
  backgroundColor: {
    base: '#ffffff',
    base09: 'rgba(255, 255, 255, 0.9)',
    baseInverted: '#1D2734',
    actionPrimary: '#AD1AC7',
    actionSecondary: 'rgba(72, 0, 149, 1)',
    actionTertiary: '#480095',
    actionQuaternary: 'rgba(255, 148, 63, 1)',
    disabled: 'rgba(173, 26, 199, 0.5)',
    success: '#27C15B',
    danger: '#E31616',
    warning: '#FF943F',
    backgroundCommon: '#F8F7FC',
    defaultModalBackground: '#0003',
    modalBackground: 'rgba(0, 0, 0, 0.5)',
    inactive: '#ccc7',
  },
  typography: {
    heading1: {
      fontWeight: '500',
      fontSize: 28,
      letterSpacing: 0,
      lineHeight: 40,
    },
    heading2: {
      fontWeight: '500',
      fontSize: 18,
      letterSpacing: 0,
    },
    heading3: {
      fontWeight: '500',
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 16,
    },
    heading4: {
      fontWeight: '500',
      fontSize: 14,
      letterSpacing: 0,
    },
    heading5: {
      fontWeight: '500',
      fontSize: 12,
      letterSpacing: 0,
    },
    body: {
      fontWeight: '300',
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 18,
    },
    small: {
      fontWeight: '400',
      fontSize: 12,
      letterSpacing: 0,
    },
    mini: {
      fontWeight: '400',
      fontSize: 9,
      letterSpacing: 0,
    },
  },
  spacing: [0.125, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 8, 16, 24],
  colors: {
    primaryColor: '#FFFFFF',
    secondaryColor: '#480095',
    tertiaryColor: '#FFFFFF',
    quaternaryColor: 'rgba(255, 148, 63, 1)',
    baseTextColor: '#000000',
  },
  button: {
    buttonPrimary: {
      backgroundColor: '#AD1AC7',
      color: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#AD1AC7',
      borderRadius: 8,
    },
    buttonSecondary: {
      backgroundColor: 'rgba(72, 0, 149, 0.16)',
      color: '#480095',
      borderWidth: 1,
      borderColor: 'rgba(72, 0, 149, 0.16)',
      borderRadius: 8,
    },
    buttonTertiary: {
      backgroundColor: '#480095',
      color: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#480095',
      borderRadius: 8,
    },
    buttonQuaternary: {
      backgroundColor: 'rgba(173, 26, 199, 0.16)',
      color: '#FFFFFF',
      borderWidth: 1,
      borderColor: 'rgba(173, 26, 199, 0.16)',
      borderRadius: 8,
    },
  },
  notification: {
    success: {
      backgroundColor: '#AD1AC7',
      color: '#FFFFFF',
    },
    warning: {
      backgroundColor: '#E2D6EE',
      color: '#480095',
    },
    error: {
      backgroundColor: '#E31616',
      color: '#FFFFFF',
    },
  },
  pushNotification: {
    container: {},
    content: {},
    title: {},
    body: {},
  },
}
