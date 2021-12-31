import React, { useState } from 'react'
import { Switch as SwitchUtil } from '@headlessui/react'

import './styles.css'

export default function Switch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="switch">
      {/* TODO: Hay que resolver un problema de accesibilidad, pues si se clickean los label, éstos no cambian al switch */}
      <label className="switch__label" checked={enabled} onChange={setEnabled}>
        Es
      </label>
      <SwitchUtil checked={enabled} onChange={setEnabled} className={`${enabled ? 'bg-1' : 'bg-2'} switch__component`}>
        <span className="switch__sr-only">Enable notifications</span>
        <span className={`${enabled ? 'switch__activate' : 'switch__desactivate'} switch__toggle`} />
      </SwitchUtil>
      <label className="switch__label" checked={enabled} onChange={setEnabled}>
        En
      </label>
    </div>
  )
}
