import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/Sentiment-logo.svg"
        alt=""
        width={22}
        height={22}
        className="h-[22px] w-[22px]"
      />
      <span className="text-lg font-semibold tracking-tight text-foreground">Sentiment</span>
    </Link>
  );
}
