import { useEffect, useRef } from "react";
import ship from "../assets/cursor.png";

export default function ShipCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX - 20}px, ${
          mouseY - 20
        }px, 0) rotate(-3deg)`;
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <img
      ref={cursorRef}
      src={ship}
      alt="Cursor"
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] select-none"
      style={{
        willChange: "transform",
      }}
      draggable={false}
    />
  );
}