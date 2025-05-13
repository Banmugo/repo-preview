import React from 'react'

interface WebViewProps {
  source: { uri: string }
  style?: React.CSSProperties
  onLoad?: () => void
  onError?: (error: Error) => void
}

export const WebView: React.FC<WebViewProps> = ({
  source,
  style,
  onLoad,
  onError,
}) => {
  React.useEffect(() => {
    if (onLoad) {
      onLoad() // Simula una carga exitosa
    }
  }, [onLoad])

  if (!source?.uri) {
    if (onError) {
      onError(new Error('No source URI provided'))
    }
    return <div style={{ ...style, color: 'red' }}>Error: No source URI</div>
  }

  return (
    <iframe
      data-testId="WebViewMock"
      src={source.uri}
      style={{ border: 'none', width: '100%', height: '100%', ...style }}
      title="WebView Mock"
      onLoad={onLoad}
      onError={() => {
        if (onError) {
          onError(new Error('Failed to load WebView'))
        }
      }}
    />
  )
}
