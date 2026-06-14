const features = [
  { icon: '\u{1F4F6}', name: 'Dual Connectivity', desc: 'Wi-Fi 2.4/5 GHz + Bluetooth 5.0 for direct network integration and local low-power control.' },
  { icon: '\u{1F50C}', name: 'Capacitive Touch', desc: 'High-sensitivity sensing with proximity wake, configurable thresholds, and multi-touch support.' },
  { icon: '\u{1F4E6}', name: 'Matter / Zigbee', desc: 'Matter protocol + Zigbee 3.0 for cross-platform interoperability with all major smart home ecosystems.' },
  { icon: '\u{1F3E0}', name: 'Scene Automation', desc: 'Programmable scenes, schedules, and rules engine. Trigger groups of devices per press or time.' },
  { icon: '\u{1F50A}', name: 'Voice Assistants', desc: 'Alexa, Google Home, Apple HomeKit, and IFTTT integration for hands-free control.' },
  { icon: '\u{1F4CA}', name: 'Energy Monitoring', desc: 'Per-zone real-time power tracking with historical reports via the companion mobile app.' },
]

export default function IoTFeatures() {
  return (
    <section>
      <div className="container">
        <h2>IoT &amp; Smart Features</h2>
        <div className="grid-3">
          {features.map(f => (
            <div className="card" key={f.name}>
              <span className="icon" style={{ fontSize: '1.6rem' }}>{f.icon}</span>
              <h3>{f.name}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <br />
        <h3>Platform Integration</h3>
        <ul>
          <li>iOS / Android companion app with remote access</li>
          <li>Home Assistant, SmartThings, Hubitat</li>
          <li>MQTT, HTTPS/REST APIs for custom automation</li>
          <li>OTA firmware updates with encrypted rollback</li>
          <li>Multi-panel grouping and cross-panel scene sync</li>
        </ul>
      </div>
    </section>
  )
}
