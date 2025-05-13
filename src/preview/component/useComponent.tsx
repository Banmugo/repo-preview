import { useEffect, useRef, useState } from 'react'
import { components } from '@ITGlobers/itg-ecommerce-plugin'
import { Card, CardContent, Typography } from '@mui/material'

const omitComponents = [
  'webview-checkout',
  'welcome-component',
  'maintenance-screen',
  'update-version-modal',
]

const verifyRenderComponents = [
  'wish-list-page',
  'image-background',
  'product-images',
  'top-searches',
]

export const useComponent = ({
  name,
  data = {},
}: Readonly<{ name: string; data: object }>) => {
  const [isChangeData, setIsChangeData] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    setIsChangeData(true)

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsChangeData(false)
      timeoutRef.current = null
    }, 600)

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [data])

  const Component = components[name]

  const errorFallbackCard = () => (
    <Card sx={{ p: 1, textAlign: 'center', borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="body2" color="error" fontWeight="bold" mb={1}>
          Oops! Visualización no disponible
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Verifique las propiedades del componente.
        </Typography>
      </CardContent>
    </Card>
  )

  const errorRenderCard = () => (
    <Card sx={{ p: 1, textAlign: 'center', borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Previsualización no disponible.
        </Typography>
      </CardContent>
    </Card>
  )

  return {
    Component,
    isChangeData,
    isMounted,
    errorFallbackCard,
    errorRenderCard,
    omitComponents,
    verifyRenderComponents,
  }
}
