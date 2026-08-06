import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-10 flex w-full items-center justify-between px-6 py-6 sm:px-10">
      <Image
        src="/logo-header.svg"
        alt="Bankaool"
        width={140}
        height={32}
        priority
        className="h-7 w-auto sm:h-8"
      />

      <button
        type="button"
        aria-label="Abrir menú"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/10"
      >
        <span className="h-2 w-2 rounded-full bg-white/70" />
      </button>
    </header>
  );
}
