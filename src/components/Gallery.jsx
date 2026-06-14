const images = [
  'Touch panel board copied.png',
  'Touch panel board copied2.png',
  'Touch panel board copied3.png',
  'Touch panel board copied4.png',
]

export default function Gallery() {
  return (
    <section>
      <div className="container">
        <h2>Gallery</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12
        }}>
          {images.map(src => (
            <img
              key={src}
              src={`/${src}`}
              alt=""
              style={{
                width: '100%',
                borderRadius: 6,
                border: '1px solid #1c1c26'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
