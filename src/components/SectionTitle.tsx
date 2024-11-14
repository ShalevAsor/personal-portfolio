import { Coiny } from "next/font/google";

const coiny = Coiny({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function SectionTitle({ text }: { text: string }) {
  return (
    <h1
      className={`
        ${coiny.className}
        text-7xl font-bold
        text-title
         bg-clip-text
        animate-shine bg-[length:200%_auto]
      `}
    >
      {text}
    </h1>
  );
}
