const materials = [
  { icon: '\u25A0', name: 'Enamel Glossy Grey', desc: 'Housing body. Durable painted finish.', rgb: '179, 179, 179' },
  { icon: '\u25A0', name: 'Clear Glass', desc: 'Touch panel overlay. Optically clear, warm tint.', rgb: '246, 246, 243' },
  { icon: '\u25A0', name: 'Polished Brass', desc: 'Button surfaces. Warm gold, mirror finish.', rgb: '243, 203, 124' },
  { icon: '\u25A0', name: 'Rough Steel', desc: 'Mounting plate. Matte textured finish.', rgb: '160, 160, 160' },
]

export default function MaterialsGrid() {
  return (
    <section>
      <div className="container">
        <h2>Materials &amp; Finishes</h2>
        <div className="grid-4">
          {materials.map(m => (
            <div className="card" key={m.name}>
              <span className="icon">{m.icon}</span>
              <h3>{m.name}</h3>
              <p>{m.desc}<br />RGB {m.rgb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
