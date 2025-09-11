import Image from "next/image";

export default function SentinelleLogo() {
  return (
    <div className="bg-gray-700 p-2 rounded-lg">
      <Image
        src="/sentinel-logo.png"
        alt="Sentinelle"
        width={52}
        height={52}
        className="grayscale"
      />
    </div>
  );
}