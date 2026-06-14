export default function DimensionDiagram() {
  return (
    <section>
      <div className="container">
        <h2>Dimensions</h2>
        <p style={{ marginBottom: 12 }}>
          Standard wall-box form factor with ultra-slim projection. Compatible with EU (86 mm)
          and US standard 1-gang boxes.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          marginTop: 32
        }}>
          <img src="/dimension_front.svg" alt="Front view dimensions" style={{
            width: '100%', borderRadius: 8, border: '1px solid #1c1c26'
          }} />
          <img src="/dimension_side.svg" alt="Side view dimensions" style={{
            width: '100%', borderRadius: 8, border: '1px solid #1c1c26'
          }} />
        </div>
      </div>
    </section>
  )
}
