import '../styles/App.css'
import { FlagProvider } from '../features/flags/FlagProvider'
import FlagControls from '../features/flags/FlagControls'
import PreviewShell from '../features/preview/PreviewShell'
import { Card } from '../components/Card'

function App() {

  return (
    <>
      <FlagProvider overrides={{ newDashboard: true }}>
        <Card title="Feature Flags">
          <FlagControls />
        </Card>
        <PreviewShell />
      </FlagProvider>
    </>
  )
}

export default App
