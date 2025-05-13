import { Card, CircularProgress, Grid2, Backdrop } from '@mui/material'
import { ErrorBoundary } from 'react-error-boundary'
import { useComponent } from './useComponent'

export const ComponentUI = ({
  name,
  data = {},
}: Readonly<{ name: string; data: object }>) => {

  const {
    Component,
    isChangeData,
    isMounted,
    errorFallbackCard,
    omitComponents,
    errorRenderCard,
    verifyRenderComponents
  } = useComponent({ name, data })

  if (omitComponents.includes(name)) return <></>

  if (!Component) {
    console.error(`Component ${name} not found`)
    return <></>
  }

  return (
    <Grid2 sx={{ position: "relative", minHeight: "100px" }}>
      {
        Component !== undefined &&
          isMounted
          ? <Grid2 sx={{
            filter: isChangeData ? "blur(5px)" : "none",
            opacity: isChangeData ? 0.5 : 1,
            transition: "all 0.3s ease-in-out",
          }}>
            <ErrorBoundary resetKeys={[`${JSON.stringify(data)}`]}
              fallback={<Card>{errorFallbackCard()} </Card>}
            >
              {verifyRenderComponents.includes(name) ? <Card>{errorRenderCard()}</Card> :
                <Component {...data} />
              }
            </ErrorBoundary>
          </Grid2>
          : null
      }

      {isChangeData && (
        <Backdrop
          open={isChangeData}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Backdrop>
      )}
    </Grid2>
  )
}
