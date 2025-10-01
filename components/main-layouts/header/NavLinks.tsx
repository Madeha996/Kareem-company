import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

const links = [
  { label: "home", href: "home" },
  { label: "about", href: "about" },
  { label: "products", href: "products" },
  { label: "suppliers", href: "suppliers" },
  { label: "news", href: "news" },
  { label: "branches", href: "branches" },
];

export default function NavLinks() {
  const { locale } = useParams();
  const t = useTranslations("General");
  return (
    <nav className="flex gap-8 font-medium text-gray-700">
      {links.map((link) => (
        <Link
          key={link.href}
          href={`/${locale}/${link.href}`}
          className="relative group hover:text-blue-600 transition"
        >
          {t(link.label)}
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
}
