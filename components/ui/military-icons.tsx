import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function BinocularsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="8" y="18" width="20" height="28" rx="10" stroke="currentColor" strokeWidth="3" />
      <rect x="36" y="18" width="20" height="28" rx="10" stroke="currentColor" strokeWidth="3" />
      <path d="M28 28H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="18" cy="38" r="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="46" cy="38" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 18V14C14 12.8954 14.8954 12 16 12H20C21.1046 12 22 12.8954 22 14V18" stroke="currentColor" strokeWidth="2.5" />
      <path d="M42 18V14C42 12.8954 42.8954 12 44 12H48C49.1046 12 50 12.8954 50 14V18" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function CrosshairIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
      <line x1="32" y1="4" x2="32" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="48" x2="32" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="4" y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function RadarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
      <line x1="32" y1="32" x2="50" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="42" cy="24" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="26" cy="20" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M32 6L8 18V32C8 46 18 56 32 60C46 56 56 46 56 32V18L32 6Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M32 14L16 22V32C16 42 22 50 32 54C42 50 48 42 48 32V22L32 14Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <path d="M24 32L30 38L42 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RadioIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="16" y="20" width="32" height="38" rx="4" stroke="currentColor" strokeWidth="3" />
      <rect x="22" y="26" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="8" x2="32" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="6" r="2" fill="currentColor" />
      <circle cx="28" cy="46" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="46" r="3" stroke="currentColor" strokeWidth="2" />
      <line x1="22" y1="52" x2="42" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <polygon points="32,14 36,30 32,34 28,30" fill="currentColor" />
      <polygon points="32,50 28,34 32,30 36,34" fill="currentColor" opacity="0.4" />
      <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="4" x2="32" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="54" x2="32" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="32" x2="10" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="54" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M22 6H42L38 24H26L22 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="26" y1="6" x2="28" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="38" y1="6" x2="36" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="32" cy="40" r="16" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="40" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <polygon
        points="32,30 34.5,36 41,36.5 36,41 37.5,47 32,44 26.5,47 28,41 23,36.5 29.5,36"
        fill="currentColor"
      />
    </svg>
  );
}

export function CodeTerminalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="10" width="52" height="38" rx="4" stroke="currentColor" strokeWidth="3" />
      <line x1="6" y1="20" x2="58" y2="20" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="15" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="15" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="26" cy="15" r="2" fill="currentColor" opacity="0.5" />
      <path d="M16 30L24 36L16 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="28" y1="42" x2="40" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="16" y="52" width="32" height="4" rx="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function MilitaryStarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <polygon
        points="32,6 38,24 58,24 42,36 48,54 32,44 16,54 22,36 6,24 26,24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <polygon
        points="32,16 35,26 46,26 37,32 40,42 32,36 24,42 27,32 18,26 29,26"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}

export function DogTagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="14" y="16" width="36" height="42" rx="8" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M28 12C28 8 24 4 24 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 12C36 8 40 4 40 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="30" x2="44" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="36" x2="38" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="42" x2="34" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function TankIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="20" y="24" width="80" height="20" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <rect x="40" y="12" width="40" height="14" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <line x1="80" y1="19" x2="110" y2="15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="60" cy="50" rx="42" ry="8" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="30" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="70" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="90" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function HelicopterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="50" cy="32" rx="28" ry="14" stroke="currentColor" strokeWidth="2.5" />
      <path d="M78 32L110 28" stroke="currentColor" strokeWidth="2" />
      <path d="M110 22V34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="10" y1="14" x2="90" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="14" x2="50" y2="18" stroke="currentColor" strokeWidth="2.5" />
      <line x1="36" y1="46" x2="30" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="64" y1="46" x2="70" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="54" x2="40" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="54" x2="76" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* === VEHICLE & WEAPON SILHOUETTES (decorative, larger viewBox) === */

export function DroneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Central body */}
      <ellipse cx="80" cy="40" rx="18" ry="8" stroke="currentColor" strokeWidth="2" />
      {/* Camera pod */}
      <ellipse cx="80" cy="48" rx="6" ry="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="80" cy="48" r="2" fill="currentColor" opacity="0.5" />
      {/* Arms */}
      <line x1="62" y1="36" x2="30" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="98" y1="36" x2="130" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="62" y1="44" x2="30" y2="60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="98" y1="44" x2="130" y2="60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Rotors */}
      <circle cx="30" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="130" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="30" cy="60" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="130" cy="60" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Rotor centers */}
      <circle cx="30" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="130" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="60" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="130" cy="60" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function GuidedMissileIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Missile body */}
      <path d="M20 30L10 24V36L20 30Z" fill="currentColor" opacity="0.4" />
      <rect x="20" y="24" width="100" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      {/* Nose cone */}
      <path d="M120 24L145 30L120 36" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Seeker head */}
      <circle cx="140" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="140" cy="30" r="1" fill="currentColor" />
      {/* Rear fins */}
      <line x1="22" y1="24" x2="14" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="36" x2="14" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Mid fins */}
      <line x1="70" y1="24" x2="66" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="70" y1="36" x2="66" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Body details */}
      <line x1="40" y1="24" x2="40" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="90" y1="24" x2="90" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Exhaust trail */}
      <path d="M10 30C6 28 2 30 0 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export function ArmoredVehicleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Main body */}
      <path d="M30 30H130L140 45H20L30 30Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Cabin */}
      <path d="M50 30V18H100V30" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Windshield */}
      <line x1="60" y1="18" x2="60" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="80" y1="18" x2="80" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Crane/excavator arm */}
      <line x1="110" y1="18" x2="130" y2="4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="130" y1="4" x2="150" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M148 10L155 20L150 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Tracks */}
      <rect x="18" y="45" width="124" height="18" rx="9" stroke="currentColor" strokeWidth="2" />
      {/* Wheels inside tracks */}
      <circle cx="36" cy="54" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="54" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="84" cy="54" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="108" cy="54" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="126" cy="54" r="5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SatelliteAntennaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Base vehicle */}
      <rect x="20" y="50" width="80" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      {/* Wheels */}
      <circle cx="36" cy="70" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="70" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="84" cy="70" r="6" stroke="currentColor" strokeWidth="2" />
      {/* Mast */}
      <line x1="70" y1="50" x2="70" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Dish */}
      <path d="M50 30C50 14 90 14 90 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M55 28C55 18 85 18 85 28" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Feed horn */}
      <line x1="70" y1="30" x2="70" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="70" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
      {/* Signal waves */}
      <path d="M82 8C90 4 96 6 100 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M86 14C92 10 98 12 104 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      {/* Cab */}
      <rect x="22" y="40" width="30" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SpyPlaneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 180 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Fuselage */}
      <ellipse cx="90" cy="35" rx="60" ry="7" stroke="currentColor" strokeWidth="2" />
      {/* Nose cone */}
      <path d="M150 35L170 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="172" cy="35" r="3" stroke="currentColor" strokeWidth="1.5" />
      {/* Cockpit */}
      <path d="M140 28C145 26 150 28 150 32" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {/* Long wings (U-2 style) */}
      <line x1="70" y1="35" x2="10" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="70" y1="35" x2="10" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 20L10 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="110" y1="35" x2="170" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="110" y1="35" x2="170" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M170 20L170 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      {/* Tail */}
      <line x1="32" y1="35" x2="20" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="10" x2="30" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sensor pod */}
      <ellipse cx="90" cy="44" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CargoPlaneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Fuselage - thick C-130 style */}
      <rect x="30" y="28" width="120" height="22" rx="11" stroke="currentColor" strokeWidth="2" />
      {/* Nose */}
      <path d="M150 28C160 28 165 35 165 39C165 43 160 50 150 50" stroke="currentColor" strokeWidth="2" />
      {/* Cockpit windows */}
      <path d="M155 34L160 36L160 42L155 44" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {/* High wing */}
      <line x1="65" y1="28" x2="15" y2="18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="105" y1="28" x2="155" y2="18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Wing trailing edge */}
      <line x1="75" y1="28" x2="15" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <line x1="95" y1="28" x2="155" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      {/* Engines under wings (4 engines) */}
      <rect x="38" y="20" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="58" y="18" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="100" y="18" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="120" y="20" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Propellers */}
      <line x1="44" y1="16" x2="44" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="64" y1="14" x2="64" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="106" y1="14" x2="106" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="126" y1="16" x2="126" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* T-tail */}
      <line x1="35" y1="28" x2="30" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="10" x2="38" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Rear ramp */}
      <path d="M30 40L22 50L30 50" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {/* Landing gear */}
      <line x1="70" y1="50" x2="70" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="100" y1="50" x2="100" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="70" cy="62" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="62" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function FighterJetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 180 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Fuselage */}
      <path d="M20 35L40 30L140 28L170 35L140 42L40 40L20 35Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Nose cone */}
      <path d="M170 35L180 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cockpit */}
      <path d="M140 30C148 28 152 30 152 35C152 40 148 42 140 40" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {/* Delta wings */}
      <path d="M80 28L50 8L60 28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M80 42L50 62L60 42" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M100 28L130 10L120 28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M100 42L130 60L120 42" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Vertical tail */}
      <path d="M35 30L25 12L45 28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Engine exhausts */}
      <circle cx="25" cy="33" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="25" cy="37" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Afterburner */}
      <path d="M22 33L12 32L14 35L12 38L22 37" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
