
interface MenuItem {
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    title: string;
    link: string;
    has_sub_dropdown?: boolean;
    sub_menus?: {
      title: string;
      link: string;
    }[];
  }[];
}[];


const menu_data: MenuItem[]  = [
  {
    title: "Inicio",
    link: "/",
    has_dropdown: false,
  },
  {
    title: "Sobre mí",
    link: "/about-2",
    has_dropdown: false,
    sub_menus: [
      { title: "About 01", link: "/about-1" },
      { title: "About 02", link: "/about-2" },
      { title: "About 03", link: "/about-3" },
    ],
  },
  {
    title: "Servicios",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        title: "Landing Pages",
        link: "/service",
        has_sub_dropdown: false,
        sub_menus: [
          { title: "Landing Pages", link: "/service" },
          { title: "Service Details", link: "/single-service" },
        ],
      },
      {
        title: "Tiendas Online",
        link: "/service",
        has_sub_dropdown: false,
      },
      {
        title: "Software a la Medida",
        link: "/service",
        has_sub_dropdown: false,
      },
      {
        title: "Portafolio",
        link: "/portfolio-1",
        has_sub_dropdown: false
      },
      // {
      //   title: "Team",
      //   link: "#",
      //   has_sub_dropdown: true,
      //   sub_menus: [
      //     { title: "Team", link: "/team" },
      //     { title: "Team Details", link: "/single-team" },
      //   ],
      // },
      // { title: "Faq", link: "/faq", has_sub_dropdown: false },
      // { title: "Pricing", link: "/pricing", has_sub_dropdown: false },
      // { title: "Error 404", link: "/error-404", has_sub_dropdown: false },
    ],
  },
  {
    title: "Blog",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { title: "Blog", link: "/blog" },
      { title: "Blog Details", link: "/single-blog" },
    ],
  },
  {
    title: "Contact",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { title: "Contact 01", link: "/contact-us1" },
      { title: "Contact 02", link: "/contact-us2" },
      { title: "Contact 03", link: "/contact-us3" },
    ],
  },
];

export default menu_data;