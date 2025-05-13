import { CircularProgress, Grid2 } from '@mui/material'
import Styles from './preview.module.scss'
import { Fragment } from 'react'
import ComponentsPreview from './componentsPreview'
import type { Section } from './index'
// import { useLanguageContext } from '@/language/useLanguageContext'

const PreviewUI = ({
  sections = [],
  sectionsLoading,
}: {
  sections:
    | (Section & {
        __typename?: string
      })[]
    | undefined
  sectionsLoading?: boolean
}) => {
  // const { translations, languageSelect } = useLanguageContext()

  const renderContent = () => {
    if (sectionsLoading) {
      return (
        <Grid2
          data-testid="loading-spinner-container"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <CircularProgress data-testid="loading-spinner" />
        </Grid2>
      )
    }

    if (sections?.length === 0) {
      return (
        <Grid2
          data-testid="empty-state-message"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: '#666',
            fontSize: '14px',
            textAlign: 'center',
          }}
        >
          {
            translations.editorTranslate['preview-empty-sections'][
              languageSelect
            ]
          }
        </Grid2>
      )
    }

    return (
      <Grid2 sx={{ userSelect: 'none', pointerEvents: 'none' }}>
        {sections?.map(({ name, data, id }) => (
          <Fragment key={id}>
            <ComponentsPreview name={name} data={data} />
          </Fragment>
        ))}
      </Grid2>
    )
  }

  return (
    <Grid2
      container
      className={Styles.phone}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '330px',
        height: '670px',
        margin: '30px auto 0 auto',
        background: '#FFFFFF',
        borderRadius: '60px',
      }}
    >
      <Grid2
        container
        sx={{
          backgroundImage: `url(/mobile.png)`,
          borderRadius: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          flexDirection: 'column',
        }}
      >
        <Grid2
          className="scroll"
          sx={{
            width: '87%',
            height: '83%',
            overflow: 'hidden',
            overflowY: 'auto',
            position: 'relative',
          }}
        >
          {renderContent()}
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default PreviewUI
