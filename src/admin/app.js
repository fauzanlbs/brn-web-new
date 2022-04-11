import AuthLogo from './extensions/brn-logo.png';
import MenuLogo from './extensions/brn-logo.png';
// import favicon from './extensions/favicon.ico';


export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    // head: {
    //   favicon: favicon,
    // },
    // Add a new locale, other than 'en'
    locales: ['id'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        danger100: '#403949', // TOGGLE OFF BG
        danger700: '#c13c58', // TOGGLE OFF COLOR
        neutral0: '#241b2e', // BACKGROUND SIDEBAR
        neutral100: '#262334', // BACKGROUND CONTENT
        neutral150: '#241b2e', // DISABLED BUTTON BG
        neutral200: '#262334', // LINE THROUGH MIDDLE
        neutral500: '#8e8ea9', // MENU IDLE COLOR
        neutral600: '#9a96a4', // MENU HOVER COLOR
        neutral700: '#9a96a4', // MENU ACTIVE ICON COLOR
        neutral800: '#afa6b6', // TITLE COLORS
        neutral900: '#403949', // TOOLTIP BG
        primary100: '#403949', // MENU ACTIVE BG
        primary200: '#241b2e', // PLUS SIGN BG
        primary500: '#7f7145', // PRIMARY BUTTON HOVER
        primary600: '#bba551', // PRIMARY BUTTON COLOR
        primary700: '#33adae', // HIGHLIGHT COLOR
        secondary100: '#241b2e', // INFO BOX COLOR
        success100: '#241b2e', // SUCCESS BOX BG
      },
    },
    translations: {
      id: {
        'Auth.form.welcome.subtitle': 'Silahkan login terlebih dahulu',
        'Auth.form.welcome.title': 'Aplikasi BRN',
        'app.components.HomePage.welcome.again': 'BRN Web Admin',
        'app.components.HomePage.button.blog': ' ',
        'app.components.HomePage.welcomeBlock.content.again': 'Selamat datang kembali',
        'app.components.LeftMenu.navbrand.title': 'BRN Admin',
        'Auth.form.email.placeholder': 'contoh: budi@brnjuara.com'
      },
      en: {
        'Auth.form.welcome.subtitle': 'Please login',
        'Auth.form.welcome.title': 'BRN Application',
        'app.components.HomePage.welcome.again': 'BRN Web Admin',
        'app.components.HomePage.button.blog': ' ',
        'app.components.HomePage.welcomeBlock.content.again': 'Welcome back again',
        'app.components.LeftMenu.navbrand.title': 'BRN Admin',
        'Auth.form.email.placeholder': 'ex: budi@brnjuara.com'
      }
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() { },
};
