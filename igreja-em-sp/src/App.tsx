import { BrowserRouter } from 'react-router-dom' 
import { PageLayout } from './components/layout/PageLayout'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter> 
    <PageLayout>
      <Home />
    </PageLayout>
    </BrowserRouter> 
  )
}

export default App
