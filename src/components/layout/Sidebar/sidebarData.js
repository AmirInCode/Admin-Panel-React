import {
  LayoutDashboard,
  Users,
  CreditCard,
  ChartColumn,
  Settings,
} from "lucide-react";

const sidebarData = [
  {
    id: 1,
    title: "داشبورد",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "کاربران",
    path: "/users",
    icon: Users,
  },
  {
    id: 3,
    title: "تراکنش‌ها",
    path: "/transactions",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "تحلیل‌ها",
    path: "/analytics",
    icon: ChartColumn,
  },
  {
    id: 5,
    title: "تنظیمات",
    path: "/settings",
    icon: Settings,
  },
];

export default sidebarData;