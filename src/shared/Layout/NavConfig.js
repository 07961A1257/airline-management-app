// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "dashboard",
    path: "/",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "passenger list",
    path: "/passenger-list",
    icon: getIcon("eva:people-fill"),
  },
  {
    title: "ancillary services",
    path: "/ancillary-services",
    icon: getIcon("eva:shopping-bag-fill"),
  },
  {
    title: "check in",
    path: "/check-in",
    icon: getIcon("eva:file-text-fill"),
  },
  {
    title: "in flight",
    path: "/in-flight",
    icon: getIcon("eva:file-text-fill"),
  },
  {
    title: "login",
    path: "/login",
    icon: getIcon("eva:lock-fill"),
  },
];

export default navConfig;
