import Image from "next/image";
import Link from "next/link";

type RatekLogoProps = {
  variant?: "header" | "footer";
};

export function RatekLogo({ variant = "header" }: RatekLogoProps) {
  return (
    <Link
      href="/"
      className={`ratek-logo ratek-logo-${variant}`}
      aria-label="Ratek — Rapid Access Technology"
    >
      <Image
        src="/images/ratek-logo.png"
        alt="Ratek — Rapid Access Technology"
        width={180}
        height={50}
        priority={variant === "header"}
      />
    </Link>
  );
}
