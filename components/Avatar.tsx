import Image from "next/image";

type Props = {
  src: string;
  size?: number;
  alt?: string;
};

export default function Avatar({ src, size = 72, alt = "Avatar" }: Props) {
  const s = Math.max(40, size);
  const containerStyle: React.CSSProperties = {
    width: s,
    height: s,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    padding: 6,
    background: "#0f1216",
    boxShadow: "0 6px 18px rgba(0,0,0,.6)",
    border: "2px solid rgba(255,255,255,.06)",
    overflow: "hidden",
  };
  const imgStyle: React.CSSProperties = { borderRadius: 10, display: "block" };
  return (
    <div style={containerStyle}>
      <Image src={src} alt={alt} width={s - 8} height={s - 8} style={imgStyle} />
    </div>
  );
}
