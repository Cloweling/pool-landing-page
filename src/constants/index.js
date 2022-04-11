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

import Lang from '../lang'

const ELEMENT_NAV = [
  {
    en: Lang.en.Main.service,
    es: Lang.es.Main.service,
    to: '/#id-services',
  },
  {
    en: Lang.en.Main.work,
    es: Lang.es.Main.work,
    to: '/#id-works',
  },
  {
    en: Lang.en.Main.location,
    es: Lang.es.Main.location,
    to: '/#id-ubication',
  },
]

const HEADER = {
  description: {
    en: Lang.en.Headers.description,
    es: Lang.es.Headers.description,
  },
  cta: {
    en: Lang.en.Headers.cta,
    es: Lang.es.Headers.cta,
  },
}

const SERVICES = {
  title: {
    en: Lang.en.Services.title,
    es: Lang.es.Services.title,
  },
  services: [
    {
      title: {
        en: Lang.en.Services.treatment.title,
        es: Lang.es.Services.treatment.title,
      },
      description: {
        en: Lang.en.Services.treatment.description,
        es: Lang.es.Services.treatment.description,
      },
      Img: Algae,
    },

    {
      title: {
        en: Lang.en.Services.spa.title,
        es: Lang.es.Services.spa.title,
      },
      description: {
        en: Lang.en.Services.spa.description,
        es: Lang.es.Services.spa.description,
      },
      Img: Spa,
    },

    {
      title: {
        en: Lang.en.Services.acid.title,
        es: Lang.es.Services.acid.title,
      },
      description: {
        en: Lang.en.Services.acid.description,
        es: Lang.es.Services.acid.description,
      },
      Img: Acid,
    },

    {
      title: {
        en: Lang.en.Services.salt.title,
        es: Lang.es.Services.salt.title,
      },
      description: {
        en: Lang.en.Services.salt.description,
        es: Lang.es.Services.salt.description,
      },
      Img: Salt,
    },

    {
      title: {
        en: Lang.en.Services.blacksmith.title,
        es: Lang.es.Services.blacksmith.title,
      },
      description: {
        en: Lang.en.Services.blacksmith.description,
        es: Lang.es.Services.blacksmith.description,
      },
      Img: Sales,
    },

    {
      title: {
        en: Lang.en.Services.installation.title,
        es: Lang.es.Services.installation.title,
      },
      description: {
        en: Lang.en.Services.installation.description,
        es: Lang.es.Services.installation.description,
      },
      Img: Installation,
    },
  ],
}

const WORKS = {
  title: {
    en: Lang.en.Works.title,
    es: Lang.es.Works.title,
  },
  before: {
    en: Lang.en.Works.before,
    es: Lang.es.Works.before,
  },
  after: {
    en: Lang.en.Works.after,
    es: Lang.es.Works.after,
  },
}

const LOCATION = {
  title: {
    en: Lang.en.Location.title,
    es: Lang.es.Location.title,
  },
}

const NAVBAR_ICONS = [
  {
    id: 1,
    title: {
      en: Lang.en.Main.home,
      es: Lang.es.Main.home,
    },
    Img: home,
    to: '/#id-header',
  },
  {
    id: 2,
    title: {
      en: Lang.en.Main.service,
      es: Lang.es.Main.service,
    },
    Img: services,
    to: '/#id-services',
  },
  {
    id: 3,
    title: {
      en: Lang.en.Main.work,
      es: Lang.es.Main.work,
    },
    Img: works,
    to: '/#id-works',
  },
  {
    id: 4,
    title: {
      en: Lang.en.Main.location,
      es: Lang.es.Main.location,
    },
    Img: ubication,
    to: '/#id-ubication',
  },
]

const FOOTER = {
  description: {
    en: Lang.en.Footer.description,
    es: Lang.es.Footer.description,
  },
  footer: {
    en: `${Lang.en.Footer.footer} - 2022`,
    es: `${Lang.es.Footer.footer} - 2022`,
  },
}

export { ELEMENT_NAV, HEADER, SERVICES, FOOTER, NAVBAR_ICONS, WORKS, LOCATION }
