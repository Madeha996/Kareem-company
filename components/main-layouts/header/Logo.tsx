import Image from "next/image";

export default function Logo() {
  return (
    <div className="cursor-pointer">
      <Image
        src="/next.svg"
        alt="logo"
        width={80}
        height={80}
        className="hover:opacity-80 transition"
      />
    </div>
  );
}
