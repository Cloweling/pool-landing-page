import * as React from 'react'
import { Switch as SwitchUtil } from '@headlessui/react'

import ThemeContext from '../../contexts/themeContext'

import './styles.css'

const Switch = () => {
  const { lang, setTheme } = React.useContext(ThemeContext)
  const [enabled, setEnabled] = React.useState(lang === 'es')
  
  React.useEffect(() => {
    localStorage.setItem('lang', enabled ? 'es' : 'en')

    setTheme({
      lang: enabled ? 'es' : 'en',
    })
  }, [enabled])

  return (
    <div className="switch">
      <label className="switch__label" checked={enabled} onChange={setEnabled}>
        En
      </label>
      <SwitchUtil checked={enabled} onChange={setEnabled} className={`${enabled ? 'bg-1' : 'bg-2'} switch__component`}>
        <span className="switch__sr-only">Enable notifications</span>
        <span className={`${enabled ? 'switch__activate' : 'switch__desactivate'} switch__toggle`} />
      </SwitchUtil>
      <label className="switch__label" checked={enabled} onChange={setEnabled}>
        Es
      </label>
    </div>
  )
}

export default Switch
