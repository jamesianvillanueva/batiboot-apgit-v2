// ----------------------------------------------------------------------


function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_BATIBOOT = '/batiboot';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
 // newPassword: (token) => path(ROOTS_AUTH, `/new-password/${token}`),
  newPassword: path(ROOTS_AUTH, `/new-password`),

};


export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  home2: '/home2',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
    sample:{
      view: (id) => path(ROOTS_DASHBOARD, `/sample/${id}`),
      demoView: path(ROOTS_DASHBOARD, '/sample/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
    }
  },

  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    new: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}`),
    edit: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    demoView: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
  },
  /* invoice: {
    root: path(ROOTS_DASHBOARD, '/invoice'),
    list: path(ROOTS_DASHBOARD, '/invoice/list'),
    new: path(ROOTS_DASHBOARD, '/invoice/new'),
    view: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  }, */
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    new: path(ROOTS_DASHBOARD, '/blog/new'),
    view: (title) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  },
}; 

// Batiboot paths

export const PATH_BATIBOOT = {
  root : ROOTS_BATIBOOT,
  general: {
    dashboard: path(ROOTS_BATIBOOT, '/dashboard'),
  },
  invoice: {
    root: path(ROOTS_BATIBOOT, '/invoice'),
    list: path(ROOTS_BATIBOOT, '/invoice/list'),
    create: path(ROOTS_BATIBOOT, '/invoice/create'),
    view: (id) => path(ROOTS_BATIBOOT, `/invoice/${id}`),
    edit: (id) => path(ROOTS_BATIBOOT, `/invoice/${id}/edit`) 
  },
  user: {
    root: path(ROOTS_BATIBOOT, '/user'),
    account: path(ROOTS_BATIBOOT, '/user/account'),
    list: path(ROOTS_BATIBOOT, '/user/list'),
    designation: path(ROOTS_BATIBOOT, '/user/designation'),
    department: path(ROOTS_BATIBOOT, '/user/department'),
    role: path(ROOTS_BATIBOOT, '/user/roles'),
    createRole: path(ROOTS_BATIBOOT, '/user/roles/create'),
    createDesignation: path(ROOTS_BATIBOOT, '/user/designation/create'),
    createDepartment: path(ROOTS_BATIBOOT, '/user/department/create'),
    profile: path(ROOTS_BATIBOOT, '/user/profile'),
  },
  order: {
    root: path(ROOTS_BATIBOOT, '/order'),
    list: path(ROOTS_BATIBOOT, '/order/list'),
    createOrder: path(ROOTS_BATIBOOT, '/order/create'),
    shipment: path(ROOTS_BATIBOOT, '/order/tracking'),
    createShipment: path(ROOTS_BATIBOOT, '/order/tracking/createShipment'),

  },
  inquire: {
    root: path(ROOTS_BATIBOOT, '/inquire'),
    list: path(ROOTS_BATIBOOT, '/inquire/list'),
    create: path(ROOTS_BATIBOOT, '/inquire/create'),
  },
  help: {
    root: path(ROOTS_BATIBOOT, '/help'),
    faq: path(ROOTS_BATIBOOT, '/help/faq')
  },
  mail: {
    root: path(ROOTS_BATIBOOT, '/mail'),
    all: path(ROOTS_BATIBOOT, '/mail/all'),
  },
  rules: path(ROOTS_BATIBOOT, '/rules'),
  
}


export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
 