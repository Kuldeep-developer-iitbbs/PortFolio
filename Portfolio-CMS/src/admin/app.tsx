import type { StrapiApp } from '@strapi/strapi/admin';
import logo from './../../utils/svg/database-logo.svg';

export default {
  config: {
    auth: {
      logo,
    },
    head: {
      logo,
    },
    menu: {
      logo,
    },
    translation: {
      en: {

      }
    },
    tutorials: false,
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
