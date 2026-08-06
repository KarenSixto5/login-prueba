"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Alert01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Modal from "./Modal";

type LocationState = "idle" | "granted" | "blocked";

export default function LoginCard() {
  const [identifier, setIdentifier] = useState("");
  const [locationState, setLocationState] = useState<LocationState>("idle");
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const isValid = identifier.length === 8 || identifier.length === 16;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const digitsOnly = event.target.value.replace(/\D/g, "").slice(0, 16);
    setIdentifier(digitsOnly);
  }

  function requestLocation() {
    if (!("geolocation" in navigator)) {
      setShowLocationModal(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocationState("granted");
        setShowLocationModal(false);
      },
      () => {
        setShowLocationModal(true);
      },
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) return;
    requestLocation();
  }

  function handleAllowLocation() {
    requestLocation();
  }

  function handleRejectLocation() {
    setShowLocationModal(false);
    setLocationState("blocked");
  }

  return (
    <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:w-1/2 lg:px-16">
      <Image
        src="/logo-welcome.svg"
        alt="Bankaool"
        width={160}
        height={48}
        priority
        className="mb-10 h-10 w-auto"
      />

      <h1 className="bg-gradient-to-r from-[#88A7E1] to-[#EE8E56] bg-clip-text text-3xl font-semibold leading-tight text-transparent sm:text-4xl">
        Te damos la bienvenida
      </h1>

      <p className="mt-3 text-base text-white">
        Ingresa tus datos para iniciar sesión
      </p>

      {locationState === "granted" && coords ? (
        <div className="mt-10 rounded-xl border border-white/15 bg-white/5 p-5">
          <p className="text-sm font-medium text-white">Ubicación verificada</p>
          <p className="mt-2 text-xs text-white/50">
            Latitud: {coords.latitude.toFixed(4)}, Longitud: {coords.longitude.toFixed(4)}
          </p>
        </div>
      ) : locationState === "blocked" ? (
        <div className="mt-10 rounded-xl border border-white/15 bg-white/5 p-5">
          <p className="text-sm font-medium text-white">
            No puedes continuar sin compartir tu ubicación
          </p>
          <p className="mt-2 text-xs text-white/50">
            Por regulación oficial necesitamos acceso a tu ubicación para continuar con el inicio de sesión.
          </p>
          <button
            type="button"
            onClick={requestLocation}
            className="mt-4 text-xs font-semibold text-[#88A7E1] transition-colors hover:text-[#EE8E56]"
          >
            Volver a intentar
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-2">
          <label htmlFor="identifier" className="text-sm font-medium text-white">
            Identificador o tarjeta <span className="text-[#EE8E56]">*</span>
          </label>

          <input
            id="identifier"
            name="identifier"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            required
            value={identifier}
            onChange={handleChange}
            placeholder="Ingresa tu identificador o número de tarjeta"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#88A7E1]"
          />

          <p className="text-xs text-white/50">
            8 dígitos de identificador o 16 de tarjeta.
          </p>

          <button
            type="submit"
            disabled={!isValid}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-[#88A7E1] to-[#EE8E56] px-6 py-3.5 text-sm font-semibold text-black transition-opacity enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Continuar
          </button>
        </form>
      )}

      <Modal
        isOpen={showLocationModal}
        icon={<HugeiconsIcon icon={Alert01Icon} size={32} strokeWidth={2} />}
        title="Permiso de ubicación"
        description="Por regulación oficial y para proteger tu cuenta, necesitamos acceso a tu ubicación."
        actions={[
          { label: "Permitir", onClick: handleAllowLocation, variant: "primary" },
          { label: "Rechazar", onClick: handleRejectLocation, variant: "secondary" },
        ]}
      />
    </div>
  );
}
