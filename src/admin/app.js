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
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    },
    translations: {
      id: {
        'Auth.form.welcome.subtitle': 'Silahkan login terlebih dahulu',
        'Auth.form.welcome.title': 'Aplikasi BRN',
        'app.components.HomePage.welcome.again': 'BRN Web Admin',
        'app.components.HomePage.button.blog': ' ',
        'app.components.HomePage.welcomeBlock.content.again': 'Selamat datang kembali',
        'app.components.LeftMenu.navbrand.title': 'BRN Admin'
      },
      en: {
        'Auth.form.welcome.subtitle': 'Lets login',
        'Auth.form.welcome.title': 'BRN Application',
        'app.components.HomePage.welcome.again': 'BRN Web Admin',
        'app.components.HomePage.button.blog': ' ',
        'app.components.HomePage.welcomeBlock.content.again': 'Welcome back again',
        'app.components.LeftMenu.navbrand.title': 'BRN Admin'
      }
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() { },
};
