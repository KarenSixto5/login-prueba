"use client";

import type { ReactNode } from "react";

type ModalAction = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
};

type ModalProps = {
  isOpen: boolean;
  icon: ReactNode;
  iconBgClassName?: string;
  title: string;
  description: string;
  actions: ModalAction[];
};

export default function Modal({
  isOpen,
  icon,
  iconBgClassName = "bg-[#F59E0B]",
  title,
  description,
  actions,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8 text-center shadow-2xl">
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white ${iconBgClassName}`}
        >
          {icon}
        </div>

        <h2 className="mt-6 text-xl font-semibold text-white">{title}</h2>
        <p className="mt-3 text-sm text-white/60">{description}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              onClick={action.onClick}
              className={
                action.variant === "secondary"
                  ? "w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  : "w-full rounded-full bg-gradient-to-r from-[#88A7E1] to-[#EE8E56] px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              }
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
