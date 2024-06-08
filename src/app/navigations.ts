export const navigations = [
  { name: "داشبورد", path: "/dashboard/default", icon: "dashboard" },
  // { label: "صفحات", type: "label" },
  {
    name: "ثبت نام/ ورود",
    icon: "security",
    children: [
      { name: "ورود", iconText: "SI", path: "/session/signin" },
      { name: "ثبت نام", iconText: "SU", path: "/session/signup" },
      // {
      //   name: "فراموشی رمز عبور",
      //   iconText: "FP",
      //   path: "/session/forgot-password",
      // },
    ],
  },
];
