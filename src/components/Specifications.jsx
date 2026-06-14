const specs = [
  ['Model', 'TPS-400'],
  ['Type', '4-Zone Capacitive Touch Panel'],
  ['Dimensions', '86 x 86 x 32 mm (H x W x D)'],
  ['Material', 'Glass panel, painted metal housing, brass buttons, steel mounting plate'],
  ['Connectivity', 'Wi-Fi 802.11 a/b/g/n/ac (2.4 + 5 GHz), Bluetooth 5.0, Zigbee 3.0'],
  ['Protocol', 'MQTT, HTTP/HTTPS, Matter 1.0'],
  ['Input', '100\u2013240 V AC 50/60 Hz (no neutral wire required)'],
  ['Max Load', '1500 W resistive / 300 W LED per zone'],
  ['Firmware', 'OTA updates, signed + encrypted'],
  ['Operating Temp', '-10\u00b0C to 50\u00b0C'],
  ['Certifications', 'CE, RoHS, FCC, UKCA'],
  ['Warranty', '2 years (extended 5 years available)'],
]

export default function Specifications() {
  return (
    <section>
      <div className="container">
        <h2>Technical Specifications</h2>
        <table style={{
          width: '100%', borderCollapse: 'collapse'
        }}>
          <tbody>
            {specs.map(([label, value]) => (
              <tr key={label} style={{ borderBottom: '1px solid #16161f' }}>
                <td style={{
                  padding: '14px 20px', color: '#fff', fontWeight: 400,
                  width: 200, whiteSpace: 'nowrap', fontSize: '0.9rem'
                }}>{label}</td>
                <td style={{
                  padding: '14px 20px', color: '#999', fontSize: '0.9rem'
                }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
