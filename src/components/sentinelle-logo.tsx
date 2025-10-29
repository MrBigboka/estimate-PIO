import Image from "next/image";

export default function PrettyInsideOutLogo() {
  return (
    <div className="p-2 rounded-lg">
      <Image
        src="/logo_pio.avif"
        alt="Pretty Inside Out"
        width={52}
        height={52}
      />
    </div>
  );
}