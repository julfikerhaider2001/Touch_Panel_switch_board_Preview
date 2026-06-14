import Hero from './components/Hero'
import DesignFeatures from './components/DesignFeatures'
import MaterialsGrid from './components/MaterialsGrid'
import DimensionDiagram from './components/DimensionDiagram'
import IoTFeatures from './components/IoTFeatures'
import Specifications from './components/Specifications'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  console.log('App component rendering...')
  
  return (
    <>
      <Hero />
      <DesignFeatures />
      <MaterialsGrid />
      <DimensionDiagram />
      <IoTFeatures />
      <Specifications />
      <Gallery />
      <Footer />
    </>
  )
}
