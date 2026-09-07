import Image from "next/image";
import Link from "next/link";

type RatekLogoProps = {
  variant?: "header" | "footer";
};

export function RatekLogo({ variant = "header" }: RatekLogoProps) {
  return (
    <Link
      href="/"
      // className={`ratek-logo ratek-logo-${variant}`}
      aria-label="Ratek — Rapid Access Technology"
    >
      <Image
        src="/images/ratek-logo.svg"
        alt="Ratek — Rapid Access Technology"
        width={288}
        height={80}
        priority={variant === "header"}
      />
    </Link>
  );
}
