import { useEffect, useState } from "react";
import ship from "../assets/cursor.png";

export default function ShipCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <img
      src={ship}
      alt=""
      className="fixed pointer-events-none z-[9999] w-10 h-10"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%) rotate(-3deg)",
      }}
    />
  );
}