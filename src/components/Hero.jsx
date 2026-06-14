import Scene3D from './Scene3D'

export default function Hero() {
  console.log('Hero component rendering...')
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: 600,
      overflow: 'hidden',
      background: '#0a0a0f'
    }}>
      <Scene3D />
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(transparent 30%, #0a0a0f)',
        padding: '80px 40px 48px',
        textAlign: 'center',
        pointerEvents: 'none'
      }}>
        <h1 style={{
          fontSize: '2.6rem',
          fontWeight: 300,
          letterSpacing: '6px',
          marginBottom: 6,
          color: '#fff'
        }}>
          Touch Panel Switch Board
        </h1>
        <p style={{
          color: '#888',
          fontSize: '0.95rem',
          letterSpacing: '3px'
        }}>
          Premium Smart Home Control Surface &mdash; 4-Zone Capacitive Touch
        </p>
      </div>
    </div>
  )
}
