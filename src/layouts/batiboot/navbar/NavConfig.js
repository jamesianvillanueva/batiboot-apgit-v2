// routes
import { PATH_BATIBOOT, PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
  delivery: getIcon('ic_delivery'),
  order: getIcon('ic_order'),
  inquire: getIcon('ic_inquire'),
  help: getIcon('ic_help')
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      { title: 'Dashboard', path: PATH_BATIBOOT.general.dashboard, icon: ICONS.dashboard },
      {
        title: 'Billing',
        path: PATH_BATIBOOT.invoice.root,
        icon: ICONS.invoice,
        children: [
          { title: 'Invoice', path: PATH_BATIBOOT.invoice.list },
       /*    { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'create', path: PATH_DASHBOARD.invoice.new },
          { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit }, */
        ],
      },
      {
        title: 'Orders',
        path: PATH_BATIBOOT.order.root,
        icon: ICONS.order,
        children: [
          { title: 'List', path: PATH_BATIBOOT.order.list },
          { title: 'Tracking', path: PATH_BATIBOOT.order.shipment },
       /*    { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'create', path: PATH_DASHBOARD.invoice.new },
          { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit }, */
        ],
      },
      {
        title: 'Inquire & Quotation',
        path: PATH_BATIBOOT.inquire.root,
        icon: ICONS.inquire,
        children: [
          { title: 'List', path: PATH_BATIBOOT.inquire.list },
       /*    { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'create', path: PATH_DASHBOARD.invoice.new },
          { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit }, */
        ],
      },
      {
        title: 'Message',
        path: PATH_BATIBOOT.mail.root,
        icon: ICONS.mail,
        /* children: [
          { title: 'Mail', path: PATH_BATIBOOT.mail.message },
          { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'create', path: PATH_DASHBOARD.invoice.new },
          { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit }, 
        ], */
      },
    ],
  },
  {
    subheader: 'management',
    items: [
      {
        title: 'user & role',
        path: PATH_BATIBOOT.user.root,
        icon: ICONS.user,
        children: [
          { title: 'designations', path: PATH_BATIBOOT.user.designation },
          { title: 'departments', path: PATH_BATIBOOT.user.department },
          { title: 'user', path: PATH_BATIBOOT.user.list },
          { title: 'roles & permissions', path: PATH_BATIBOOT.user.role },
        ],
      },
      
      
    ],
  },
  {
    subheader: 'miscellaneous',
    items: [
      {
        title: 'Help & Assistance',
        path: PATH_BATIBOOT.help.root,
        icon: ICONS.help,
        children: [
          { title: 'Help', path: PATH_BATIBOOT.help.faq },
       /*    { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'create', path: PATH_DASHBOARD.invoice.new },
          { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit }, */
        ],
      },

      {
        title: 'Rules & Regulations',
        path: PATH_BATIBOOT.rules,
        icon: ICONS.help,
      }
    ]
  },

  /* items: [
    { title: 'dashboard', path: PATH_BATIBOOT.general.dashboard, icon: ICONS.dashboard },



  ]

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      // USER
      {
        title: 'user',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'profile', path: PATH_DASHBOARD.user.profile },
          { title: 'cards', path: PATH_DASHBOARD.user.cards },
          { title: 'list', path: PATH_DASHBOARD.user.list },
          { title: 'create', path: PATH_DASHBOARD.user.new },
          { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
          { title: 'account', path: PATH_DASHBOARD.user.account },
        ],
      },

      // E-COMMERCE
      {
        title: 'ecommerce',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [
          { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
          { title: 'product', path: PATH_DASHBOARD.eCommerce.demoView },
          { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
          { title: 'create', path: PATH_DASHBOARD.eCommerce.new },
          { title: 'edit', path: PATH_DASHBOARD.eCommerce.demoEdit },
          { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
        ],
      },

      // INVOICE
      {
        title: 'invoice',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.invoice,
        children: [
          { title: 'list', path: PATH_DASHBOARD.invoice.list },
          { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'create', path: PATH_DASHBOARD.invoice.new },
          { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit },
        ],
      },

      // BLOG
      {
        title: 'blog',
        path: PATH_DASHBOARD.blog.root,
        icon: ICONS.blog,
        children: [
          { title: 'posts', path: PATH_DASHBOARD.blog.posts },
          { title: 'post', path: PATH_DASHBOARD.blog.demoView },
          { title: 'create', path: PATH_DASHBOARD.blog.new },
        ],
      },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: 'app',
    items: [
      {
        title: 'mail',
        path: PATH_DASHBOARD.mail.root,
        icon: ICONS.mail,
        info: <Label color="error">+32</Label>,
      },
      { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
      { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
      { title: 'kanban', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban },
    ],
  },

  // DEMO MENU STATES
  {
    subheader: 'Other cases',
    items: [
      {
        // default roles : All roles can see this entry.
        // roles: ['user'] Only users can see this item.
        // roles: ['admin'] Only admin can see this item.
        // roles: ['admin', 'manager'] Only admin/manager can see this item.
        // Reference from 'src/guards/RoleBasedGuard'.
        title: 'item_by_roles',
        path: PATH_DASHBOARD.permissionDenied,
        icon: ICONS.menuItem,
        roles: ['admin'],
        caption: 'only_admin_can_see_this_item',
      },
      {
        title: 'menu_level_1',
        path: '#1',
        icon: ICONS.menuItem,
        children: [
          { title: 'menu_level_2', path: '#2', disabled: true },
          {
            title: 'menu_level_2',
            path: '#3',
            children: [
              { title: 'menu_level_3', path: '#4' },
              { title: 'menu_level_3', path: '#5' },
            ],
          },
        ],
      },
      { title: 'item_disabled', path: '#disabled', icon: ICONS.menuItem, disabled: true },
      {
        title: 'item_label',
        path: '#label',
        icon: ICONS.menuItem,
        info: (
          <Label color="info" startIcon={<Iconify icon="eva:email-fill" />}>
            NEW
          </Label>
        ),
      },
      { title: 'item_caption', path: '#caption', icon: ICONS.menuItem, caption: 'description' },
    ],
  }, */
];

export default navConfig;
