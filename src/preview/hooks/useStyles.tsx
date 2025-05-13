import { Platform, StyleSheet } from 'react-native'

export interface Styles {
  [key: string]: StyleSheet.NamedStyles<{ [key: string]: object }>
}

const useStyles = (styles: Styles, className?: string) => {
  if (!className) return StyleSheet.create({})

  let componentStyles: StyleSheet.NamedStyles<{ [key: string]: object }> = {}
  const classStyles = styles[className]

  if (classStyles) {
    componentStyles = classStyles

    const filtered = Object.keys(componentStyles).filter(
      (key) => key?.includes('.android') || key?.includes('.ios')
    )

    filtered.forEach((val) => {
      if (val?.includes(`.android`) && Platform.OS === 'android') {
        const originalClass = val.replace('.android', '')
        const platformStyles = componentStyles[val]
        componentStyles[originalClass] = {
          ...componentStyles[originalClass],
          ...platformStyles,
        }
      } else if (val?.includes(`.ios`) && Platform.OS === 'ios') {
        const originalClass = val.replace('.ios', '')
        const platformStyles = componentStyles[val]
        componentStyles[originalClass] = {
          ...componentStyles[originalClass],
          ...platformStyles,
        }
      }

      delete componentStyles[`${val}`]
    })
  } else {
    console.warn(`Class "${className}" is not defined in styles`)
  }

  return StyleSheet.create(componentStyles)
}

export default useStyles
