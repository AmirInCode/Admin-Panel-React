import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
} from "lucide-react";

const statsData = [
  {
    id: 1,
    title: "درآمد کل",
    value: "۲۴۵ میلیون",
    change: "+۱۲٪",
    positive: true,
    icon: DollarSign,
    chartData: [
      { value: 15 },
      { value: 22 },
      { value: 18 },
      { value: 30 },
      { value: 26 },
      { value: 40 },
      { value: 48 },
    ],
  },
  {
    id: 2,
    title: "سفارش‌ها",
    value: "۱,۲۴۸",
    change: "+۸٪",
    positive: true,
    icon: ShoppingBag,
    chartData: [
      { value: 10 },
      { value: 14 },
      { value: 20 },
      { value: 18 },
      { value: 30 },
      { value: 28 },
      { value: 42 },
    ],
  },
  {
    id: 3,
    title: "کاربران",
    value: "۳,۵۶۰",
    change: "-۲٪",
    positive: false,
    icon: Users,
    chartData: [
      { value: 40 },
      { value: 36 },
      { value: 32 },
      { value: 28 },
      { value: 30 },
      { value: 24 },
      { value: 20 },
    ],
  },
  {
    id: 4,
    title: "رشد فروش",
    value: "۱۸٪",
    change: "+۵٪",
    positive: true,
    icon: TrendingUp,
    chartData: [
      { value: 8 },
      { value: 12 },
      { value: 18 },
      { value: 22 },
      { value: 20 },
      { value: 28 },
      { value: 35 },
    ],
  },
];

export default statsData;