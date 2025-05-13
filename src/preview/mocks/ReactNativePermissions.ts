export const RESULTS = {
  UNAVAILABLE: 'unavailable',
  DENIED: 'denied',
  LIMITED: 'limited',
  GRANTED: 'granted',
  BLOCKED: 'blocked',
}

export const PERMISSIONS = {
  ANDROID: {
    CAMERA: 'android.permission.CAMERA',
    LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
  },
  IOS: {
    CAMERA: 'ios.permission.CAMERA',
    LOCATION: 'ios.permission.LOCATION_WHEN_IN_USE',
  },
  WEB: {
    CAMERA: 'web.permission.CAMERA',
    LOCATION: 'web.permission.LOCATION',
  },
}

export const request = async (permission: string): Promise<string> => {
  console.warn(`Requesting permission: ${permission}`)
  // Simular permisos aprobados en web
  return RESULTS.GRANTED
}

export const check = async (permission: string): Promise<string> => {
  console.warn(`Checking permission: ${permission}`)
  // Simular que el permiso siempre está disponible en web
  return RESULTS.GRANTED
}

export const openSettings = async (): Promise<void> => {
  console.warn('Opening settings...')
  // No hay configuración para permisos en web, así que simplemente registra la llamada
}

export const checkNotifications = async (): Promise<{
  status: string
  settings: Record<string, unknown>
}> => {
  console.warn('Checking notifications...')
  // Simular el estado de las notificaciones
  return { status: RESULTS.GRANTED, settings: {} }
}

export const requestNotifications = async (): Promise<{
  status: string
  settings: Record<string, unknown>
}> => {
  console.warn('Requesting notifications...')
  // Simular que las notificaciones son aprobadas
  return { status: RESULTS.GRANTED, settings: {} }
}
