import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook02Icon,
  Linkedin01Icon,
  NewTwitterIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";

const legalLinks = [
  { label: "Legales", href: "#" },
  { label: "Legales", href: "#" },
  { label: "Legales", href: "#" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook02Icon },
  { label: "LinkedIn", href: "#", icon: Linkedin01Icon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "X", href: "#", icon: NewTwitterIcon },
  { label: "TikTok", href: "#", icon: TiktokIcon },
];

export default function Footer() {
  return (
    <footer className="relative z-10 w-full px-6 py-6 sm:px-10">
      <div className="flex flex-col items-center gap-4 text-xs text-white/60 sm:flex-row sm:justify-between">
        <div className="order-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:order-1">
          {legalLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="order-1 sm:order-2">
          ©2026 Bankaool. Todos los derechos reservados
        </p>

        <div className="order-3 flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <HugeiconsIcon icon={social.icon} size={16} strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
