import Algae from '../images/service/algae.svg'
import Spa from '../images/service/spa.svg'
import Acid from '../images/service/acid.svg'
import Salt from '../images/service/salt.svg'
import Sales from '../images/service/sales.svg'
import Installation from '../images/service/installation.svg'
import home from '../images/navbar-mobile/home.svg'
import services from '../images/navbar-mobile/services.svg'
import works from '../images/navbar-mobile/works.svg'
import ubication from '../images/navbar-mobile/ubication.svg'

const ELEMENT_NAV = [
  {
    en: 'SERVICES',
    es: 'SERVICIOS',
    to: '/#id-services',
  },
  {
    en: 'WORKS',
    es: 'TRABAJOS',
    to: '/#id-works',
  },
  {
    en: 'UBICATION',
    es: 'UBICACIÓN',
    to: '/#id-ubication',
  },
]

const SERVICES = [
  {
    title: 'Eliminación de algas',
    description: 'Elimina todo rastro de algas para evitar problemas de salud',
    Img: Algae,
  },
  {
    title: 'Servicios Spa',
    description: 'Elimina todo rastro de algas para evitar problemas de salud',
    Img: Spa,
  },

  {
    title: 'Lavado con Acido',
    description: 'Elimina todo rastro de algas para evitar problemas de salud',
    Img: Acid,
  },
  {
    title: 'Sistemas de Sal',
    description: 'Elimina todo rastro de algas para evitar problemas de salud',
    Img: Salt,
  },
  {
    title: 'Sales Service',
    description: 'Elimina todo rastro de algas para evitar problemas de salud',
    Img: Sales,
  },
  {
    title: 'Instalación',
    description: 'Elimina todo rastro de algas para evitar problemas de salud',
    Img: Installation,
  },
]

const NAVBAR_ICONS = [
  {
    id: 1,
    es: 'Inicio',
    en: 'Home',
    Img: home,
    to: '/#id-header',
  },
  {
    id: 2,
    es: 'Servicios',
    en: 'Services',
    Img: services,
    to: '/#id-services',
  },
  {
    id: 3,
    es: 'Trabajos',
    en: 'Works',
    Img: works,
    to: '/#id-works',
  },
  {
    id: 4,
    es: 'Ubicación',
    en: 'Ubication',
    Img: ubication,
    to: '/#id-ubication',
  },
]

const FOOTER = {
  es: 'Todos los derechos reservados - 2022',
  en: 'All rights reserved - 2022',
}

export { ELEMENT_NAV, SERVICES, FOOTER, NAVBAR_ICONS }
